import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
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
    type: 'default'
  }
  render() {
    const {
      children,
      className,
      type,
      ...rest
    } = this.props
    
    let cls = classNames({
      'my-button': true,
      [`my-button--${[type]}`]: true,
      [className]: className
    })
    return (
      <button {...rest} className={cls}>
        {/* {this.props.title} */}
        {this.props.title || children}
      </button>
    )
  }
}
