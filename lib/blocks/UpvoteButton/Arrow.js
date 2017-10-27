import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { rem } from 'polished';
import FontAwesome from 'react-fontawesome';

function UnstyledArrow(props) {
  return (
    <FontAwesome
      name="arrow-up"
      {...props}
    />
  );
};

const modifierConfig = {
  orange: ({ theme }) => `color: ${theme.colors.base.orange};`,
  hoverBounce: ({ theme }) => `
    &:hover {
      animation: ${theme.animations.upvote} 1s infinite ease-in;
    }
  `,
};

const Arrow = styled(UnstyledArrow)`
  font-size: ${rem(24)};
  ${applyStyleModifiers(modifierConfig)}
`;

export default Arrow;
