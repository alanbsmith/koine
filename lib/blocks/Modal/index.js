import styled from 'styled-components';
import { rem } from 'polished';

import { FlexContainer } from '../../elements';
import gridScale from '../../utils/gridScale';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import CloseButton from './CloseButton';
import HeaderText from './HeaderText';
import Overlay from './Overlay';

const Modal = styled(FlexContainer)`
  animation: ${props => props.theme.animations.slidedown} 0.2s ease;
  background-color: ${props => props.theme.colors.base.background};
  border-radius: ${props => props.theme.dimensions.borderRadius};
  margin: ${props => rem(props.theme.dimensions.basePad)};
  width: ${props => gridScale(props, 80)};
`;

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;
Modal.CloseButton = CloseButton;
Modal.HeaderText = HeaderText;
Modal.Overlay = Overlay;

export default Modal;
