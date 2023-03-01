import { Link } from 'react-router-dom';


const PostCard = ({
  id,
  title,
  mainPhoto,
  shortDescription,
  author,
  createdAt,
}) => {
  return (
    <Link
      className="border border-gray-100 rounded overflow-hidden hover:cursor-pointer hover:scale-[1.02] hover:border-secondary ease-in-out duration-300"
      to={`posts/${id}`}
    >
      <div className="w-full h-[175px]">
        <img className="w-full h-full object-cover" src={mainPhoto} alt="" />
      </div>
      <div className="p-2 flex flex-col items-start justify-start bg-white">
        <h3 className="text-3xl mb-3">
          {title}
        </h3>
        <p className="mb-2">
          {shortDescription}
        </p>
        <div className="flex justify-between items-center w-full">
          <span className="text-[#666e75] text-sm">
            Author: {author}
          </span>
          <span className="text-[#666e75] text-xs">
            {createdAt}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;