import React from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {clearPostFormAction, setPostDescriptionAction, setPostTitleAction} from "../store/postFormReducer";
import {addPostAction, editPostAction} from "../store/postReducer";

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
        if (post.id === null) {
            dispatch(addPostAction(post))
        } else {
            dispatch(editPostAction(post))
        }
        dispatch(clearPostFormAction())
    }


    return (

        <Container maxWidth="sm" fixed>


            <Box m={2}>
                <TextField fullWidth
                           id="outlined-name"
                           label="Название"
                           value={post.title}
                           onChange={e => handleChangeTitle(e)}
                           aria-label={post.title}
                />
            </Box>
            <Box m={2}>
                <TextField fullWidth
                           id="outlined-name"
                           label="Описание"
                           value={post.description}
                           onChange={e => handleChangeDescription(e)}
                           aria-label={post.description}
                />
            </Box>
            <Box m={2}>
                <Button fullWidth variant="contained" onClick={e => postSaveHandle(e)}>Сохранить</Button>
            </Box>
        </Container>
    );
};

export default PostForm;