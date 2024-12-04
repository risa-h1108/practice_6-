import React from "react";
import { posts } from "../data/posts";
import classes from "../styles/Detail.module.css";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

export const Detail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  console.log("URL ID:", id);
  console.log("Found post:", post);

  if (!post)
    return (
      <div className={classes.postError}>記事が見つかりませんでした。</div>
    );

  return (
    <div className={classes.wrapper}>
      <img src={post.thumbnailUrl} alt="sampleImage" />
      <div className={classes.info}>
        <div className={classes.date}>
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <ul className={classes.categories}>
          {post.categories.map((category, id) => (
            <li key={id}>{category}</li>
          ))}
        </ul>
      </div>
      <h2>{post.title}</h2>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

//  const [state, setState] = useState([]);
// const [loading, setLoading] = useState(false);

// useEffect(()=>{
//    const fetcher=async()=>{
//         setLoading(true);
//         const res =await fetch(

//         )
//     }
// })
