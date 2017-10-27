import styled from 'styled-components';
import { rem } from 'polished';

import Body from './Body';
import Header from './Header';
import HeaderText from './HeaderText';
import Text from './Text';

const Card = styled.div`
  background-color: ${props => props.theme.colors.base.background};
  border-radius: 2px;
  box-shadow: 0 8px 8px 0 ${props => props.theme.colors.base.shadow};
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.dimensions.basePad};
  min-height: ${rem(160)};
`;

Card.Body = Body;
Card.Header = Header;
Card.Text = Text;
Card.HeaderText = HeaderText;

export default Card;
