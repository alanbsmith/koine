import styled from 'styled-components';
import gridScale from '../../utils/gridScale';

import { Text as DefaultText } from '../../elements';

const Text = styled(DefaultText)`
  font-size: ${props => gridScale(props, 1.5)};
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;
`;

export default Text;
