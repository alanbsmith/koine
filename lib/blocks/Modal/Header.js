import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { bgColors } from '../../modifiers';

const Header = styled.div`
  align-items: flex-end;
  background-color: ${props => props.theme.colors.base.chrome500};
  border-radius: 2px 2px 0 0;
  color: ${props => props.theme.colors.base.chrome000};
  display: flex;
  min-height: ${rem(96)};
  padding: ${props => rem(props.theme.dimensions.basePad)};
  position: relative;
  ${applyStyleModifiers(bgColors)}
`;

export default Header;
