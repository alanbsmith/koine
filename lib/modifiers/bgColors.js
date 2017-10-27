
const bgColors = {
  // base graytones
  bgChrome000: ({ theme }) => `
    background-color: ${theme.colors.base.chrome000};
  `,
  // base colors
  bgBlue: ({ theme }) => `
    background-color: ${theme.colors.base.blue};
  `,
  bgGreen: ({ theme }) => `
    background-color: ${theme.colors.base.green};
  `,
  bgOrange: ({ theme }) => `
    background-color: ${theme.colors.base.orange};
  `,
  bgPink: ({ theme }) => `
    background-color: ${theme.colors.base.pink};
  `,
  bgPurple: ({ theme }) => `
    background-color: ${theme.colors.base.purple};
  `,
  bgYellow: ({ theme }) => `
    background-color: ${theme.colors.base.yellow};
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
