import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  }

  handleClick = e => {
    for (const keyObj in this.state) {     
      if (e.target.textContent === keyObj) {      
        this.setState(prev => ({ keyObj: prev.keyObj + 1 }));
      }
    }
  };

  render() {
    return (
      <section>
        <div>
          <GlobalStyle />
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              handleClick={this.handleClick}
            />
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </div>
      </section>
    );
  }
}
