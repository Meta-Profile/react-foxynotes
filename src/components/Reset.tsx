import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  /* Указываем box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  /* Убираем внутренние отступы */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Убираем внешние отступы */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Выставляем основные настройки по-умолчанию для body */
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    
  }

  /* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Упрощаем работу с изображениями */
  img {
    max-width: 100%;
    display: block;
  }

  /* Указываем понятную периодичность в потоке данных у article*/
  article > * + * {
    margin-top: 1em;
  }

  /* Наследуем шрифты для инпутов и кнопок */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;