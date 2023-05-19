import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Nitification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const arrBtn = ['good', 'neutral', 'bad'];

  function addAllFeedback(event) {
    console.log(useState);
  
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
