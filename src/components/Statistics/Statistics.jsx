export function Statistics({ title, good, neutral, bad }) {

  return (
    <>
      <h3>{title}</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  );
}
