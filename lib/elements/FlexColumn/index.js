import styled from 'styled-components';

const FlexColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: none;
  padding: ${props => props.theme.dimensions.basePad};
`;

export default FlexColumn;
