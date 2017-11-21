import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { omit } from 'lodash';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifierConfig = {
  left: () => `
    padding-right: ${rem(8)};
  `,
  right: () => `
    padding-left: ${rem(8)};
  `,
};

function UnstyledFontAwesome(props) {
  const iconProps = omit(props, ['modifiers']);
  return <FontAwesome {...iconProps} />;
}

const Icon = styled(UnstyledFontAwesome)`
  ${applyStyleModifiers(modifierConfig)}
`;

export default Icon;
