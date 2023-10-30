const taskCategories = ['Work', 'Personal', 'School'] as const;

type TaskCategory = (typeof taskCategories)[number];

export type Task = {
  id: number;
  title: string;
  dueDate: Date;
  category: TaskCategory;
};
