import styled from 'styled-components';

import Body from './Body';
import Header from './Header';
import HeaderText from './HeaderText';

const Board = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

Board.Body = Body;
Board.Header = Header;
Board.HeaderText = HeaderText;

export default Board;
