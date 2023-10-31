export const ALL_CATEGORY_KEYS = ['personal', 'school', 'work'] as const;

type CategoryKey = (typeof ALL_CATEGORY_KEYS)[number];

export type Category = {
  key: CategoryKey;
  title: string;
  emoji: string;
};

const CATEGORIES_MAP: Record<CategoryKey, Category> = {
  personal: { key: 'personal', title: 'Personal', emoji: '👟' },
  school: { key: 'school', title: 'School', emoji: '🎓' },
  work: { key: 'work', title: 'Work', emoji: '💼' },
};

export const ALL_CATEGORIES = ALL_CATEGORY_KEYS.map(
  (categoryKey) => CATEGORIES_MAP[categoryKey],
);

export type TaskStatus = 'upcoming' | 'soon' | 'due';

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
  category: CategoryKey;
}

export function formatDateString(date?: Date) {
  return (date ?? new Date()).toISOString().split('T')[0];
}

export function convertTaskToFormValues(task: Task): TaskFormValues {
  return {
    ...task,
    dueDate: formatDateString(task.dueDate),
    category: task.category.key,
  };
}

export function convertFormValuesToTask(formValues: TaskFormValues): Task {
  return {
    ...formValues,
    dueDate: new Date(formValues.dueDate),
    category: CATEGORIES_MAP[formValues.category],
  };
}

export function createEmptyTask(maxId: number): Task {
  return {
    id: maxId + 1,
    title: '',
    category: CATEGORIES_MAP.personal,
    dueDate: new Date(),
  };
}
