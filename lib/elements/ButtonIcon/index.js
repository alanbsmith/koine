import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import {
  bgColors,
  hoverBgColors,
} from '../../modifiers';

const customModifiers = {
  boxShadow: ({ theme }) => `
    box-shadow: 0 ${rem(2)} ${rem(12)} 0 ${theme.colors.base.shadow};
  `,

  circle: () => `
    border-radius: 50%;
  `,

  focusScale: () => `
    &:hover, &:focus {
      transform: scale(1.1);
    }
  `,

  small: ({ theme }) => `
    height: ${rem(32)};
    width: ${rem(32)};
  `,
};

const modifierConfig = {
  ...bgColors,
  ...hoverBgColors,
  ...customModifiers,
};

const ButtonIcon = styled.button`
  align-items: center;
  background-color: ${props => props.theme.colors.base.chrome100};
  border: solid 2px transparent;
  border-radius: 2px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.base.chrome600};
  cursor: pointer;
  display: flex;
  font-size: ${rem(16)};
  height: ${rem(48)};
  justify-content: center;
  outline: none;
  transition: all 200ms ease;
  width: ${rem(48)};
  ${applyStyleModifiers(modifierConfig)}
`;

export default ButtonIcon;
