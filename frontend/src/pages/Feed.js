import React, { Component } from "react";
import "./Feed.css";
import io from "socket.io-client";

import api from "../services/api";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  state = {
    feed: [],
  };

  async componentDidMount() {
    this.registerToSocket();

    async function getUsers() {
      let url = "http://localhost:3333/posts";
      try {
        let res = await fetch(url);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    }
    let users = await getUsers();
    console.log(users);
    this.setState({ feed: users });
  }
  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("post", (newPost) => {
      //Criando uma função que ira receber um novo Feed e salvar em rumtime como primeiro da Lista(não funcionou)
      this.setState({ feed: [newPost, ...this.state.feed] });
    });
  };

  //criando a função que ira iniciar a contagem de like
  handleLike = (id) => api.post(`/posts/${id}/like  `);

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map((post) => (
          <article key={post.id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>

            <img src={`http://localhost:3333/files/${post.image}`} alt="" />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>
              <strong>{post.likes}</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
