import hackernews from '../api/hackernews'
import firebase from 'firebase'

const HackerNews = new hackernews(firebase)

export const getItem = (id) =>
  dispatch => {
    Promise.all([
      HackerNews.items(id),  
      HackerNews.kids(id)
    ]).then(data => {
      const item = data[0][0]
      const comments = data[1]
      const story = { ...item, comments }
      dispatch(receiveData('STORY', story))
    })
  };

export const getData = (type, page, pageSize = 30, dispatchAction) =>
  dispatch => {
    HackerNews.stories(type, {page, count: pageSize})
    .then(data => {
      console.log(dispatchAction)
      dispatch(receiveData(dispatchAction, data));
    })      
  };

const receiveData = (type, data) => {
  return {
    type, data,
  }
};

