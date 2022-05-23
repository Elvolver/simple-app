import React from 'react';
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setPostDescriptionAction, setPostTitleAction} from "../store/postFormReducer";
import {addPost, editPost} from "../asyncActions/posts";
import {reset} from "redux-form";
import ReduxPostForm from "./simpleForm";
import {clearPostFormAction} from "../store/reduxPostFormReduser";
import InitializeFromStateForm from "./simpleForm";

const PostForm = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post)

    const handleChangeTitle = (e) => {
        e.preventDefault();
        const postTitle = e.target.value
        dispatch(setPostTitleAction(postTitle))
    }

    const handleChangeDescription = (e) => {
        e.preventDefault();
        const postDescription = e.target.value
        dispatch(setPostDescriptionAction(postDescription))
    }

    const postSaveHandle = (e) => {
        e.preventDefault();
        console.log("id  :  " + post.id)
        if (post.id === null || post.id === undefined) {
            console.log(post)
            dispatch(addPost(post))
        } else {
            dispatch(editPost(post))
        }
        dispatch(clearPostFormAction())
    }

    const handleSubmit = (post) => {
        console.log(post)
        if (post.id === null || post.id === undefined) {
            console.log(post)
            dispatch(addPost(post))
        } else {
            dispatch(editPost(post))
        }
        dispatch(reset("ordersTradesSearchForm"));
        dispatch(clearPostFormAction())
    }

    const submit = values => {
        // print the form values to the console
        console.log(values)

    }

    return (

        <Container maxWidth="sm" fixed>
            <InitializeFromStateForm onSubmit={handleSubmit}/>
        </Container>
    );
};

export default PostForm;