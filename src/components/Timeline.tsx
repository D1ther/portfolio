import React from "react";
import { useTranslation } from 'react-i18next';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import VerticalTimelineLib from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

// NOTE: react-vertical-timeline-component ships only a CommonJS build
// (`module.exports = { VerticalTimeline, VerticalTimelineElement }`).
// webpack (CRA) exposed the named exports, but Vite exposes the object as the
// default export, so we destructure the components from it manually.
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineLib;

function Timeline() {
  const { t } = useTranslation();

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t('timeline.title')}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={t('timeline.consultant.date')}
            iconStyle={{ background: '#00c853', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline.consultant.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline.consultant.location')}</h4>
            <p>
              {t('timeline.consultant.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t('timeline.fullstack.date')}
            iconStyle={{ background: '#00c853', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline.fullstack.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline.fullstack.location')}</h4>
            <p>
              {t('timeline.fullstack.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t('timeline.intern.date')}
            iconStyle={{ background: '#00c853', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline.intern.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline.intern.location')}</h4>
            <p>
              {t('timeline.intern.description')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t('timeline.analyst.date')}
            iconStyle={{ background: '#00c853', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline.analyst.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline.analyst.location')}</h4>
            <p>
              {t('timeline.analyst.description')}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;