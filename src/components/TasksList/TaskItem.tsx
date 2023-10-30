import { Task } from '../../types/task';

interface TaskItemProps {
  task: Task;
  className?: string;
  onCloseButtonClick: (taskId: number) => () => void;
}

const TaskItem = ({
  task,
  className = '',
  onCloseButtonClick,
}: TaskItemProps) => {
  return (
    <div
      className={`u-relative u-mb-3 u-py-3 u-px-5 u-bg-zinc-950/70 u-rounded-lg ${className}`}
    >
      <button
        className="u-absolute u-top-0 u-right-0 u-py-3 u-px-5 u-font-bold u-bg-transparent u-rounded-full"
        onClick={onCloseButtonClick(task.id)}
      >
        X
      </button>

      <h2 className="u-mb-2 u-font-bold">{task.title}</h2>

      <p className="u-mb-2 u-text-xs">Category: {task.category}</p>

      <p className="u-text-xs">Due: {task.dueDate.toDateString()}</p>
    </div>
  );
};

export default TaskItem;
