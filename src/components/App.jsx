import { Profile } from './Profile/Profile';
import user from '../data/user';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',       
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Profile item={user} />     
    </div>
  );
};
