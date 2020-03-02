import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../Modal'
import Icon from '../Icon'
import MyButton from '../MyButton'
import PropTypes from 'prop-types'
import './index.scss'

export class Confirm extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: '提示'
  }
  render() {
    return (
      <Modal>
        <div className="my-confirm">
          <div className="my-confirm__content">
            <MyButton className="my-confirm__close">
              <span className="my-confirm__close__x">
                <Icon name='icon-close'/>
              </span>
            </MyButton>
            <div className="my-confirm__header">
              <div className="my-confirm__title">{this.props.title}</div>
            </div>
            <div className="my-confirm__body"><p>{this.props.msg}</p></div>
            <div className="my-confirm__footer">
              <MyButton title="取消" />
              <MyButton title="确定" type="primary"/>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}
let node = null
export default function confirm(msg) {
  node = document.createElement('div')
  document.body.appendChild(node)
  ReactDOM.render(<Confirm msg={msg}/>, node)
}
