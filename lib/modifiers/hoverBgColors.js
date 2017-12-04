import { lighten } from 'polished';

const hoverBgColors = {
  // base graytones
  hoverBgChrome000: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.base.chrome000)};
    }
  `,
  // brand colors
  hoverBgPrimary: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${theme.colors.brand.primary};
    }
  `,
  hoverBgSecondary: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${theme.colors.brand.secondary};
    }
  `,
  hoverBgTertiary: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${theme.colors.brand.tertiary};
    }
  `,
  hoverBgBlue: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brand.blue)};
    }
  `,
  hoverBgGreen: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brand.green)};
    }
  `,
  hoverBgOrange: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brand.orange)};
    }
  `,
  hoverBgPink: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brand.pink)};
    }
  `,
  hoverBgPurple: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brand.purple)};
    }
  `,
  hoverBgYellow: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brand.yellow)};
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
