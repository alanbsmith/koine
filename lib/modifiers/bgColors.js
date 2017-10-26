import theme from '../styles/theme.js';

const bgColors = {
  // base graytones
  bgChrome000: () => `background-color: ${theme.colors.base.chrome000};`,
  // base colors
  bgBlue: () => `background-color: ${theme.colors.base.blue};`,
  bgGreen: () => `background-color: ${theme.colors.base.green};`,
  bgOrange: () => `background-color: ${theme.colors.base.orange};`,
  bgPink: () => `background-color: ${theme.colors.base.pink};`,
  bgPurple: () => `background-color: ${theme.colors.base.purple};`,
  bgYellow: () => `background-color: ${theme.colors.base.yellow};`,
  // status colors
  bgDanger: () => `background-color: ${theme.colors.status.danger};`,
  bgInfo: () => `background-color: ${theme.colors.status.info};`,
  bgSuccess: () => `background-color: ${theme.colors.status.success};`,
  bgWarning: () => `background-color: ${theme.colors.status.warning};`,
};

export default bgColors;
