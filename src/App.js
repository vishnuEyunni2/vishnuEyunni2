import Header from './components/Header';
import './App.css';
import Background from './components/Background';
import Projects from './components/Projects';
import ToggleDarkMode from './components/ToggleDarkMode';
import { useContext } from 'react';
import { Themectx } from './components/ThemeContext/ThemeContext';

function App() {

  return (
    <>
      <ThemeDiv />
      <nav id="navbar">
        <ToggleDarkMode />
      </nav>
      <Header />
      <Background />
      <Projects />
    </>
  );
}

const ThemeDiv = () => {

  const { dark } = useContext(Themectx);

  return (
    <div className={dark ? 'nightmode' : 'lightmode'}>
    </div>
  )
}

export default App;
