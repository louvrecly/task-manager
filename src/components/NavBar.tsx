interface NavBarProps {
  onButtonClick: () => void;
}

const NavBar = ({ onButtonClick }: NavBarProps) => {
  return (
    <nav className="u-sticky u-top-0 u-inset-x-0 u-py-3 u-px-5 u-bg-zinc-950/70 u-flex u-justify-between u-items-center u-flex-wrap u-gap-3 u-shadow-xl u-transition-shadow hover:u-shadow-2xl">
      <h1 className="u-text-xl">Task Manager</h1>

      <button onClick={onButtonClick}>New Task</button>
    </nav>
  );
};

export default NavBar;