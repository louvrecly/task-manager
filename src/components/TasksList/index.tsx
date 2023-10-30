import { Task } from '../../types/task';
import TaskItem from './TaskItem';

interface TasksListProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  if (!tasks.length)
    return (
      <div className="u-p-5 u-flex-1 u-flex u-justify-center u-items-center">
        No tasks found. Create one now!
      </div>
    );

  return (
    <div className="u-p-3 u-flex-1 sm:u-px-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
