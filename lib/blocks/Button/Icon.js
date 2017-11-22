import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Icon as BasicIcon } from '../../elements';

const modifierConfig = {
  left: () => `
    padding-right: ${rem(8)};
  `,
  right: () => `
    padding-left: ${rem(8)};
  `,
};

const Icon = styled(BasicIcon)`
  ${applyStyleModifiers(modifierConfig)}
`;

export default Icon;
