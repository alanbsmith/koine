import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import Button from '../Button';
import Icon from './Icon';
import Text from './Text';

const modifierConfig = {
  hoverCustom: ({ theme, hoverColor }) => `
    &:hover, &:focus {
      border-color: ${theme.colors.base[hoverColor]};
      color: ${theme.colors.base[hoverColor]};
    }
  `,

  hoverDanger: ({ theme }) => `
    &:hover, &:focus {
      border-color: ${theme.colors.status.danger};
      color: ${theme.colors.status.danger};
    }
  `,

  hoverInfo: ({ theme }) => `
    &:hover, &:focus {
      border-color: ${theme.colors.status.info};
      color: ${theme.colors.status.info};
    }
  `,

  hoverSuccess: ({ theme }) => `
    &:hover, &:focus {
      border-color: ${theme.colors.status.success};
      color: ${theme.colors.status.success};
    }
  `,

  hoverWarning: ({ theme }) => `
    &:hover, &:focus {
      border-color: ${theme.colors.status.warning};
      color: ${theme.colors.status.warning};
    }
  `,
  fullWidth: () => `flex: 1`,
};

const GhostButton = styled(Button)`
  background: transparent;
  border-color: ${props => props.theme.colors.base.chrome600};
  color: ${props => props.theme.colors.base.chrome600};

  &:hover,
  &:focus {
    background: transparent;
    border-color: ${props => props.theme.colors.base.chrome900};
    box-shadow: none;
    color: ${props => props.theme.colors.base.chrome900};
  }

  ${applyStyleModifiers(modifierConfig)}
`;

GhostButton.defaultProps = {
  hoverColor: 'chrome900',
};

GhostButton.Icon = Icon;
GhostButton.Text = Text;

export default GhostButton;
