import React, {useEffect, useState} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostList = ({id, title, description, setId, setTitle, setDescription, posts, setPosts}) => {

    const [postToDeleteId, setPostToDeleteId] = useState(null);
    const [postToEditId, setPostToEditId] = useState(null);

    const [fetchDeletePost, isPostDeleteLoading, postDeleteError] = useFetching(async () => {
        await console.log("fetchDeletePost id: " + postToDeleteId)
        let response = await PostService.delete(postToDeleteId)
        await console.log('Delete')
        return response;
    });

    const [fetchEditPost, isPostEditLoading, postEditError] = useFetching(async () => {
        await console.log("fetchEditPost id: " + postToEditId)
        let response = await PostService.delete(postToEditId)
        await console.log('Delete')
        return response;
    });

    useEffect(() => {
        if (postToDeleteId !== null) {
            console.log("postDeleteHandle id: " + postToDeleteId)
            fetchDeletePost().then(
                setPosts(posts.filter(post => {
                    return post.id !== postToDeleteId
                }))
            )
            console.log(posts)
        }
    }, [postToDeleteId])

    useEffect(() => {
        if (id !== null) {
            console.log("postEditHandle id: " + id)

            setPosts(posts.filter(post => {
                    console.log({id, title, description})
                    if (post.id !== id) return post
                    else return {id, title, description}
                })
            )
            console.log(postToEditId)
        }
    }, [id])

    const postDeleteHandle = (id) => {
        setPostToDeleteId(id)
    }
    const postEditHandle = (id, title, description) => {
        setId(id)
        setTitle(title)
        setDescription(description)
    }
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return <div>
        <h1 style={{textAlign: "center"}}>
            {title}
        </h1>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">Название</TableCell>
                        <TableCell align="left">Описание</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post, index) => {
                            return <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{post.id}</TableCell>
                                <TableCell align="left">{post.title}</TableCell>
                                <TableCell align="left">{post.description}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => postDeleteHandle(post.id)} variant="outlined"
                                            startIcon={<DeleteIcon/>}>
                                        Удалить
                                    </Button>
                                </TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => postEditHandle(post.id, post.title, post.description)}
                                            variant="outlined"
                                            startIcon={<DeleteIcon/>}>
                                        Редактировать
                                    </Button>
                                </TableCell>
                            </TableRow>
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>

    </div>;
}

export default PostList;