import React from 'react';

type Props = {
  outlined?: boolean;
  size?: 'small' | 'middle' | 'big';
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ outlined = false, size = 'middle', children, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`
        rounded-lg
        ${size === 'big' ? 'px-7 py-2 text-lg' : size === 'middle' ? 'px-5 py-1' : 'px-3 py-1 text-sm'}
        ${
          outlined
            ? 'border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
            : 'border-none bg-amber-600 text-white hover:bg-amber-500'
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
