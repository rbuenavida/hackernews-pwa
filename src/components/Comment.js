import React, { Component } from 'react';
import CommentItem from './CommentItem';
import timeago from 'timeago.js';

export default class Comment extends Component {
  renderChildren(data, depthLevel = 0) {
    const newDepthLevel = depthLevel + 1
    const elements = []
    
    data.forEach((ele, key) => {
      elements.push(
        <li>
          <CommentItem
            user={ele.by}
            timeAgo={timeago().format(ele.time * 1000)}
            content={ele.text}
            key={ele.id}
            type={depthLevel}
            id={ele.id}
          />
          { ele.children && this.renderChildren(ele.children, newDepthLevel) }
        </li>
      )
    })

    return (<ul>{elements}</ul>)
  }


  render() {
    return (
      <li>
        <CommentItem
          user={this.props.data.by}
          timeAgo={timeago().format(this.props.data.time * 1000)}
          content={this.props.data.text}
          key={this.props.data.id}
          id={this.props.data.id}
        />
        {this.props.data.children && this.renderChildren(this.props.data.children)}
      </li>
    );
  }
}