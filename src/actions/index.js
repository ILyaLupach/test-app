export const createPost = post =>({
    type: 'CREATE_POST',
    payload: post,
})

export const showLoader = () => ({ type: 'SHOW_LOADER' })
export const hideLoader = () => ({ type: 'HIDE_LOADER' })

export const fetchPosts = () => async dispatch => {
    dispatch(showLoader())
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.json())
    dispatch({type: 'FETCH_POSTS', payload: posts})
    dispatch(hideLoader())
}

