import React from 'react';
import TextArea from './TextArea';
import Display from './Display';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.changeValue = this.changeValue.bind(this);
  }


  changeValue(text){
    this.state.value =  text;
    this.setState(this.state);
  }
  render(){
    return(
      <div>
        <table cellPadding = {5}>
          <tbody>
          <tr style={{height:200, width:'80%'}}>
            <td>
              <TextArea chan = {this.changeValue} />
            </td>
            <td style = {{verticalAlign: 'top', width: '50%'}}>
              <Display  text = {this.state.value} />
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
