import { ReactNode } from 'react';

interface DrawerProps {
  children?: ReactNode;
  onCloseButtonClick: () => void;
}

const Drawer = ({ children, onCloseButtonClick }: DrawerProps) => {
  return (
    <div className="u-fixed u-top-0 u-inset-x-0 u-h-screen u-flex u-items-stretch">
      <button
        className="u-absolute u-top-0 u-right-0 u-py-3 u-px-5 u-font-bold u-bg-transparent u-rounded-full"
        onClick={onCloseButtonClick}
      >
        X
      </button>

      {children}
    </div>
  );
};

export default Drawer;
