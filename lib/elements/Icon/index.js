import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { rem } from "polished";

function UnstyledIcon({ name, modifiers, ...rest }) {
  return (
    <FontAwesome
      name={name}
      {...rest}
    />
  );
}

UnstyledIcon.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired
};

UnstyledIcon.defaultProps = {
  modifiers: []
};

const Icon = styled(UnstyledIcon)`
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
`;

/** @component */
export default Icon;
