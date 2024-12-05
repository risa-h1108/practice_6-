import React, { useEffect, useState } from "react";
import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    };

    fetcher();
  }, []);

  if (loading) return;
  <div className={classes.postLoading}>読み込み中…</div>;

  return posts.map((post) => (
    <div key={post.id} className={classes.post}>
      <Link to={`/posts/${post.id}`} className={classes.Link}>
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
      </Link>
    </div>
  ));
};
