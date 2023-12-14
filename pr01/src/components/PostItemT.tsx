interface PostRow {
  title: string;
  body: string;
  id: number;
}

interface Props {
  post: PostRow;
}

export default function PostItemT({post}:Props){  
  return (
    <div className='PostItem'>
      <div>
        <span className='id'>No. {post.id}</span>
        <span className='title'>- {post.title}</span>
      </div>
      <p className='body'>{post.body.slice(0, 120)}...</p>
    </div>
  );
};