import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Icon as BasicIcon } from '../../elements';

const modifierConfig = {
  left: (props) => `
    padding-right: ${rem(props.theme.dimensions.basePad)};
  `,
  right: (props) => `
    padding-left: ${rem(props.theme.dimensions.basePad)};
  `,
};

const Icon = styled(BasicIcon)`
  ${applyStyleModifiers(modifierConfig)}
`;

export default Icon;
