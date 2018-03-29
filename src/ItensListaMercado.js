import React from 'react';

export class ItensListaMercado extends React.Component {
  calcTotal(){
    let t = '';
    for (t in this.props.items){
	console.log(t);    	
	//console.log(t.total);
        //res += t.total;
        //console.log(res);
    }
  }  

  render() {
    return (
      <table>
      	<caption>Lista de mercado</caption>
      	<thead>
      		<tr>
      			<th>Item</th>
      			<th>Qtd</th>
      			<th>Valor</th>
      			<th>Total</th>
      		</tr>	
      	</thead>
	    <tbody>
	    	{this.props.items.map(item => (
	          <tr>
	          	<td>{item.nome}</td>
	          	<td>{item.qtd}</td>
	          	<td>{item.vl}</td>
	          	<td>{item.qtd * item.vl}</td>
	          </tr>	
	        ))}
	    </tbody>
	    <tfoot>
	        <tr><th colSpan="3">Total</th><th>{this.calcTotal}</th></tr>
	    </tfoot>
	  </table>    
    );
  }
}
