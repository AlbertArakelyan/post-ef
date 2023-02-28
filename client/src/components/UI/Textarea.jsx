const Textarea = ({
  type = 'text',
  name = '',
  placeholder = '',
  value,
  onChange = () => {},
  className = '',
  ...props
}) => {
  return (
    <textarea
      className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 ring-primary focus:border-primary outline-none block w-full p-3`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={5}
      {...props}
    ></textarea>
  );
};

export default Textarea;