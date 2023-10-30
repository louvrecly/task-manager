import { useCallback, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import TasksList from './components/TasksList';
import { Task } from './types/task';

const DUMMY_TASKS: Task[] = [
  {
    id: 1,
    title: 'Learn React',
    category: 'Personal',
    dueDate: new Date('2023-11-15'),
  },
  {
    id: 2,
    title: 'Learn Python',
    category: 'Personal',
    dueDate: new Date('2023-11-30'),
  },
  {
    id: 3,
    title: 'Create Node.js server',
    category: 'Work',
    dueDate: new Date('2023-12-15'),
  },
  {
    id: 4,
    title: 'Connect App to Firebase',
    category: 'School',
    dueDate: new Date('2023-12-20'),
  },
  {
    id: 5,
    title: 'Learn SQL',
    category: 'School',
    dueDate: new Date('2023-11-21'),
  },
  {
    id: 6,
    title: 'Learn MongoDB',
    category: 'School',
    dueDate: new Date('2023-12-10'),
  },
  {
    id: 7,
    title: 'Deploy App to AWS',
    category: 'Work',
    dueDate: new Date('2023-10-21'),
  },
  {
    id: 8,
    title: 'Learn Flutter',
    category: 'Personal',
    dueDate: new Date('2023-10-02'),
  },
];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const sortedTasks = useMemo(
    () =>
      tasks.sort(
        (taskA, taskB) => taskA.dueDate.getTime() - taskB.dueDate.getTime(),
      ),
    [tasks],
  );

  const handleSubmitTask = useCallback((task: Task) => {
    setTasks((existingTasks) => [...existingTasks, task]);
  }, []);

  return (
    <div>
      <NavBar maxId={tasks.length} onSubmitTask={handleSubmitTask} />

      <div className="u-p-3 sm:u-px-5">
        <TasksList tasks={sortedTasks} />
      </div>
    </div>
  );
};

export default App;
