import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import bgColors from '../../modifiers/bgColors';

const customModifiers = {
  boxShadow: ({ theme }) => `
    box-shadow: 0 2px 12px 0 ${theme.colors.base.shadow};
  `,
};

const modifierConfig = {
  ...bgColors,
  ...customModifiers,
};

const CircleButton = styled.button`
  background-color: ${props => props.theme.colors.base.background};
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  height: ${rem(48)};
  outline: none;
  transition: all 0.2s ease;
  width: ${rem(48)};

  &:hover {
    transform: scale(1.05);
  }

  ${applyStyleModifiers(modifierConfig)}
`;

export default CircleButton;
