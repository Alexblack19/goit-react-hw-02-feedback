import { Notification } from '../Notification/Notification';
import { Title, Item, Text, NoFeedback} from './Statistics.styled';

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
      <Title>{title}</Title>
      {total ? (
        <ul>
          <Item>
            <Text>
              Good:&nbsp;<span>{good}</span>
            </Text>
          </Item>
          <Item>
            <Text>
              Neutral:&nbsp;<span>{neutral}</span>
            </Text>
          </Item>
          <Item>
            <Text>
              Bad:&nbsp;<span>{bad}</span>
            </Text>
          </Item>
          <Item>
            <Text>
              Total:&nbsp;<span>{total}</span>
            </Text>
          </Item>
          <Item>
            <Text>
              Positive feedback:&nbsp;<span>{positivePercentage}&#37;</span>
            </Text>
          </Item>
        </ul>
      ) : (
        <>
          <NoFeedback>No feedback given</NoFeedback>
          <Notification message="There is no feedback" />
        </>
      )}
    </>
  );
}
