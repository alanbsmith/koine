import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';

import { fontWeights } from '../../modifiers';

const H1 = styled.h1`
  font-size: ${rem(40)};
  margin: 0;
  text-transform: capitalize;
  ${applyStyleModifiers(fontWeights)}
`;

export default H1;
