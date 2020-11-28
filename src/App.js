import React from "react";
import "./styles.css";

class ApiMorty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recuperacion: []
    };
  }
  componentDidMount() {
    const respuesta = {
      method: "get",
      headers: { "Content-Type": "application/json" }
    };
    fetch("https://rickandmortyapi.com/api/character?page=1", respuesta)
      .then((res) => res.json())
      .then((res) => this.setState({ recuperacion: res.results }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.recuperacion);
    return (
      <div className="contenedor">
        <h1>PERSONAJES RICK AND MORTY</h1>
        <div className="div">
          {this.state.recuperacion.map((res) => {
            return (
              <div className="componente">
                <div className="imagene">
                  <img className="img" src={res.image} alt={res.name} />
                </div>
                <div className="informacion">
                  <h3>{res.name}</h3>
                  <p className="info">
                    {res.status} - {res.species}
                  </p>
                  <p className="info">Gender: {res.gender}</p>
                  <p className="info">
                    Origin: {res.origin.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ApiMorty;
