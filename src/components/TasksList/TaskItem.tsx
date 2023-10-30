import { Task } from '../../types/task';

interface TaskItemProps {
  task: Task;
  className?: string;
}

const TaskItem = ({ task, className = '' }: TaskItemProps) => {
  return (
    <div
      className={`u-mb-3 u-py-3 u-px-5 u-bg-zinc-950/70 u-rounded-lg ${className}`}
    >
      <h2 className="u-mb-2 u-font-bold">{task.title}</h2>

      <p className="u-mb-2 u-text-xs">Category: {task.category}</p>

      <p className="u-text-xs">Due: {task.dueDate.toLocaleString()}</p>
    </div>
  );
};

export default TaskItem;
