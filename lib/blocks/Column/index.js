import styled from 'styled-components';
import { rem } from 'polished';

import Header from './Header';
import HeaderText from './HeaderText';

const Column = styled.div`
  align-self: flex-start;
  background-color: ${props => props.theme.colors.base.chrome100};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.dimensions.basePad};
  min-width: ${rem(320)};
  padding: ${props => props.theme.dimensions.basePad};
`;

Column.Header = Header;
Column.HeaderText = HeaderText;

export default Column;
