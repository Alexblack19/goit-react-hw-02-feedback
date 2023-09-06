export function FeedbackOptions({ good, neutral, bad }) {  
  return (
    <>
      <button>{good}</button>
      <button>{neutral}</button>
      <button>{bad}</button>
    </>
  );
}
