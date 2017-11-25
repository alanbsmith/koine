import styled from 'styled-components';
import { rem } from 'polished';

const Overlay = styled.div`
  align-items: flex-start;
  background-color: ${props => props.theme.colors.base.overlay};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: ${rem(16)};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
`;

export default Overlay;
