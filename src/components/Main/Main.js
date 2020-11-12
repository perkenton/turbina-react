import React from "react";
import Section from "./Section";
import SectionList from "./SectionList";
import {
  SECTIONS_DATA,
  SECTIONS_LIST_DATA
} from '../../constants/constants';

function Main() {
  const { title, list } = SECTIONS_LIST_DATA;

  return (
    <main className="main">
      {SECTIONS_DATA.map(({ id, title, text }) => {
        return (
          <Section
            key={ id }
            title={ title }
            text={ text }
          />
        )
      })}
      <SectionList title={ title } list={ list } />

      <section className="section">
        <h2 className="section__title">Форма</h2>
        <p className="section__paragraph">
          Заполняя эту форму, вы&nbsp;становитесь частью проекта.
        </p>

        <form className="form" noValidate>
          <input
            type="text"
            id="author"
            className="form__input"
            placeholder="Имя и фамилия автора"
          />
          <span className="form__input-error" id="author-error"></span>
          <input type="tel" id="phone" className="form__input" placeholder="Телефон" />
          <span className="form__input-error" id="phone-error"></span>
          <input
            type="email"
            id="email"
            className="form__input form__input_incorrect"
            placeholder="Почта"
          />
          <span className="form__input-error" id="email-error">
            Какая-то ошибка*
          </span>
          <textarea
            id="lyrics"
            className="form__textarea"
            placeholder="Стихи"
            defaultValue="Я бабуленьку родную, очень крепко поцелую, ведь бабуленька моя очень-очень добрая."
          ></textarea>
          <span className="form__input-error" id="lyrics-error"></span>
          <label htmlFor="offer" className="form__input-label">
            <input type="checkbox" id="offer" className="form__input-radio" />
            <span className="form__input-radio-visible"></span>
            Согласен с{" "}
            <a href="#" className="form__link">
              офертой
            </a>
          </label>
          <button type="submit" className="form__input-submit">
            Отправить форму
          </button>
          <span className="form__submit-error">
            Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!
          </span>
        </form>
      </section>
    </main>
  );
}

export default Main;
