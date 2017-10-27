import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontWeights } from '../../modifiers';

const H2 = styled.h2`
  font-size: ${rem(36)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(fontWeights)}
`;

export default H2;
