const focusColors = {
  focusBlue: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.base.blue};
    }
  `,
  focusGreen: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.base.green};
    }
  `,
  focusOrange: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.base.orange};
    }
  `,
  focusPink: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.base.pink};
    }
  `,
  focusPurple: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.base.purple};
    }
  `,
  focusYellow: ({ theme }) => `
    &:focus {
      border-bottom-color: ${theme.colors.base.yellow};
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
