import axios from 'axios'


const initialState = {
    loading: false,
    articles: []
}

const REQUEST_ARTICLES = "REQUEST_ARTICLES"




export default function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_ARTICLES + "_PENDING":
            return {...state, loading: true}
        case REQUEST_ARTICLES + "_FULFILLED":
        //doesnt need to have ...state when making awhole new object
            return {loading: false, articles: action.payload}
        case REQUEST_ARTICLES + "_REJECTED":
            return {...state, loading: false}
        default:
            return state
    }
    
}
//add async after export if using await


export function requestArticles(){
    let articles = axios.get('/api/hacker-news').then(res => res.data)
    // let articles = await axios.get('/api/hacker-news')
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}