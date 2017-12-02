import styled from 'styled-components';
import { rem } from 'polished';

import { FlexRow } from '../../elements';

const Body = styled(FlexRow)`
  display: flex;
  flex-direction: column;
  padding: ${props => rem(props.theme.dimensions.basePad)};
  position: relative;
`;

export default Body;
