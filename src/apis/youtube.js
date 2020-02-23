import axios from 'axios';

const KEY = 'AIzaSyCZKiv54XQaBv-2tGuyz6NrqspisCn7pWc';


// pre configured instance of axios that has some default parameters
//  and some base url
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})
