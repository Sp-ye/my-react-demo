import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.scss'

class InputNumber extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number
  }
  static defaultValue = {
    onChange: () => {},
  }
  constructor(props) {
    super(props)
    this.state = {
      innerValue: '',
      foucs: false
    }
  }

  componentDidMount() {
    this.setState({ innerValue: this.props.defaultValue })
  }
  get isControl() {
    return 'value' in this.props
  }
  get value() {
    return this.isControl ? this.props.value : this.state.innerValue
  }
  onChange(e) {
    !this.isControl && this.setState({ innerValue: e.target.value })
    this.props.onChange && this.props.onChange(e)
  }
  onFocus(e) {
    this.setState({ foucs: true })
    this.props.onFocus && this.props.onFocus(e)
  }
  onBlur(e) {
    this.setState({ foucs: false })
    // 验证数字
    let value = this.checkNumber(e)
    // 比对 最大最小值
    this.calc(value)
    e.target.value = value
    this.onChange(e)
    this.props.onBlur && this.props.onBlur(e)
  }
  checkNumber(e) {
    const reg = /\d+/g;
    let res =e.target.value.match(reg)
    return res ? res[0] : ''
  }
  calc(value) {
    const { min, max} = this.props
    value = (min && value < min) ? min : value
    value = (max && value > max) ? max : value
    return value
  }

  render() {
    return (
      <div className='my-input-number'>
        <input
          className='input'
          value={this.value}
          onChange={(e) => {this.onChange(e)}}
          onFocus={(e) => this.onFocus(e)}
          onBlur={(e) => this.onBlur(e)}
        />
      </div>
    )
  }
}

export default InputNumber;