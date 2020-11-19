import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  h1 {
    font-size: 4rem;
    line-height: 5rem;
  }
  
  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    width: 100%;
    border-bottom: 1px solid #a7b8c9;
    padding: 30px 0 0;
    margin: 0 0 10px;
  }
  
  h3 {
    font-weight: 700;
    width: 100%;
    border-bottom: 1px solid #a7b8c9;
    padding: 30px 0 0;
    margin: 0 0 10px;
  }
  
  a {
    color: #a7b8c9;
    text-decoration: none;
    
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
  
  p {
    padding: 20px 0 0;
  }
`;

export default Global;
