import styled from 'styled-components';

import { H2 } from '../../elements';

const HeaderText = styled(H2)`
  color: ${props => props.theme.colors.base.chrome000};
  font-weight: ${props => props.theme.fontWeights.normal};
  overflow: hidden;
  padding: ${props => props.theme.dimensions.basePad};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default HeaderText;
