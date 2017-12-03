const bgColors = {
  // base graytones
  bgChrome000: ({ theme }) => `
    background-color: ${theme.colors.base.chrome000};
  `,
  bgChrome050: ({ theme }) => `
    background-color: ${theme.colors.base.chrome050};
  `,
  bgChrome100: ({ theme }) => `
    background-color: ${theme.colors.base.chrome100};
  `,
  bgChrome200: ({ theme }) => `
    background-color: ${theme.colors.base.chrome200};
  `,
  bgChrome300: ({ theme }) => `
    background-color: ${theme.colors.base.chrome300};
  `,
  bgChrome400: ({ theme }) => `
    background-color: ${theme.colors.base.chrome400};
  `,
  bgChrome500: ({ theme }) => `
    background-color: ${theme.colors.base.chrome500};
  `,
  bgChrome600: ({ theme }) => `
    background-color: ${theme.colors.base.chrome600};
  `,
  bgChrome700: ({ theme }) => `
    background-color: ${theme.colors.base.chrome700};
  `,
  bgChrome800: ({ theme }) => `
    background-color: ${theme.colors.base.chrome800};
  `,
  bgChrome900: ({ theme }) => `
    background-color: ${theme.colors.base.chrome900};
  `,
  // brand colors
  bgPrimary: ({ theme }) => `
    background-color: ${theme.colors.brand.primary};
  `,
  bgSecondary: ({ theme }) => `
    background-color: ${theme.colors.brand.secondary};
  `,
  bgTertiary: ({ theme }) => `
    background-color: ${theme.colors.brand.tertiary};
  `,
  bgBlue: ({ theme }) => `
    background-color: ${theme.colors.brand.blue};
  `,
  bgGreen: ({ theme }) => `
    background-color: ${theme.colors.brand.green};
  `,
  bgOrange: ({ theme }) => `
    background-color: ${theme.colors.brand.orange};
  `,
  bgPink: ({ theme }) => `
    background-color: ${theme.colors.brand.pink};
  `,
  bgPurple: ({ theme }) => `
    background-color: ${theme.colors.brand.purple};
  `,
  bgYellow: ({ theme }) => `
    background-color: ${theme.colors.brand.yellow};
  `,
  // status colors
  bgDanger: ({ theme }) => `
    background-color: ${theme.colors.status.danger};
  `,
  bgDefault: ({ theme }) => `
    background-color: ${theme.colors.status.default};
  `,
  bgInfo: ({ theme }) => `
    background-color: ${theme.colors.status.info};
  `,
  bgSuccess: ({ theme }) => `
    background-color: ${theme.colors.status.success};
  `,
  bgWarning: ({ theme }) => `
    background-color: ${theme.colors.status.warning};
  `,
};

export default bgColors;
