import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Icon as DefaultIcon } from '../../elements';

const modifierConfig = {
  left: props => `
    padding-right: ${rem(props.theme.dimensions.basePad)};
  `,
  right: props => `
    padding-left: ${rem(props.theme.dimensions.basePad)};
  `,
};

const Icon = styled(DefaultIcon)`
  ${applyStyleModifiers(modifierConfig)};
`;

export default Icon;
