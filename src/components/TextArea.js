import React,{Component} from 'react';
import {PropTypes} from 'prop-types';



export default class TextArea extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.props.chan(event.target.value);
  }
  render(){
    return (
      <div>
        <textarea cols = {80} rows = {40} onChange={this.handleChange} />
      </div>
    )
  }
}
