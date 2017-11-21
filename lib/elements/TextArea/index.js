import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { focusColors } from '../../modifiers';

const TextArea = styled.textarea`
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.base.chrome050};
  box-sizing: border-box;
  flex: 1;
  font-size: ${rem(20)};
  outline: none;
  resize: vertical;
  transition: border-bottom 200ms ease;

  &:focus {
    border-bottom-color: ${props => props.theme.colors.base.blue};
  }

  ${applyStyleModifiers(focusColors)}
`;

export default TextArea;
