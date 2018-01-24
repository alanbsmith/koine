import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { rem } from "polished";

import gridScale from "../../utils/gridScale";

import { bgColors, hoverBgColors } from "../../modifiers";

const customModifiers = {
  boxShadow: ({ theme }) => `
    box-shadow: 0 2px 12px 0 ${theme.colors.base.shadow};
  `,

  circle: () => `
    border-radius: 50%;
  `,

  focusScale: () => `
    &:hover, &:focus {
      transform: scale(1.1);
    }
  `,

  small: props => `
    height: ${gridScale(props, 4)};
    width: ${gridScale(props, 4)};
  `
};

const modifierConfig = {
  ...bgColors,
  ...hoverBgColors,
  ...customModifiers
};

const ButtonIcon = styled.button`
  align-items: center;
  background-color: ${props => props.theme.colors.base.chrome100};
  border: solid 2px transparent;
  border-radius: ${props => props.theme.dimensions.borderRadius};
  box-sizing: border-box;
  color: ${props => props.theme.colors.base.chrome600};
  cursor: pointer;
  display: flex;
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
  height: ${props => gridScale(props, 6)};
  justify-content: center;
  outline: none;
  transition: all 200ms ease;
  width: ${props => gridScale(props, 6)};
  ${applyStyleModifiers(modifierConfig)};
`;

/** @component */
export default ButtonIcon;
