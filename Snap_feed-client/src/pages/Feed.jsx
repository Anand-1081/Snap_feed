import React, { useState,useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import CreatePost from './pages/CreatePost.jsx'


const Feed = () => {

    const [ posts, setPosts ] = useState([])

    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_API_URL}/posts`)
        .then((res)=>{

            setPosts(res.data.posts)

        })
        
    },[])
    

    return (

        <section className='feed-section' >
           
            <button onClick={() => navigate("/create-post")}>
                + Create Post
            </button> 

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.imageUrl} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>

    )
}

export default Feed