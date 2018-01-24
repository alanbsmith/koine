import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { omit } from "lodash";
import { rem } from "polished";

function UnstyledIcon({ modifiers, ...rest }) {
  return <FontAwesome {...rest} />;
}

const Icon = styled(UnstyledIcon)`
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
`;

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

/** @component */
export default Icon;
