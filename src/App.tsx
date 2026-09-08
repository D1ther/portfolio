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

    useEffect(() => {
        // Mirror the theme on <body> so overscroll areas, the browser
        // chrome (Android theme-color) and MUI-portaled elements
        // (e.g. the mobile Drawer) follow the active theme.
        document.body.className = mode === 'dark' ? 'dark-mode' : 'light-mode';
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            themeColor.setAttribute('content', mode === 'dark' ? '#0e1612' : '#f8f9fa');
        }
    }, [mode]);

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