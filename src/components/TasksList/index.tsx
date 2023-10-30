import { Task } from '../../types/task';
import TaskItem from './TaskItem';

interface TasksListProps {
  tasks: Task[];
  onEdit: (taskId: number) => () => void;
  onRemove: (taskId: number) => () => void;
}

const TasksList = ({ tasks, onEdit, onRemove }: TasksListProps) => {
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
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TasksList;
