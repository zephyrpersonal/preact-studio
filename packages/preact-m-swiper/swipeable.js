import { h, Component, cloneElement } from 'preact'

const itemStyle = {
  width: '100vw',
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'top',
  whiteSpace: 'normal'
}
const innerStyle = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  height: '100%'
}

class SwiperItem extends Component {
  shouldComponentUpdate (nextProps) {
    if (
      this.props.freeze !== nextProps.freeze &&
      this.props.freezingOnSwiping
    ) {
      return true
    }
    return false
  }
  render () {
    return cloneElement(this.props.children, {
      freeze: this.props.freezingOnSwiping ? this.props.freeze : false
    })
  }
}

export default class Swipeable extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (
      nextProps.offset === this.props.offset &&
      nextProps.animation === this.props.animation
    ) {
      return false
    }
    return true
  }
  render () {
    const {
      children,
      offset,
      animation,
      style = {},
      freeze,
      freezingOnSwiping
    } = this.props
    const _style = Object.assign({}, style, innerStyle, {
      transform: `translate3d(${offset}px,0,0)`,
      '-webkit-transform': `translate3d(${offset}px,0,0)`,
      transition: animation ? '330ms' : 'none'
    })
    const childrenArr = children ? (children.map ? children : [children]) : []
    return (
      <div style={_style}>
        {childrenArr.map((child, i) => (
          <div key={i} style={itemStyle}>
            <SwiperItem freeze={freeze} freezingOnSwiping={freezingOnSwiping}>
              {child}
            </SwiperItem>
          </div>
        ))}
      </div>
    )
  }
}
