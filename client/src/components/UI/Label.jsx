const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label className={`block text-sm font-medium text-gray-900 ${className}`} htmlFor="name" {...props}>
      {children}
    </label>
  );
};

export default Label;