import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{isDarkMode: boolean}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text-100);
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }

  :root {
    --background: ${props => props.isDarkMode ? "#222222" : "#f8f8f8"};

    --red: #E73F5D;
    --pink: #e559f9;
    --purple: #835afd;
    --purple-white: #a689fa;
    --white: #f8f8f8;

    //separator

    --separator: ${props => props.isDarkMode ? "#c2c2cf" : "#A8A8B3"};
    
    --separator-text: ${props => props.isDarkMode ? "#95959e" : "#919191"};

    //input

    --input-border: ${props => props.isDarkMode ? "#3b3b3b" : "#a8a8b3"};

    --input-text: ${props => props.isDarkMode ? "#fff" : "#29292e"};

    --input: ${props => props.isDarkMode ? "#3b3b3b" : "#fff"};

    --input-button: ${props => props.isDarkMode ? "#4a4a4a" : "#dedede"};

    --input-button-2: ${props => props.isDarkMode ? "#fafafa" : "#3b3b3b"};

    --input-button-transparent-hover: ${props => props.isDarkMode ? "#2e2e2e" : "#fafafa"};

    --answered-question: ${props => props.isDarkMode ? "#303030" : "#DBDCDD"};
    
    --answer-line: ${props => props.isDarkMode ? "#292929" : "#e6e6e6"};
    
    // text

    --text-100: ${props => props.isDarkMode ? "#fefefe" : "#29292e"};;

    --text-200: ${props => props.isDarkMode ? "#DBDCDD" : "#29292e"};;

    --text-300: #818182;

    // header 

    --header-border: ${props => props.isDarkMode ? "#3b3b3b" : "#E2E2E2"};

    //Questions

    --answer-background: ${props => props.isDarkMode ? "#262626" : "#f2f2f2"}


  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--separator);
  border-radius: 10px;
}
`;