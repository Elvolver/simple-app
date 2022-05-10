import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@mui/material";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const Posts = () => {
    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posts, setPosts] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll();
        setPosts(response.data)
    })

    useEffect(() => {
        fetchPosts();
    }, [])


    return (
        <div>
            <Grid item xs={10} md={12} lg={9}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <h1 align="center">Новый пост</h1>
                    <PostForm id={id} title={title} description={description} setId={setId} setTitle={setTitle} setDescription={setDescription} setPosts={setPosts} posts={posts}/>
                    {(isPostsLoading && !postError)
                        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                            <h1>LOADING...</h1>
                        </div>
                        : <PostList id={id} title={title} description={description} setId={setId} setTitle={setTitle} setDescription={setDescription} posts={posts} setPosts={setPosts}/>
                    }
                </Paper>
            </Grid>


        </div>


    );
};

export default Posts;