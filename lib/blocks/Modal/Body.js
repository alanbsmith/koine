import styled from 'styled-components';

import { FlexRow } from '../../elements';

const Body = styled(FlexRow)`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.dimensions.basePad};
  position: relative;
`;

export default Body;
