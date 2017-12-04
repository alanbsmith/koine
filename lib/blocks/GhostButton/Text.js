import styled from 'styled-components';
import gridScale from '../../utils/gridScale';

const Text = styled.span`
  font-size: ${props => gridScale(props, 1.5)};
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;
`;

export default Text;
