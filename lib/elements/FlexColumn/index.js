import styled from 'styled-components';
import { rem } from 'polished';

const FlexColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: none;
  padding: ${props => rem(props.theme.dimensions.basePad)};
`;

export default FlexColumn;
