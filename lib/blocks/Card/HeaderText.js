import styled from 'styled-components';
import { rem } from 'polished';

import H6 from '../../elements/H6';

const HeaderText = styled(H6)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${rem(240)};
`;

export default HeaderText;
