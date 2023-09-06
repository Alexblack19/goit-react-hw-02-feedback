export function FeedbackOptions({ options, handleClick }) {
  return (
    <ul>
      {options.map(item => (
        <li key={item}>
          <button
            type="button"
            style={{ textTransform: 'capitalize' }}
            onClick={handleClick}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
