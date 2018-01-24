import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import Button from "../Button";

import gridScale from "../../utils/gridScale";

const modifierConfig = {
  hoverCustom: ({ theme, hoverColor }) => `
    &:hover, &:focus {
      color: ${theme.colors.base[hoverColor]};
    }
  `,

  hoverDanger: ({ theme }) => `
    &:hover, &:focus {
      color: ${theme.colors.status.danger};
    }
  `,

  hoverInfo: ({ theme }) => `
    &:hover, &:focus {
      color: ${theme.colors.status.info};
    }
  `,

  hoverSuccess: ({ theme }) => `
    &:hover, &:focus {
      color: ${theme.colors.status.success};
    }
  `,

  hoverWarning: ({ theme }) => `
    &:hover, &:focus {
      color: ${theme.colors.status.warning};
    }
  `,

  fullWidth: () => `flex: 1`
};

const ButtonLink = styled(Button)`
  background: transparent;
  color: ${props => props.theme.colors.base.chrome600};
  font-size: ${props => gridScale(props, 1.5)};
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;

  &:hover,
  &:focus {
    background: transparent;
    box-shadow: none;
    color: ${props => props.theme.colors.base.chrome900};
    text-decoration: underline;
  }

  ${applyStyleModifiers(modifierConfig)};
`;

ButtonLink.defaultProps = {
  hoverColor: "chrome900"
};

/** @component */
export default ButtonLink;
