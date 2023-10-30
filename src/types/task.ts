export const ALL_CATEGORIES = ['Work', 'Personal', 'School'] as const;

export type Category = (typeof ALL_CATEGORIES)[number];

export type Task = {
  id: number;
  title: string;
  dueDate: Date;
  category: Category;
};

export interface TaskFormValues {
  id: number;
  title: string;
  dueDate: string;
  category: Category;
}

export function formatDateString(date?: Date) {
  return (date ?? new Date()).toISOString().split('T')[0];
}

export function convertTaskToFormValues(task: Task): TaskFormValues {
  return {
    ...task,
    dueDate: formatDateString(task.dueDate),
  };
}

export function convertFormValuesToTask(formValues: TaskFormValues): Task {
  return {
    ...formValues,
    dueDate: new Date(formValues.dueDate),
  };
}

export function createEmptyTask(maxId: number): Task {
  return {
    id: maxId + 1,
    title: '',
    category: 'Personal',
    dueDate: new Date(),
  };
}
