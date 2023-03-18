import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Components
import { Icon } from '../components';

// Actions
import { getPost, deletePost } from '../store/post/post.actions';


const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    entry: postEntry,
    post: {
      loading,
    }
  } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);

  const { id } = useParams();

  const handleDelete = () => {
    dispatch(deletePost(postEntry._id)).then((res) => {
      if (res.payload) {
        navigate('/');
      }
    });
  };

  const handleEdit = () => {
    navigate(`/edit-post?id=${postEntry._id}`);
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  const tagsContent = (
    postEntry && postEntry.tags.map((tag) => {
      return (
        <p className="text-center border border-gray-100 p-2 rounded bg-gray-100">
          {tag}
        </p>
      );
    })
  );

  if (loading || !postEntry) {
    return (
      <span>Loading...</span>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-start max-w-[600px] mx-auto">
      {postEntry.userId === user.id && (
        <div className="self-end mb-2 flex justify-end items-center">
          <span className="hover:cursor-pointer" onClick={handleEdit}>
            <Icon name="pencil" className="text-warning" />
          </span>
          <span className="hover:cursor-pointer" onClick={handleDelete}>
            <Icon name="trash" className="text-danger ml-2" />
          </span>
        </div>
      )}
      <div className="h-[400px] mb-4 w-full">
        <img
          className="w-full h-full object-cover"
          src={postEntry.mainPhoto}
          alt={postEntry.title}
        />
      </div>
      <h3 className="text-3xl font-bold text-center">
        {postEntry.title}
      </h3>
      <p className="w-full text-center mb-4">
        {postEntry.content}
      </p>
      <div className="grid grid-cols-3 gap-2 w-full mb-2">
        {tagsContent}
      </div>
      <p className="w-full text-end mb-2 text-[#666e75] text-xs">
        {moment(postEntry.created_at).format('DD-MM-YYYY HH:mm')}
      </p>
    </div>
  );
};

export default Post;
