import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Components
import { PostCard } from '../components';

// Actions
import { getPosts } from '../store/post/post.actions';


const Posts = ({ isUser }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { list: postsList, posts: { loading } } = useSelector((state) => state.post);

  useEffect(() => {
    if (isUser) {
      dispatch(getPosts(user.id));
    } else {
      dispatch(getPosts());
    }
  }, [user, isUser]);

  const postsContent = (
    postsList.map((postItem) => {
      return (
        <PostCard
          key={postItem._id}
          id={postItem._id}
          mainPhoto={postItem.mainPhoto}
          title={postItem.title}
          shortDescription={postItem.shortDescription}
          author={postItem.userId.username}
          createdAt={moment(postItem.created_at).format('DD.MM.YYYY')}
        />
      );
    })
  );

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div>
      <h2 className="font-extrabold text-4xl mb-4">
        {isUser ? 'My Posts' : 'Posts'}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {postsContent}
      </div>
    </div>
  );
};

export default Posts;