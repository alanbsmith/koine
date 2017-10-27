import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontWeights } from '../../modifiers';

const H5 = styled.h5`
  font-size: ${rem(24)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(fontWeights)}
`;

export default H5;
