import usePersistedState from './utils/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

import { Header } from './components/Header';

import WelcomePage from './pages/Home';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <WelcomePage />
        <TechStack toggleTheme={toggleTheme}/>
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
