import React from 'react';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export default function Feedbacksearch() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutrale] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodIncrement = feedbackOption => {
    switch (feedbackOption) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutrale(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title={'Please leave feedback'}>
        {' '}
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleGoodIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There are no any feedback yet " />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onCountTotalFeedback={countTotalFeedback()}
            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// class Feedback extends React.Component {
//   static defaultProps = {
//     initialGood: 0,
//     initialNeutrale: 0,
//     initialBad: 0,
//   };

//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutrale,
//     bad: this.props.initialBad,
//   };

//   onFeedbackChanging = feedbackOption => {
//     this.setState(prevState => ({
//       [feedbackOption]: (prevState[feedbackOption] += 1),
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return Math.round((good / total) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     return (
//       <div>
//         <Section title={'Please leave feedback'}>
//           {' '}
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onFeedbackChanging}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There are no any feedback yet " />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               onCountTotalFeedback={this.countTotalFeedback()}
//               onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
