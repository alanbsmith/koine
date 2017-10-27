import styled from 'styled-components';

import H2 from '../../elements/H2';

const HeaderText = styled(H2)`
  font-weight: ${props => props.theme.fontWeights.normal};
  margin: ${props => props.theme.dimensions.basePad};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default HeaderText;
