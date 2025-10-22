import React from "react";
import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />
        <div className="about-wrapper">
          {/* Фото */}
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>

          {/* Описание в карточке */}
          <div className="about-info">
            <div className="about-card">
              <h3>Я Кирилл Нетёсов</h3>
              <h4>
                SRE специалист <span>занимаюсь разработкой и поддержкой</span>
              </h4>
              <p>
                Работа в Отделе инноваций, архитектуры и решений (SAI),
                занимаюсь разработкой программного обеспечения, как web
                приложений, так и desktop. В мои обязанности входит обслуживание
                и доработка ПО, когда возникают неполадки. Настройка метрик.
              </p>

              <ul className="professional-list">
                <li className="list-item">
                  <span className="number">1+</span>
                  <span className="text">опыта в SRE</span>
                </li>
                <li className="list-item">
                  <span className="number">3+</span>
                  <span className="text">ведения проектов</span>
                </li>
                <li className="list-item">
                  <span className="number">5</span>
                  <span className="text">успешных проектов</span>
                </li>
              </ul>

              <a href="/path/to/your_resume.pdf" download className="btn">
                Скачать <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
