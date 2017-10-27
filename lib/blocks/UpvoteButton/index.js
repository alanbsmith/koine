import styled from 'styled-components';
import { rem } from 'polished';

import CircleButton from '../../elements/CircleButton';

import Arrow from './Arrow';

const UpvoteButton = styled(CircleButton)`
  position: absolute;
  right: ${rem(8)};
  top: ${rem(-24)};
`;

UpvoteButton.Arrow = Arrow;

export default UpvoteButton;
