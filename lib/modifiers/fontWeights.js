const fontWeights = {
  lightWeight: ({ theme }) => `font-weight: ${theme.fontWeights.light}`,
  normalWeight: ({ theme }) => `font-weight: ${theme.fontWeights.normal}`,
  semiBoldWeight: ({ theme }) => `font-weight: ${theme.fontWeights.semiBold}`,
  boldWeight: ({ theme }) => `font-weight: ${theme.fontWeights.bold}`,
};

export default fontWeights;
