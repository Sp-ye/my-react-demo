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
              <span className="my-confirm__close__x"><Icon name='icon-close'/></span>
            </MyButton>
            <div className="my-confirm__header">
              <div className="my-confirm__title">{this.props.title}</div>
            </div>
            <div className="my-confirm__body"><p>{this.props.msg}</p></div>
            <div className="my-confirm__footer">
              <MyButton id="my-confirm__footer__cancelBtn" className="my-confirm__footer__cancelBtn" title="取消"/>
              <MyButton id="my-confirm__footer__confirmBtn" title="确定" type="primary"/>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

// 应该不需要我这么麻烦吧....
let node = null
export default async function confirm(msg) {
  let p
  node = document.createElement('div')
  document.body.appendChild(node)
  await ReactDOM.render(<Confirm msg={msg} />, node, function() {
    p = new Promise((resolve,reject) => {
      const cancelBtn = document.getElementById("my-confirm__footer__cancelBtn")
      const confirmBtn = document.getElementById("my-confirm__footer__confirmBtn")
      cancelBtn.addEventListener('click', () => {
      document.body.removeChild(node)
        reject('取消')
      })
      confirmBtn.addEventListener('click', () => {
        document.body.removeChild(node)
        resolve('确认')
      })
    }).catch( e => {
      console.log('catch: ', e)
    })
  })
  return p
}
