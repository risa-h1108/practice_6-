import React from "react";
import classes from "../styles/Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Detail = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setPost(data.post);
      setLoading(false);
    };

    fetcher();
  }, []);

  if (loading) return <div className={classes.postLoading}>読み込み中...</div>;
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
