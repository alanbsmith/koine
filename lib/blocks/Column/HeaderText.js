import styled from 'styled-components';

import H6 from '../../elements/H6';

const HeaderText = styled(H6)`
  color: ${props => props.theme.colors.base.chrome600};
  font-weight: ${props => props.theme.fontWeights.normal};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default HeaderText;
