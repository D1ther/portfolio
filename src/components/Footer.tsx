import React from "react";
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import FreelanceHuntIcon from './FreelanceHuntIcon';
import '../assets/styles/Footer.scss'

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <a href="https://github.com/D1ther" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://freelancehunt.com/freelancer/maxim_nozhkin.html" target="_blank" rel="noreferrer"><FreelanceHuntIcon/></a>
      </div>
      <p>{t('footer.text')}</p>
    </footer>
  );
}

export default Footer;