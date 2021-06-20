import React, {Component} from "react";

class Contador extends Component{
    state = { contador: 0 };

    estilos = {
        fontSize: 25,
        fontWeight: "normal"
  };

    render() {    
        let classes = "badge m-2 badge-";
        classes += (this.state.contador > 10 ? "success" : "primary")
        return (
        <React.Fragment>
            <span style={this.estilos} className={classes}>
            {this.formataContador()}
            </span>
            <button onClick={this.tratarIncremento} className="btn btn-secondary">
            Incrementar
            </button>
        </React.Fragment>
        );
    }

    formataContador() {
        const { contador } = this.state;
        return contador === 0 ? "Zero" : contador;
    }

    tratarIncremento = () => {
        this.setState({ contador: this.state.contador + 1 });
    };
}

export default Contador;