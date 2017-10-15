import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const H3 = styled.h3`
  font-size: 32px;
  margin: 0;
  ${applyStyleModifiers(fontWeights)}
`;

export default H3;
