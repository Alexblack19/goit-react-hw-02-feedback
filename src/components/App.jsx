import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';

export class App extends Component {  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <Section />
      </>
    );
  }
}
