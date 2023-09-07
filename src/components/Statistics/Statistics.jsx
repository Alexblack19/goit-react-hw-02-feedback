import { Notification } from '../Notification/Notification';

export function Statistics({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h3>{title}</h3>
      {total ? (
        <ul>
          <li>
            <p>
              Good:&nbsp;<span>{good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral:&nbsp;<span>{neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad:&nbsp;<span>{bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total:&nbsp;<span>{total}</span>
            </p>
          </li>
          <li>
            <p>
              Positive feedback:&nbsp;<span>{positivePercentage}&#37;</span>
            </p>
          </li>
        </ul>
      ) : (
        <>
          <p>No feedback given</p>
          <Notification message="There is no feedback" />
        </>
      )}
    </>
  );
}
