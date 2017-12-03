import { rem } from 'polished';

function gridScale(props, scale) {
  const { basePad } = props.theme.dimensions;
  return rem(basePad * scale);
}

export default gridScale;
