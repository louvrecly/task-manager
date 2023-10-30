import { Task } from '../../types/task';
import TaskItem from './TaskItem';

interface TasksListProps {
  tasks: Task[];
  onCloseButtonClick: (taskId: number) => () => void;
}

const TasksList = ({ tasks, onCloseButtonClick }: TasksListProps) => {
  if (!tasks.length)
    return (
      <div className="u-p-5 u-flex-1 u-flex u-justify-center u-items-center">
        No tasks found. Create one now!
      </div>
    );

  return (
    <div className="u-mx-auto u-p-3 u-w-full u-max-w-4xl u-flex-1 sm:u-px-10">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCloseButtonClick={onCloseButtonClick}
        />
      ))}
    </div>
  );
};

export default TasksList;
