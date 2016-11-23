import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_GITHUB_DATA
} from '../constants/Page'

import $ from 'jquery'

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1,2,3,4,5,6]
      })
    }, 1000)

    $.get( 'https://api.github.com/users', function() {
        dispatch({
            type: GET_GITHUB_DATA,
            payload: { asdf: 'asdf' }
        })
    });
  }
}