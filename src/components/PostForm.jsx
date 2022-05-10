import React, {useState} from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostForm = ({id, title, description, setId, setTitle, setDescription, posts, setPosts}) => {

    const [fetchAddPost, isPostAddLoading, postAddError] = useFetching(async () => {
        const post = {"title": title, "description": description}
        let response = await PostService.post(post)
        await setPosts([...posts, response.data])
    });

    const [fetchEditPost, isPostEditLoading, postEditError] = useFetching(async () => {
        const post = {"id": id, "title": title, "description": description}
        let response = await PostService.update(post)
        await setPosts(
            posts.filter(post => {

                return post.id !== id ? post : {"id": id, "title": title, "description" : description}


            })
        )

    });

    const handleChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
        console.log(description)
    }

    const postSaveHandle = (e) => {
        e.preventDefault();
        console.log("id  :  "+id)
        if (id === null) {
            fetchAddPost().then(() => {
                setId(null)
                setTitle('')
                setDescription('')
            })
        } else {
            fetchEditPost().then(() => {
                setId(null)
                setTitle('')
                setDescription('')
            })
            console.log(posts)
        }
        // fetch('http://localhost:8080/posts', {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({"id": null, "title": title, "description": description})
        // }).then((response) => {
        //     return response.json();
        // })
        //     .then((data) => {
        //         console.log(data);
        //         setPosts([...posts, {"id": data.id, "title": data.title, "description": data.description}])
        //         setTitle('');
        //         setDescription('')
        //     });
    }

    return (

        <Container maxWidth="sm" fixed>
            <Box m={2}>
                <TextField fullWidth
                           id="outlined-name"
                           label="Название"
                           value={title}
                           onChange={e => handleChangeTitle(e)}
                           aria-label={title}
                />
            </Box>
            <Box m={2}>
                <TextField fullWidth
                           id="outlined-name"
                           label="Описание"
                           value={description}
                           onChange={e => handleChangeDescription(e)}
                           aria-label={description}
                />
            </Box>
            <Box m={2}>
                <Button fullWidth variant="contained" onClick={e => postSaveHandle(e)}>Сохранить</Button>
            </Box>
        </Container>
    );
};

export default PostForm;