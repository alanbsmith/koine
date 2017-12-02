const focusColors = {
  focusBlue: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.brand.blue};
    }
  `,
  focusGreen: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.brand.green};
    }
  `,
  focusOrange: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.brand.orange};
    }
  `,
  focusPink: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.brand.pink};
    }
  `,
  focusPurple: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.brand.purple};
    }
  `,
  focusYellow: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.brand.yellow};
    }
  `,
  // status colors
  focusDanger: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.status.danger};
    }
  `,
  focusDefault: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.status.default};
    }
  `,
  focusInfo: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.status.info};
    }
  `,
  focusSuccess: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.status.success};
    }
  `,
  focusWarning: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.status.warning};
    }
  `,
};

export default focusColors;
