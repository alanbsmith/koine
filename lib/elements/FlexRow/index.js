import styled from 'styled-components';

const FlexRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: ${props => props.theme.dimensions.basePad};
`;

export default FlexRow;
