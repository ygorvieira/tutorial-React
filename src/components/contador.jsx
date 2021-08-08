import React, {Component} from "react";

class Contador extends Component{
    state = { contador: 0, 
        itens: []
    };

    renderItens(){
        if(this.state.itens.length === 0) return <p>Não existem itens a ser exibidos</p>;

        return <ul>
                { this.state.itens.map(item => <li key={item}>{item}</li>)}
            </ul>
    }

    render() {
        return (
            <React.Fragment>
                {this.state.itens.length === 0 && 'Inclua um item...'}
                {this.renderItens()}
            </React.Fragment>
        );
    }
}
export default Contador;