import React, {useState, useEffect} from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <I18nextProvider i18n={i18n}>
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
          <FadeIn transitionDuration={700}>
              <Main/>
              <Expertise/>
              <Timeline/>
              <Project/>
          </FadeIn>
          <Footer />
      </div>
    </I18nextProvider>
    );
}

export default App;