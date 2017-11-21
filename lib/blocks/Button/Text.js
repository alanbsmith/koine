import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.span`
  font-size: ${rem(12)};
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;
`;

export default Text;
