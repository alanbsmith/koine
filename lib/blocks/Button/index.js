import styled from 'styled-components';
import { lighten, rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import Icon from './Icon';
import Text from './Text';

import {
  bgColors,
  hoverBgColors,
} from '../../modifiers';

const customModifiers = {
  fullWidth: () => `flex: 1`,
};

const modifierConfig = {
  ...bgColors,
  ...hoverBgColors,
  ...customModifiers,
};

const Button = styled.button`
  align-items: center;
  background-color: ${props => props.theme.colors.base.chrome500};
  border-radius: 2px;
  border: solid 1px transparent;
  color: ${props => props.theme.colors.base.chrome000};
  cursor: pointer;
  display: flex;
  font-size: ${rem(16)};
  justify-content: center;
  padding: ${rem(8)} ${rem(24)};
  outline: none;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: ${props => lighten(0.05, props.theme.colors.base.chrome500)};
    box-shadow: 0 8px 8px 0 ${props => props.theme.colors.base.shadow};
  }

  ${applyStyleModifiers(modifierConfig)}
`;

Button.Icon = Icon;
Button.Text = Text;

export default Button;
