import styled from 'styled-components';
import { rem } from 'polished';

const FlexRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: ${props => rem(props.theme.dimensions.basePad)};
`;

export default FlexRow;
