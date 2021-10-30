import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global.styled";

const theme = {
  appColors: {
    header: '#ebfbff',
    body: '#fff',
    footer: 'red'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
