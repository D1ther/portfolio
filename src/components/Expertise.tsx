import React from "react";
import { useTranslation } from 'react-i18next';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import OpenAIIcon from './OpenAIIcon';
import FullStackIcon from './FullStackIcon';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Vue",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "FastAPI",
    "Pydantic",
    "Redis",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLAlchemy",
    "Django",
    "REST API",
    "Aiogram",
    "Telegram Mini Apps"
];

const labelsSecond = [
    "CI/CD",
    "Docker",
    "Git",
    "GitHub Actions",
    "Playwright",
    "Selenium",
    "Camoufox",
    "Patchright",
    "Crawlee",
    "GitLab",
    "Telethon",
    "Kurigram",
];

const labelsThird = [
    "LangChain",
    "LlamaIndex",
    "LangGraph",
    "CrewAI",
    "RAG",
    "Vector Search",
    "ChromaDB",
    "Pinecone",
    "Qdrant",
    "Weaviate",
    "FAISS",
    "OpenAI API",
    "Claude API",
    "Gemini API",
    "Ollama",
    "Hugging Face",
    "Sentence-Transformers",
    "Unstructured",
    "tiktoken",
    "LangSmith",
    "Langfuse",
    "OpenRouter",
];

function Expertise() {
    const { t } = useTranslation();

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t('expertise.title')}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FullStackIcon/>
                    <h3>{t('expertise.fullstack.title')}</h3>
                    <p>{t('expertise.fullstack.description')}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('expertise.techStack')}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>{t('expertise.devops.title')}</h3>
                    <p>{t('expertise.devops.description')}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('expertise.techStack')}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <OpenAIIcon/>
                    <h3>{t('expertise.genai.title')}</h3>
                    <p>{t('expertise.genai.description')}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('expertise.techStack')}</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;