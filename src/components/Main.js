import AddAuthorForm from './Form';

function Main() {
  return (
    <main className="main">
      <section className="section about">
        <h2 className="section__title">О проекте</h2>
        <p className="section__paragraph">
          Мы&nbsp;знаем, что наши дети постоянно существуют в&nbsp;режиме непрекращающегося
          творческого процесса. Мы&nbsp;видим это, когда ребёнок что-то напевает, когда
          он&nbsp;бесконечно рисует, когда придумывает истории, когда разговаривает с&nbsp;едой
          и&nbsp;игрушками&nbsp;&mdash; дети постоянно включены и&nbsp;что-то изобретают. Родители
          часто недооценивают это спонтанное творчество ребёнка. Это не&nbsp;плохо, просто
          мы&nbsp;привыкаем к&nbsp;этому. Давайте попробуем внимательнее присмотреться к&nbsp;нашим
          детям.
        </p>
        <p className="section__paragraph">
          Мы&nbsp;запускаем проект &laquo;ТУРБИНА&raquo;, который открывает работу настоящего
          музыкального лейбла на&nbsp;базе &laquo;Маршака&raquo;. В&nbsp;рамках
          &laquo;ТУРБИНЫ&raquo; лучшие современные инди-музыканты пишут свои песни на&nbsp;стихи,
          написанные детьми. Здесь важно&nbsp;&mdash; мы&nbsp;не&nbsp;заставляем наших детей
          садиться и&nbsp;писать поэзию, мы&nbsp;говорим о&nbsp;том, что родителям стоит быть более
          внимательными и&nbsp;чуткими к&nbsp;своим детям. Именно так мы&nbsp;сможем получить
          тексты, которые перестанут быть детскими, не&nbsp;будут осмыслены как
          взрослые&nbsp;&mdash; поэзия, которая сокращает дистанцию между взрослостью
          и&nbsp;детством, где спонтанное детское творчество и&nbsp;бессознательное, замеченное
          родителем, становится общественным культурным достоянием.
        </p>
      </section>

      <section className="section how-it-works">
        <h2 className="section__title">Как это работает</h2>
        <p className="section__paragraph">
          Вы&nbsp;можете прислать нам тексты, родившиеся у&nbsp;ваших детей, которые
          вы&nbsp;записали и&nbsp;считаете, что это сильное высказывание. Мы&nbsp;собираем пул таких
          текстов и&nbsp;передаём их&nbsp;музыкантам. Артисты создают музыку на&nbsp;эти стихи.
          Мы&nbsp;продюсируем выпуск трека, возможно съёмки клипа и&nbsp;так далее. Мы&nbsp;всегда
          указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и&nbsp;Федя
          Быстров&nbsp;&mdash; Контур.
        </p>
      </section>

      <section className="section points">
        <h2 className="section__title">Тезисы</h2>
        <ul className="section__list">
          <li className="section__list-item">
            Дети никогда не&nbsp;прекращают творить и&nbsp;круто стараться быть на&nbsp;них похожими
            в&nbsp;этом.
          </li>
          <li className="section__list-item">
            Детское бессознательное помогает родителям понять, что происходит внутри семьи.
          </li>
          <li className="section__list-item">
            Не&nbsp;существует детской и&nbsp;взрослой поэзии. Существует мысль и&nbsp;чувство,
            зафиксированное в&nbsp;ней.
          </li>
          <li className="section__list-item">
            Дети получают невероятное удовольствие и&nbsp;мотивацию от&nbsp;того, что
            их&nbsp;творчество востребовано сверстниками и&nbsp;взрослыми.
          </li>
        </ul>
      </section>

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
