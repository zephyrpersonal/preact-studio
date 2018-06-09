import { h } from 'preact'
const Text = ({ children, size = 30, color = '#ccc', style = {} }) => (
  <span style={Object.assign({ color, fontSize: pxToRem(size) }, style)}>
    {children}
  </span>
)
export default Text

function pxToRem (px) {
  return `${px / 75}rem`
}