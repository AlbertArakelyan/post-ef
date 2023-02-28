import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

// Components
import {
  Input,
  Label,
  Textarea,
  Button,
} from '../components';

// Actions
import { createPost } from '../store/post/post.actions';

// Helpers
import { imageToBase64 } from '../helpers';

const initialVales = {
  title: '',
  shortDescription: '',
  content: '',
  tags: '',
};

const CreatePost = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialVales);
  const [mainPhoto, setMainPhoto] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: name === 'tags' ? value.split(',').map((value) => value.trim()) : value,
      };
    });
  };

  const handleChangeImage = (e) => {
    imageToBase64(e.target.files[0]).then((res) => {
      setMainPhoto(res);
    }).catch((e) => {
      toast.error(e);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const areAllFieldsFilled = Object.values(values).every(Boolean);

    if (!areAllFieldsFilled || !mainPhoto) {
      return toast.error('Please fill all the fields correctly.');
    }

    dispatch(createPost({
      ...values,
      mainPhoto,
    })).then(() => {
      setValues(initialVales);
      setMainPhoto(null);
    });
  };

  return (
    <div>
      <h2 className="font-extrabold text-4xl">
        Create Post
      </h2>
      <h3 className="text-base text-[#666e75] mt-2">
        Create posts for you and help others with that.
      </h3>
      <form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
        <div className="mb-3">
          <Label className="mb-2">
            Title
          </Label>
          <Input
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Label className="mb-2">
            Photo
          </Label>
          <input type="file" onChange={handleChangeImage} />
          {mainPhoto && (
            <div className="w-[400px] h-[300px] mt-2">
              <img className="w-full h-full object-cover" src={mainPhoto} alt={values.title} />
            </div>
          )}
        </div>
        <div className="mb-3">
          <Label className="mb-2">
            Short description
          </Label>
          <Input
            name="shortDescription"
            value={values.shortDescription}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Label className="mb-2">
            Content
          </Label>
          <Textarea
            name="content"
            value={values.content}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Label className="mb-2">
            Tags
          </Label>
          <Input
            name="tags"
            value={values.tags}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;