export const Statistics = ({ good, neutral, bad, total, positivePercentage=0}) =>  {
  return (
    <>
  <h2>Staticstics</h2>
  <p>Good: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
  <p>Total: {total}</p>
  <p>Positive feedback: {positivePercentage} %</p>
  </>
)
}