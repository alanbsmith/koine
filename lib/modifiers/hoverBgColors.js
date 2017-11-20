import { lighten } from 'polished';

const hoverBgColors = {
  // base graytones
  hoverBgChrome000: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.chrome000)};
    }
  `,
  // base colors
  hoverBgBlue: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.blue)};
    }
  `,
  hoverBgGreen: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.green)};
    }
  `,
  hoverBgOrange: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.orange)};
    }
  `,
  hoverBgPink: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.pink)};
    }
  `,
  hoverBgPurple: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.purple)};
    }
  `,
  hoverBgYellow: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.yellow)};
    }
  `,
  // status colors
  hoverBgDanger: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.status.danger)};
    }
  `,
  hoverBgDefault: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.status.default)};
    }
  `,
  hoverBgInfo: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.status.info)};
    }
  `,
  hoverBgSuccess: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.status.success)};
    }
  `,
  hoverBgWarning: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.status.warning)};
    }
  `,
};

export default hoverBgColors;
