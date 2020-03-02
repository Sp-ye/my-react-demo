import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
 
export default class MyButton extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string
  }
  static defaultProps = {
    // title: '',
    className: '',
    type: 'primary'
  }
  render() {
    const {
      children,
      className,
      type,
      ...rest
    } = this.props
    return (
      <button {...rest} className={`my-button my-button--${type} ${className}`}>
        {/* {this.props.title} */}
        {this.props.title || children}
      </button>
    )
  }
}
