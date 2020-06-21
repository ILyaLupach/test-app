import React, {useState} from 'react';
import { connect } from 'react-redux'
import { createPost } from '../actions'

const PostForm = ({ createPost }) => {
    const [state, setState] = useState({title: ''});
    const submitHendler = event => {
        event.preventDefault()
        const { title } = state
        if (!title.length) return
        const newPost = {
            title, 
            id: Date.now().toString(),
        }
        createPost(newPost)
        setState({title: ''})
    }
    const changeInput = (event) => {
        const {name, value} = event.target
        const newState = { ...state, [name]: value }
        setState(newState)
    }

    return (
        <form onSubmit={submitHendler}>
            <div  className='form-group'>
                <span className="col-sm-4 col-form-label">
                    Заголовок поста
                </span>
                <div className="col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={state.title}
                        name='title'
                        onChange={changeInput}
                    />
                </div>
            </div>
            <button className='btn btn-success'>Создать</button>
        </form>
    );
};

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm);
