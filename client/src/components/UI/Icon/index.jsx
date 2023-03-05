import {
  TadPole,
  Pencil,
  Trash,
} from './icons';


const icons = {
  'tad-pole': TadPole,
  'pencil': Pencil,
  'trash': Trash,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent {...props} />
  );
};

export default Icon;
