import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { omit } from 'lodash';
import { rem } from 'polished';


function UnstyledIcon(props) {
  const iconProps = omit(props, ['modifiers']);
  return <FontAwesome {...iconProps} />;
}

const Icon = styled(UnstyledIcon)`
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
`;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
