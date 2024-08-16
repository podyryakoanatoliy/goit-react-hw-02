// import moduleName from 'module';

export default function Feedback({
  feedback: { good, neutral, bad },
  quantityFeedback,
  persentPositiveFeedback,
}) {
  return (
    <>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {quantityFeedback}</p>
      <p>Positive: {persentPositiveFeedback}%</p>
    </>
  );
}
