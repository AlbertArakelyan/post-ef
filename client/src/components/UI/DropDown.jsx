import { useState, useMemo } from 'react';

const DropDown = ({
  element,
  className = '',
  dropDownClassName ='',
  positionX = 'center',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const visibilityClassName = useMemo(() => {
    if (isOpen) {
      return 'visible opacity-100';
    }

    return 'invisible opacity-0';
  }, [isOpen]);

  const positionXClassName = useMemo(() => {
    switch (positionX) {
      case 'right':
        return 'right-0';
      case 'left':
        return 'left-0';
      case 'center':
      default:
        return 'left-1/2 translate-x-[-50%]';
    }
  }, [positionX]);

  const handleChange = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={`relative ${className}`} onClick={handleChange}>
      <div className={`absolute top-[calc(100%+8px)] ${positionXClassName} transition-all ease-in-out ${visibilityClassName} ${dropDownClassName}`}>
        {element}
      </div>
      {children}
    </div>
  );
};

export default DropDown;
