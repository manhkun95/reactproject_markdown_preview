import React,{Component} from 'react';
import marked from 'marked';

export default class Display extends Component{
  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    var text =  marked(this.props.text);
    return {__html: text};
  }

  render(){
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    )
  }
}
