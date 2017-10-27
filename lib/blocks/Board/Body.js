import styled from 'styled-components';

const Body = styled.div`
  background: ${props => props.theme.colors.base.chrome050};
  display: flex;
  flex: 1;
  overflow-x: scroll;
  padding: ${props => props.theme.dimensions.basePad};
`;

export default Body;
