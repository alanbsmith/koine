import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifierConfig = {
  bottom: (props) => `
    border-top-width: ${rem(props.theme.dimensions.basePad)};
    border-right-width: ${rem(props.theme.dimensions.basePad)};
    border-bottom-width: 0;
    border-left-width: ${rem(props.theme.dimensions.basePad)};
    border-top-color: ${props.theme.colors.base.chrome900};
    bottom: ${rem(-props.theme.dimensions.basePad + 1)};
  `,
  left: (props) => `
    border-top-width: ${rem(props.theme.dimensions.basePad)};
    border-right-width: ${rem(props.theme.dimensions.basePad)};
    border-bottom-width: ${rem(props.theme.dimensions.basePad)};
    border-left-width: 0;
    border-right-color: ${props.theme.colors.base.chrome900};
    left: ${rem(-props.theme.dimensions.basePad + 1)};
  `,
  right: (props) => `
    border-top-width: ${rem(props.theme.dimensions.basePad)};
    border-right-width: 0;
    border-bottom-width: ${rem(props.theme.dimensions.basePad)};
    border-left-width: ${rem(props.theme.dimensions.basePad)};
    border-left-color: ${props.theme.colors.base.chrome900};
    right: ${rem(-props.theme.dimensions.basePad + 1)};
  `,
  top: (props) => `
    border-top-width: 0;
    border-right-width: ${rem(props.theme.dimensions.basePad)};
    border-bottom-width: ${rem(props.theme.dimensions.basePad)};
    border-left-width: ${rem(props.theme.dimensions.basePad)};
    border-bottom-color: ${props.theme.colors.base.chrome900};
    top: ${rem(-props.theme.dimensions.basePad + 1)};
  `,
};

const Arrow = styled.div`
  border-color: transparent;
  border-style: solid;
  height: 0;
  position: absolute;
  width: 0;
  ${applyStyleModifiers(modifierConfig)}
`;

export default Arrow;
