import React from "react";
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import FreelanceHuntIcon from './FreelanceHuntIcon';
import avatar from '../assets/images/avatar.avif';
import '../assets/styles/Main.scss';

function Main() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/D1ther" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://freelancehunt.com/freelancer/maxim_nozhkin.html" target="_blank" rel="noreferrer"><FreelanceHuntIcon/></a>
          </div>
          <h1>Maxim Nozhkin</h1>
          <p>{t('main.role')}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/D1ther" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://freelancehunt.com/freelancer/maxim_nozhkin.html" target="_blank" rel="noreferrer"><FreelanceHuntIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;