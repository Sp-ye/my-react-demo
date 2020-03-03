import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../Modal'
import Icon from '../Icon'
import MyButton from '../MyButton'
import PropTypes, { func } from 'prop-types'
import './index.scss'
let p
let promiseHandler = function() {}

export class Confirm extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: '提示'
  }
  constructor(props) {
    super(props);
    
    this.state = {
      visible: true
    }
  }
  show = () => {
    console.log('show')
    this.setState({ visible: true })
    promiseHandler()
    
  }
  cancel = () => {
    this.setState({ visible: false })
  }

  confirm = () => {
    this.setState({ visible: false })
  }
  componentDidMount() {
    console.log(22222)
    this.show()
  }
  render() {
    if(!this.state.visible) return null;
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
              <MyButton className="my-confirm__footer__cancelBtn" title="取消" onClick={this.cancel}/>
              <MyButton title="确定" type="primary" onClick={this.confirm}/>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

let node = null
export default async function confirm(msg) {
  node = document.createElement('div')
  document.body.appendChild(node)
  await ReactDOM.render(<Confirm msg={msg}/>, node, function() {
    console.log(11111)
    p = new Promise(function(resolve,reject) {
      promiseHandler =function (e) {
        console.log('3333')
        console.log(this)
        // if (somethingRight) {
        //     resolve(e);
        // } else {
        //     reject(e);
        // }
      }
    })
  })
  await console.log(2222)
  console.log(p)
  return p
}
