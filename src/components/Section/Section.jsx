import { Component } from 'react';

export class Section extends Component {
  state = { title: 'Please leave feedback' };  
  render() {    
    return `<h2>{this.title}</h2>`;
  }
}
