import styled from 'styled-components';
import { rgba } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import bgColors from '../../modifiers/bgColors';
import theme from '../../styles/theme';

const CircleButton = styled.button`
  background-color: ${theme.colors.base.chrome000};
  border-radius: 50%;
  border-color: transparent;
  box-shadow: 0 2px 12px 0 ${rgba(theme.colors.base.chrome600, 0.40)};
  cursor: pointer;
  height: 48px;
  outline: none;
  transition: all 0.2s ease;
  width: 48px;

  &:hover {
    transform: scale(1.05);
  }

  ${applyStyleModifiers(bgColors)}
`;

export default CircleButton;
