/* stylelint-disable no-descending-specificity */
import { css } from 'styled-components';

const assets = css`
  :where(iframe, img, input, video, select, textarea) {
    height: auto;
    max-width: 100%;
  }
`;

const document = css`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  :where(:root) {
    cursor: default;
    line-height: 1.4;
    overflow-wrap: break-word;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
    text-size-adjust: 100%;
  }
`;

const groupingContent = css`
  :where(pre) {
    overflow: auto;
  }

  :where(nav) :where(ol, ul) {
    list-style-type: none;
  }
`;

const embeddedContent = css`
  :where(audio, canvas, iframe, img, svg, video) {
    vertical-align: middle;
  }

  :where(iframe) {
    border-style: none;
  }

  :where(svg:not([fill])) {
    fill: currentColor;
  }
`;

const tabularData = css`
  :where(table) {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
  }
`;

const forms = css`
  :where(progress) {
    vertical-align: baseline;
  }

  :where(textarea) {
    resize: vertical;
  }

  button,
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

const fonts = css`
  @font-face {
    font-family: system-ui;
    src: local(".AppleSystemUIFont"), local("Segoe UI"), local("Ubuntu"), local("Roboto-Regular"), local("HelveticaNeue");
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    src: local(".AppleSystemUIFont"), local("Segoe UI Italic"), local("Ubuntu-Italic"), local("Roboto-Italic"), local("HelveticaNeue-Italic");
  }

  @font-face {
    font-family: system-ui;
    font-weight: bold;
    src: local(".AppleSystemUIFont"), local("Segoe UI Bold"), local("Ubuntu-Bold"), local("Roboto-Bold"), local("HelveticaNeue-Bold");
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: bold;
    src: local(".AppleSystemUIFont"), local("Segoe UI Bold Italic"), local("Ubuntu-BoldItalic"), local("Roboto-BoldItalic"), local("HelveticaNeue-BoldItalic");
  }

  @font-face {
    font-family: ui-monospace;
    src: local(".AppleSystemUIFontMonospaced-Regular"), local("Segoe UI Mono"), local("UbuntuMono"), local("Roboto-Mono"), local("Menlo");
  }

  @font-face {
    font-family: ui-monospace;
    font-style: italic;
    src: local(".AppleSystemUIFontMonospaced-RegularItalic"), local("Segoe UI Mono Italic"), local("UbuntuMono-Italic"), local("Roboto-Mono-Italic"), local("Menlo-Italic");
  }

  @font-face {
    font-family: ui-monospace;
    font-weight: bold;
    src: local(".AppleSystemUIFontMonospaced-Bold"), local("Segoe UI Mono Bold"), local("UbuntuMono-Bold"), local("Roboto-Mono-Bold"), local("Menlo-Bold");
  }

  @font-face {
    font-family: ui-monospace;
    font-style: italic;
    font-weight: bold;
    src: local(".AppleSystemUIFontMonospaced-BoldItalic"), local("Segoe UI Mono Bold Italic"), local("UbuntuMono-BoldItalic"), local("Roboto-Mono-BoldItalic"), local("Menlo-BoldItalic");
  }
`;

const typography = css`
  html {
    font-family:
      system-ui,
      /* macOS 10.11-10.12 */ -apple-system,
      /* Windows 6+ */ "Segoe UI",
      /* Android 4+ */ "Roboto",
      /* Ubuntu 10.10+ */ "Ubuntu",
      /* Gnome 3+ */ "Cantarell",
      /* KDE Plasma 5+ */ "Noto Sans",
      /* fallback */ sans-serif,
      /* macOS emoji */ "Apple Color Emoji",
      /* Windows emoji */ "Segoe UI Emoji",
      /* Windows emoji */ "Segoe UI Symbol",
      /* Linux emoji */ "Noto Color Emoji";
  }

  code,
  kbd,
  samp,
  pre {
    font-family:
      ui-monospace,
      /* macOS 10.10+ */ "Menlo",
      /* Windows 6+ */ "Consolas",
      /* Android 4+ */ "Roboto Mono",
      /* Ubuntu 10.10+ */ "Ubuntu Monospace",
      /* KDE Plasma 5+ */ "Noto Mono",
      /* KDE Plasma 4+ */ "Oxygen Mono",
      /* Linux/OpenOffice fallback */ "Liberation Mono",
      /* fallback */ monospace,
      /* macOS emoji */ "Apple Color Emoji",
      /* Windows emoji */ "Segoe UI Emoji",
      /* Windows emoji */ "Segoe UI Symbol",
      /* Linux emoji */ "Noto Color Emoji";
  }
`;

const sanitize = css`
  ${assets}
  ${document}
  ${groupingContent}
  ${embeddedContent}
  ${tabularData}
  ${forms}
  ${fonts}
  ${typography}
`;

export default sanitize;
