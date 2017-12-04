import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { bgColors } from '../../modifiers';
import gridScale from '../../utils/gridScale';

const Header = styled.div`
  align-items: flex-end;
  background-color: ${props => props.theme.colors.base.chrome500};
  border-top-left-radius: ${props => props.theme.dimensions.borderRadius};
  border-top-right-radius: ${props => props.theme.dimensions.borderRadius};
  color: ${props => props.theme.colors.base.chrome000};
  display: flex;
  min-height: ${props => gridScale(props, 12)};
  padding: ${props => rem(props.theme.dimensions.basePad)};
  position: relative;
  ${applyStyleModifiers(bgColors)}
`;

export default Header;
