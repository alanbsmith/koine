import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { fontStyles, fontWeights } from '../../modifiers';
import gridScale from '../../utils/gridScale';

const modifierConfig = {
  ...fontStyles,
  ...fontWeights,
};

const Link = styled(UnstyledLink)`
  color: ${props => props.theme.colors.base.link};
  font-size: ${props => gridScale(props, 1.5)};
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;

  &:hover,
  &:focus {
    box-shadow: none;
    color: ${props => props.theme.colors.base.linkHover};
    text-decoration: underline;
  }

  ${applyStyleModifiers(modifierConfig)}
`;

export default Link;
