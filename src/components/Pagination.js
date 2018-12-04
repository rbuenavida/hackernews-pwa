import React, { Component } from 'react'

export default class Pagination extends Component {
  onNext() {
    this.props.onNext(Number(this.props.page) + 1)
  }

  onPrev() {
    this.props.onPrev(Number(this.props.page) - 1)
  }

  render() {
    return (
      <div className="footer-page">
        <button onClick={() => this.onPrev()}>{'< prev --- '}</button>
        <span>{this.props.page}</span>
        <button onClick={() => this.onNext()}>{' --- next >'}</button>
      </div>
    )
  }
}

