import { title } from "process";
import { useState } from "react";
import Post from "../model/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

import "./SocialPosts.css"

function SocialPosts(){
    const[posts, setPosts] = useState<Post[]>([
        {title: "hi", thought: "wassup"},
        {title: "Yoooo", thought: "man this stuff is confusing"},
        {title: "Bruh", thought: "Almost there"}
    ])

    const [hidden, setHidden] = useState<boolean>(false);

function handlePostSubmit(post: Post): void{
    setPosts(prev=>[...posts,post])
    setHidden(false);
}

function handleDeletePost(index:number){
    setPosts(prev =>[...prev.slice(0,index), ...prev.slice(index+1)])
}





    return(
        <div className="SocialPosts">
            <h1>My Thoughts</h1>
            <button onClick={() => setHidden(true)}>New Thought</button>
            <div className="box">
            {posts.map((posts, i) =>
             <PostInList key={i} posts={posts} onDelete={()=>handleDeletePost(i)}/>)}
            </div>

             {hidden ? <PostForm onSubmit={handlePostSubmit} onClose={() => setHidden(false)}/> : null }
        </div>
    )
}

export default SocialPosts;