import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const H2 = styled.h2`
  font-size: 36px;
  margin: 0;
  ${applyStyleModifiers(fontWeights)}
`;

export default H2;
