import React, { Component } from 'react'
import { getData } from '../actions/comment';
import { connect } from 'react-redux';
import { STORY_TYPES } from '../const';
import { loadingPic } from '../public/loading';
import Item from './Item'
import Pagination from './Pagination'

const PAGE_SIZE = 30

class Stories extends Component {
  constructor(props) {
    super(props)
    const storiesType = STORY_TYPES[props.type]
    this.state = {
      pageNumber: Number(props.page),
      storiesType
    }
  }

  componentDidMount() {
    const page = this.props.page
    const { apiEndpointPrefix, actionName } = this.state.storiesType
    this.props.dispatch(getData(apiEndpointPrefix, page, PAGE_SIZE, actionName))
  }
  
  componentWillReceiveProps(nextProps, nextState, context) {
    const newPageNumber = nextProps.page
    const { apiEndpointPrefix, actionName } = this.state.storiesType
    if (newPageNumber && newPageNumber !== this.state.pageNumber) {
      this.setState({ pageNumber: newPageNumber })
      // console.log('will receive props', newPageNumber)
      this.props.dispatch(getData(apiEndpointPrefix, newPageNumber, PAGE_SIZE, actionName))
    }
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  onUpdatePageNumber(newPageNumber) {
    // console.log('new page number', newPageNumber)
    this.scrollTop()
    this.props.history.push(`/${this.props.type}/${newPageNumber}`)
  }

  renderItems() {
    return this.props.data.map((item, index) => {
        const number = ((this.state.pageNumber - 1) * PAGE_SIZE) + index + 1 
        return (<Item index={number} data={item} key={index} />)
      }
    )
  }

  renderList() {
    if ((this.props.data && this.props.data.length) > 0) {
      return (
        <ol>
        {this.renderItems()}
        </ol>
      )
    } else {
      return (
        <div className="loading">
          <img src={loadingPic} alt="loading" />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="content-list">
        {this.renderList()}
        <Pagination page={this.state.pageNumber}
          onNext={this.onUpdatePageNumber.bind(this)} 
          onPrev={this.onUpdatePageNumber.bind(this)} 
          />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const type = STORY_TYPES[ownProps.type]
  return { data: state.stories[type.stateDataKeyName]}
}

export default connect(mapStateToProps)(Stories)
