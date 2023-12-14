// PostList 컴포넌트 입니다.
import { useEffect, useState } from 'react';
import PostItemT from './PostItemT';

interface PostRow {
  title: string;
  body: string;
  id: number;
}


export default function PostListT()  {
  const [posts, setPosts] = useState<PostRow[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className='PostList'>
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItemT key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};