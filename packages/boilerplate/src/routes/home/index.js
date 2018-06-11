import { h, Component } from 'preact'
import { Modal } from 'preact-modal'
import style from './style'
import Text from 'preact-text'
import {
  RowView,
  SlotRowView,
  SlotColumnView,
  XCenterView
} from 'preact-layoutview'

export default class Home extends Component {
  state = {
    open: false
  }
  render ({}, { open }) {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <RowView height={100} bgColor="#ccc">
          <Text color="#f8584f">wenjun</Text>
          <Text color="#f8584f">22222</Text>
        </RowView>
        <SlotRowView height={100} gap={30}>
          <Text color="#f8584f">wenjun</Text>
          <Text color="#f8584f">22222</Text>
        </SlotRowView>
        <SlotColumnView gap={30}>
          <Text color="#f8584f">wenjun</Text>
          <Text color="#f8584f">22222</Text>
        </SlotColumnView>
        <div onClick={() => this.setState({ open: true })}>打开modal</div>
        <Modal open={open} onMaskClick={() => this.setState({ open: false })}>
          <XCenterView
            height={100}
            width={700}
            bgColor="#fff"
            style={{ borderRadius: '0.2rem' }}
          >
            <Text color="#f8584f">modal</Text>
          </XCenterView>
        </Modal>
      </div>
    )
  }
}
