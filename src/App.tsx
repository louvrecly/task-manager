import { useCallback, useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import TasksList from './components/TasksList';
import Drawer from './components/Drawer';
import TaskForm from './components/TaskForm';
import { Task, convertFormValuesToTask } from './types/task';

const App = () => {
  const tasksString = localStorage.getItem('tasks');

  const initialTasks: Task[] = JSON.parse(tasksString ?? '[]').map(
    convertFormValuesToTask,
  );

  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const maxId = useMemo(() => tasks.length, [tasks]);
  const sortedTasks = useMemo(
    () =>
      tasks.sort(
        (taskA, taskB) => taskA.dueDate.getTime() - taskB.dueDate.getTime(),
      ),
    [tasks],
  );

  const handleSubmitTask = useCallback((task: Task) => {
    setTasks((existingTasks) => [...existingTasks, task]);
    setShowForm(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(sortedTasks));
  }, [sortedTasks]);

  return (
    <div>
      <div className="u-min-h-screen u-flex u-flex-col u-items-stretch">
        <NavBar onButtonClick={() => setShowForm((showForm) => !showForm)} />

        <TasksList tasks={sortedTasks} />
      </div>

      {showForm && (
        <Drawer onCloseButtonClick={() => setShowForm(false)}>
          <TaskForm maxId={maxId} onSubmitTask={handleSubmitTask} />
        </Drawer>
      )}
    </div>
  );
};

export default App;
