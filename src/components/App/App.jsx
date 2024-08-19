import { useState, useEffect } from "react";
import "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Description from "../Description/Description";

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
      <Description />
      <Options
        options={["good", "neutral", "bad"]}
        onClick={updateFeedback}
        showReset={totalFeedback > 0}
      />

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
