// Components
import Icon from './Icon';

const Button = ({
  children,
  type = 'button',
  className = '',
  iconClassName = '',
  disabled = false,
  icon,
}) => {
  return (
    <button
      className={`${className} text-white bg-primary font-medium rounded-md text-sm ring-offset-2 focus:ring-1 ring-primary px-5 py-2.5 text-center`}
      disabled={disabled}
      type={type}
    >
      {icon && (
        <Icon className={`mr-2 inline ${iconClassName}`} name={icon} />
      )}
      {children}
    </button>
  );
};

export default Button;