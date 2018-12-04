import React, { Component } from 'react';
import {
  Link,
  Redirect,
} from 'react-router-dom';
import timeago from 'timeago.js';

export default class Item extends Component {
  jumpUrl(event, url) {
    event.preventDefault();
    try {
      const newUrl = new URL(url);
      // window.location.href = url;
      window.open(url);
    } catch (e) {
      const id = url.match(/id=([0-9]*)/, 'g');
    }
  }

  render() {
    const { data, index } = this.props;
    return (
      <li>
        <div>
          <a onClick={(event) => this.jumpUrl(event,data.url)} target="_blank">{index}.{data.title}</a>
        </div>
        <div>
          <Link to={`/item/${data.id}`}>
            <span className="item-footer">
              { data.score ? `${data.score} by ${data.by} |` : '  ' }
              {'  ' + timeago().format(data.time * 1000)} |
              {data.descendants > 0 ? `   ${data.descendants}   comments` : '   discuss'}
            </span>
          </Link>
        </div>
      </li>
    );
  }
}
