import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const H1 = styled.h1`
  font-size: 40px;
  margin: 0;
  ${applyStyleModifiers(fontWeights)}
`;

export default H1;
