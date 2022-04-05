import React, { Component } from "react";
import api from "../services/api";
import "./New.css";

class New extends Component {
  //Criamos nossos estados
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: "",
  };

  //Função ocorre quando enviamos o formulário
  handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);

    await api.post("posts", data);
    //Mudamos a localização
    window.location.href = "/";
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  //Definimos uma mudança ao digitar para trocar nosso valor inicial
  handleChange = (e) => {
    //setamos o novo valor
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      //Função ao enviar
      <form id="new-post" onSubmit={this.handleSubmit}>
        {/* Função para possibilitar mudanças */}
        <input type="file" onChange={this.handleImageChange} />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />

        <input
          type="text"
          name="place"
          placeholder="local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default New;
