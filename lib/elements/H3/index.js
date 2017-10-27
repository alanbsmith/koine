import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontWeights } from '../../modifiers';

const H3 = styled.h3`
  font-size: ${rem(32)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(fontWeights)}
`;

export default H3;
