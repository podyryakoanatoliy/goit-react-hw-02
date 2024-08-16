import { useState, useEffect } from "react";

import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const getInitialIndex = () => {
  const savedFeedback = window.localStorage.getItem("article-idx");
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [allFeedback, setAllFeedback] = useState(getInitialIndex);

  useEffect(() => {
    window.localStorage.setItem("article-idx", JSON.stringify(allFeedback));
  }, [allFeedback]);

  const totalFeedback =
    allFeedback.good + allFeedback.neutral + allFeedback.bad;
  const positiveFeedback = Math.round((allFeedback.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    // if (type === "reset") {
    //   setAllFeedback({ good: 0, neutral: 0, bad: 0 });
    // } else {
    //   setAllFeedback((prevState) => ({
    //     ...prevState,
    //     [type]: prevState[type] + 1,
    //   }));
    // }
    setAllFeedback((prevState) => {
      if (feedbackType === "reset") {
        return { good: 0, neutral: 0, bad: 0 };
      } else {
        return { ...prevState, [feedbackType]: prevState[feedbackType] + 1 };
      }
    });
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options buttonName="Good" onClick={() => updateFeedback("good")} />
      <Options buttonName="Neutral" onClick={() => updateFeedback("neutral")} />
      <Options buttonName="Bad" onClick={() => updateFeedback("bad")} />

      {totalFeedback > 0 && (
        <Options buttonName="Reset" onClick={() => updateFeedback("reset")} />
      )}

      {totalFeedback > 0 ? (
        <Feedback
          feedback={allFeedback}
          quantityFeedback={totalFeedback}
          persentPositiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
