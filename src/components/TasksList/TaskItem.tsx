import { useMemo } from 'react';
import { Task, TaskStatus } from '../../types/task';

interface TaskItemProps {
  task: Task;
  className?: string;
  onEdit: (taskId: number) => () => void;
  onRemove: (taskId: number) => () => void;
}

const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;

const TaskItem = ({
  task,
  className = '',
  onEdit,
  onRemove,
}: TaskItemProps) => {
  const taskStatus = useMemo<TaskStatus>(() => {
    const dueDateTime = task.dueDate.getTime();
    const currentTime = new Date().getTime();
    return dueDateTime < currentTime
      ? 'due'
      : dueDateTime - currentTime <= threeDaysInMilliseconds
      ? 'soon'
      : 'upcoming';
  }, [task.dueDate]);

  return (
    <div
      className={`u-relative u-mb-3 u-py-3 u-px-5 u-bg-zinc-950/70 u-rounded-lg ${className}`}
    >
      <button
        className="u-absolute u-top-0 u-right-0 u-py-3 u-px-5 u-font-bold u-bg-transparent u-rounded-full"
        onClick={onEdit(task.id)}
      >
        E
      </button>

      <button
        className="u-absolute u-bottom-0 u-right-0 u-py-3 u-px-5 u-font-bold u-bg-transparent u-rounded-full"
        onClick={onRemove(task.id)}
      >
        X
      </button>

      <h2 className="u-mb-2 u-font-bold">{task.title}</h2>

      <p className="u-mb-2 u-text-xs">Category: {task.category}</p>

      <p
        className={`u-text-xs ${
          taskStatus === 'upcoming'
            ? 'u-text-emerald-600'
            : taskStatus === 'soon'
            ? 'u-text-yellow-500'
            : 'u-text-rose-600'
        }`}
      >
        Due: {task.dueDate.toDateString()}
      </p>
    </div>
  );
};

export default TaskItem;
