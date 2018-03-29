import React from 'react';
import {ItensListaMercado} from './ItensListaMercado.js';

export class ListaMercado extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], total: 0, nome: '', qtd: '', vl: '' };
    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeQtd = this.handleChangeQtd.bind(this);
    this.handleChangeValor = this.handleChangeValor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeNome(e) {
    this.setState({ nome: e.target.value });
  }

  handleChangeQtd(e) {
    this.setState({ qtd: e.target.value });
  }

  handleChangeValor(e) {
    let v = e.target.value;
    if(v.indexOf(',') >= 0){
    	v = v.replace(',','.');
    }		
    this.setState({ vl: v });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!this.state.nome.length) {
      return;
    }
    
    const newItem = {
      nome: this.state.nome,
      qtd: this.state.qtd,
      vl: this.state.vl,
      total: (this.state.qtd * this.state.vl),
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      total: 0,
      nome: '',
      qtd: '',
      vl: ''
    }));
  }
  
  render() {
    return (
      <div>
        <ItensListaMercado items={this.state.items} />
        
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="new-item">Item:</label>
            <br />
            <input type="text"
              id="new-item"
              onChange={this.handleChangeNome}
              value={this.state.nome}
            />
          </p>
          <p>
            <label htmlFor="new-qtd">Qtd:</label>
            <br />
            <input type="text"
              id="new-qtd"
              onChange={this.handleChangeQtd}
              value={this.state.qtd}
            />
          </p>
          <p>
            <label htmlFor="new-vl">Valor:</label>
            <br />
            <input type="text"
              id="new-vl"
              onChange={this.handleChangeValor}
              value={this.state.vl}
            />
          </p>  
          <button>
            Adicionar #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}
