const STREAMING_LINKS = [
  {
    id: 1,
    name: 'Яндекс.Музыка ↗',
    link: 'https://music.yandex.ru/'
  },
  {
    id: 2,
    name: 'Spotify ↗',
    link: 'https://www.spotify.com/'
  },
  {
    id: 3,
    name: 'Apple Music ↗',
    link: 'https://music.apple.com/'
  },
  {
    id: 4,
    name: 'VK Music ↗',
    link: 'https://vk.com/vkmusic'
  },
];

const MAIN_LOGO = {
  link: 'https://marshakbooks.ru'
};

const TEXT_SECTIONS_DATA = [
  {
    id: 1,
    title: 'О проекте',
    type: 'text',
    content: [
      'Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует, когда придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены и что-то изобретают. Родители часто недооценивают это спонтанное творчество ребёнка. Это не плохо, просто мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.',
      'Мы запускаем проект «ТУРБИНА», который открывает работу настоящего музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты пишут свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших детей садиться и писать поэзию, мы говорим о том, что родителям стоит быть более внимательными и чуткими к своим детям. Именно так мы сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное детское творчество и бессознательное, замеченное родителем, становится общественным культурным достоянием.'
    ]
  },
  {
    id: 2,
    title: 'Как это работает',
    type: 'text',
    content: [
      'Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы записали и считаете, что это сильное высказывание. Мы собираем пул таких текстов и передаём их музыкантам. Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека, возможно съёмки клипа и так далее. Мы всегда указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.'
    ]
  },
  {
    id: 3,
    title: 'Тезисы',
    type: 'list',
    content: [
      {
        id: 1,
        text: 'Дети никогда не прекращают творить и круто стараться быть на них похожими в этом.'
      },
      {
        id: 2,
        text: 'Детское бессознательное помогает родителям понять, что происходит внутри семьи.'
      },
      {
        id: 3,
        text: 'Не существует детской и взрослой поэзии. Существует мысль и чувство, зафиксированное в ней.'
      },
      {
        id: 4,
        text: 'Дети получают невероятное удовольствие и мотивацию от того, что их творчество востребовано сверстниками и взрослыми.'
      },
    ]
  }
];

const FOOTER_LINK = {
  link: 'https://praktikum.yandex.ru'
};

const apiSettings = {
  user: 'SomeUser',
  url: 'SomeUrl'
};

export {
  STREAMING_LINKS,
  MAIN_LOGO,
  TEXT_SECTIONS_DATA,
  FOOTER_LINK,
  apiSettings
};