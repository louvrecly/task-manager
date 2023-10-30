import { useCallback, useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import TasksList from './components/TasksList';
import Drawer from './components/Drawer';
import TaskForm from './components/TaskForm';
import { Task, convertFormValuesToTask, createEmptyTask } from './types/task';

const App = () => {
  const tasksString = localStorage.getItem('tasks');

  const initialTasks: Task[] = JSON.parse(tasksString ?? '[]').map(
    convertFormValuesToTask,
  );

  const [activeTaskId, setActiveTaskId] = useState(0);
  const [tasks, setTasks] = useState(initialTasks);

  const maxId = useMemo(
    () => (tasks.length ? Math.max(...tasks.map((task) => task.id)) : 0),
    [tasks],
  );
  const sortedTasks = useMemo(
    () =>
      tasks.sort(
        (taskA, taskB) => taskA.dueDate.getTime() - taskB.dueDate.getTime(),
      ),
    [tasks],
  );

  const activeTask = useMemo(
    () =>
      !activeTaskId
        ? null
        : tasks.find((task) => task.id === activeTaskId) ??
          createEmptyTask(maxId),
    [activeTaskId, maxId, tasks],
  );

  const handleSubmitTask = useCallback(
    (task: Task) => {
      if (task.id === activeTaskId) {
        const existingTasks = tasks.filter(
          (existingTask) => existingTask.id !== task.id,
        );
        setTasks([...existingTasks, task]);
      } else {
        setTasks((existingTasks) => [...existingTasks, task]);
      }

      setActiveTaskId(0);
    },
    [activeTaskId, tasks],
  );

  const editTask = useCallback(
    (taskId: number) => () => {
      setActiveTaskId(taskId);
    },
    [],
  );

  const removeTask = useCallback(
    (taskId: number) => () => {
      setTasks((existingTasks) =>
        existingTasks.filter((task) => task.id !== taskId),
      );
    },
    [],
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(sortedTasks));
  }, [sortedTasks]);

  return (
    <div>
      <div className="u-min-h-screen u-flex u-flex-col u-items-stretch">
        <NavBar onButtonClick={() => setActiveTaskId(-1)} />

        <TasksList
          tasks={sortedTasks}
          onEdit={editTask}
          onRemove={removeTask}
        />
      </div>

      {!!activeTask && (
        <Drawer onCloseButtonClick={() => setActiveTaskId(0)}>
          <TaskForm task={activeTask} onSubmitTask={handleSubmitTask} />
        </Drawer>
      )}
    </div>
  );
};

export default App;
