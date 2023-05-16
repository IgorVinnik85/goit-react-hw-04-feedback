import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Nitification/Notification';

export const App = () => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  let [positive, setPositive] = useState(0);

  const arrBtn = ['good', 'neutral', 'bad'];

  function addAllFeedback(event) {
  
    switch (event.currentTarget.textContent) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  }

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositive(Math.round((good / total) * 100));
  }, [good, neutral, bad, total, positive]);

  return (
    <>
      <Section title="Please leave feedback">
        {<FeedbackOptions addFeedback={addAllFeedback} btn={arrBtn} />}
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};
