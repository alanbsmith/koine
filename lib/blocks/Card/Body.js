import styled from 'styled-components';

const Body = styled.div`
  align-items: start;
  color: ${props => props.theme.colors.base.text};
  display: flex;
  padding: ${props => props.theme.dimensions.basePad};
  position: relative;
`;

export default Body;
