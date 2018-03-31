import React from 'react';

export class ItensListaMercado extends React.Component {
  render() {
     const tfooter = (this.props.valores.length >= 1) ? (
		<tfoot>
		    <tr>
            	        <th colSpan="3">Total</th>
                        <th>{this.props.valores.reduce((prev, curr) => prev + curr)}</th>
          	    </tr>
	        </tfoot>
	    ) : '';
     
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
	    {tfooter}
	  </table>    
    );
  }
}
