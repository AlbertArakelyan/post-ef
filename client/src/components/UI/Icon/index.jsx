import {
  TadPole
} from './icons';


const icons = {
  'tad-pole': TadPole,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent {...props} />
  );
};

export default Icon;