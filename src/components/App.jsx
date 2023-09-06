import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <Statistics
            title="Statistics"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
          <FeedbackOptions options={} onLeaveFeedback={}/>
        </Section>
      </>
    );
  }
}
