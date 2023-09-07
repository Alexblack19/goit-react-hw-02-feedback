import { List, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, handleClick }) {
  return (
    <List>
      {options.map(item => (
        <li key={item}>
          <Button type="button" onClick={handleClick}>
            {item}
          </Button>
        </li>
      ))}
    </List>
  );
}
