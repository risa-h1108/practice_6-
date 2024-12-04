import React from "react";
import { posts } from "../data/posts.js";
import classes from "../styles/Home.module.css";

//import { useEffect, useState } from "react";

export const Home = () => {
  return posts.map((post) => (
    <div key={post.id} className={classes.post}>
      <a href={post.id} className={classes.Link}>
        {/* `/posts/${post.id}`の``は、JSの書き方。`post.id`の値が`/posts/の後に続くURLを動的に作成しています。例えば、post.id`が`123`なら、リンク先は`/posts/123`になる*/}

        <div className={classes.info}>
          <p className={classes.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <ul className={classes.categories}>
            {post.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <h2>{post.title}</h2>
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </a>
    </div>
  ));
};

//export const Home = () => {
//  const [state, setState] = useState([]);
// const [loading, setLoading] = useState(false);

//useEffect(()=>{
//    const fetcher=async()=>{
//         setLoading(true);
//         const res =await fetch(

//         )
//     }
// })

//};
