import styled from 'styled-components';
import { rem } from 'polished';

const Header = styled.div`
  align-items: flex-end;
  display: flex;
  height: ${rem(72)};
  padding: ${props => props.theme.dimensions.basePad};
`;

export default Header;
