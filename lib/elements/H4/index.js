import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const H4 = styled.h4`
  font-size: 28px;
  margin: 0;
  ${applyStyleModifiers(fontWeights)}
`;

export default H4;
