import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const H6 = styled.h6`
  font-size: 20px;
  margin: 0;
  ${applyStyleModifiers(fontWeights)}
`;

export default H6;
