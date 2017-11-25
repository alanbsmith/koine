import styled from 'styled-components';

import { ButtonIcon } from '../../elements';

const CloseButton = styled(ButtonIcon)`
  background-color: transparent;
  color: ${props => props.theme.colors.base.chrome600};
  position: absolute;
  right: 0;
  top: 0;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.base.chrome700};
  }
`;

export default CloseButton;
