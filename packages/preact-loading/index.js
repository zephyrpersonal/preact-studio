import { h, Component } from 'preact'
import px2rem from 'p-to-r'

const styleEl = document.createElement('style')
// styleEl.innerHTML = `.loader{position:relative;display:inline-block}.loader:before{content:'';display:block;padding-top:100%}.circular{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:100%;-webkit-transform-origin:center center;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;stroke-linecap:round}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes color{100%,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}`
styleEl.innerHTML = `.loader{position:relative;display:inline-block}.loader:before{content:'';display:block;padding-top:100%}.circular{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:100%;-webkit-transform-origin:center center;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}`
document.head.appendChild(styleEl)
export default class Loading extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }
  render ({ size = 40, color = '#ccc' }) {
    return (
      <div class="loader" style={{ width: px2rem(size) }}>
        <svg class="circular" viewBox="25 25 50 50">
          <circle
            style={{ stroke: color }}
            class="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="3"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    )
  }
}
