import styled from 'styled-components';
import gridScale from '../../utils/gridScale';

import Arrow from './Arrow';
import Text from './Text';

const Tooltip = styled.div`
  background-color: ${props => props.theme.colors.base.chrome900};
  border-radius: ${props => props.theme.dimensions.borderRadius};
  box-shadow: 0 3px 5px 0 ${props => props.theme.colors.base.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => `${gridScale(props, 1)} ${gridScale(props, 2)}`};
  position: relative;
`;

Tooltip.Arrow = Arrow;
Tooltip.Text = Text;

export default Tooltip;
