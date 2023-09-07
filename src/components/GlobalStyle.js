import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`  
body {  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  background-image: url('https://cdn.wallpapersafari.com/23/0/98zDiH.jpg');  
  background-position: 50% 50%;  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h2,
h3, 
p {
  margin-top: 0px;
  margin-bottom: 0px;
}

ul {  
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style: none;
}  
`;

export const Container = styled.div`
  max-width: 540px;
  height: 350px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background-color: #e4eaf0;
  box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
`;
