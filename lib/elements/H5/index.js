import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const H5 = styled.h5`
  font-size: 24px;
  margin: 0;
  ${applyStyleModifiers(fontWeights)}
`;

export default H5;
