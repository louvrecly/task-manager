import { useState } from 'react';
import Drawer from './Drawer';
import TaskForm from './TaskForm';
import { Task } from '../../types/task';

interface NavBarProps {
  maxId: number;
  onSubmitTask: (task: Task) => void;
}

const NavBar = ({ maxId, onSubmitTask }: NavBarProps) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <nav className="u-sticky u-top-0 u-inset-x-0">
      <div className="u-py-3 u-px-5 u-bg-zinc-950/70 u-flex u-justify-between u-items-center u-flex-wrap u-gap-3 u-shadow-xl u-transition-shadow hover:u-shadow-2xl">
        <h1 className="u-text-xl">Task Manager</h1>

        <button onClick={() => setShowForm((showForm) => !showForm)}>
          New Task
        </button>
      </div>

      {showForm && (
        <Drawer onCloseButtonClick={() => setShowForm(false)}>
          <TaskForm maxId={maxId} onSubmitTask={onSubmitTask} />
        </Drawer>
      )}
    </nav>
  );
};

export default NavBar;
