export function Statistics({ title, good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        <li>
          <p>Good:&nbsp;{good}</p>
        </li>
        <li>
          <p>Neutral:&nbsp;{neutral}</p>
        </li>
        <li>
          <p>Bad:&nbsp;{bad}</p>
        </li>
        <li>
          <p>Total:&nbsp;{total}</p>
        </li>
        <li>
          <p>Positive feedback:&nbsp;{positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
}
