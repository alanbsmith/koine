import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { bgColors } from '../../modifiers';


const Header = styled.div`
  align-items: flex-end;
  background-color: ${props => props.theme.colors.status.default};
  border-radius: 2px 2px 0 0;
  color: ${props => props.theme.colors.base.chrome000};
  display: flex;
  min-height: ${rem(40)};
  padding: ${props => props.theme.dimensions.basePad};
  ${applyStyleModifiers(bgColors)}
`;

export default Header;
