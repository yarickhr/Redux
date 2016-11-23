import GET_GITHUB_DATA from '../constants/Page'

const initialState = {
    users: {},
    github: false
}

export default function login(state = initialState, action) {

    switch (action.type) {
        case GET_GITHUB_DATA:
            console.log('asdfasdfasdf')
            return {...state, users: action.payload, github: true }

        default:
        console.log('1111111111')
            return state
    }
}