import React from "react";
import { useTranslation } from 'react-i18next';
import img_prompty from '../assets/images/img-prompty.avif';
import img_p2p from '../assets/images/img-p2p.avif';
import img_coinscraper from '../assets/images/img-coinscraper.avif';
import img_trade_bot from '../assets/images/img-trade-bot.avif';
import img_po_bot from '../assets/images/img-po-bot.avif';
import img_olx_bot from '../assets/images/img-olx-bot.avif';
import img_transport_parser from '../assets/images/img-transport-parser.avif';
import '../assets/styles/Project.scss';

function Project() {
    const { t } = useTranslation();

    return(
    <div className="projects-container" id="projects">
        <h1>{t('projects.title')}</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/D1ther/Prompty" target="_blank" rel="noreferrer"><img src={img_prompty} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/D1ther/Prompty" target="_blank" rel="noreferrer"><h2>{t('projects.prompty.title')}</h2></a>
                <p>{t('projects.prompty.description')}</p>
            </div>
            <div className="project">
                <a href="https://money-transfer.online/" target="_blank" rel="noreferrer"><img src={img_p2p} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://money-transfer.online/" target="_blank" rel="noreferrer"><h2>{t('projects.p2p.title')}</h2></a>
                <p>{t('projects.p2p.description')}</p>
            </div>
            <div className="project">
                <img src={img_coinscraper} className="zoom" alt="thumbnail" width="100%"/>
                <h2>{t('projects.coinscraper.title')}</h2>
                <p>{t('projects.coinscraper.description')}</p>
            </div>
            <div className="project">
                <img src={img_trade_bot} className="zoom" alt="thumbnail" width="100%"/>
                <h2>{t('projects.tradeBot.title')}</h2>
                <p>{t('projects.tradeBot.description')}</p>
            </div>
            <div className="project">
                <img src={img_po_bot} className="zoom" alt="thumbnail" width="100%"/>
                <h2>{t('projects.poBot.title')}</h2>
                <p>{t('projects.poBot.description')}</p>
            </div>
            <div className="project">
                <img src={img_olx_bot} className="zoom" alt="thumbnail" width="100%"/>
                <h2>{t('projects.olxBot.title')}</h2>
                <p>{t('projects.olxBot.description')}</p>
            </div>
            <div className="project">
                <img src={img_transport_parser} className="zoom" alt="thumbnail" width="100%"/>
                <h2>{t('projects.lardiTrans.title')}</h2>
                <p>{t('projects.lardiTrans.description')}</p>
            </div>
        </div>
    </div>
    );
}

export default Project;