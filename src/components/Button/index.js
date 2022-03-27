import React from 'react';

const Button = ({className, handler, children}) => {
  return (
    <button className={className} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;