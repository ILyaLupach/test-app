import { takeEvery, put, call } from 'redux-saga/effects'
import { showLoader, hideLoader } from '../actions'

export default function* sagaWatcher() {
    yield takeEvery('REQUEST_POSTS', sagaWorker)
};

function* sagaWorker() {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({type: 'FETCH_POSTS', payload})
    yield put(hideLoader())
}

const fetchPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.json())
        console.log(posts)
    return posts
}