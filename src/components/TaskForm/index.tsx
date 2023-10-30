import { useMemo } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import {
  ALL_CATEGORIES,
  Task,
  TaskFormValues,
  convertFormValuesToTask,
  convertTaskToFormValues,
  formatDateString,
} from '../../types/task';
import { number, object, string } from 'yup';
import FormField from './FormField';

interface TaskFormProps {
  maxId: number;
  onSubmitTask: (task: Task) => void;
}

const taskFormValuesSchema = object<TaskFormValues>({
  id: number().required().positive().integer(),
  title: string().required('Required'),
  dueDate: string().default(() => formatDateString()),
  category: string()
    .oneOf(ALL_CATEGORIES)
    .default(() => 'Personal'),
});

const TaskForm = ({ maxId, onSubmitTask }: TaskFormProps) => {
  const initialValues: TaskFormValues = useMemo(
    () =>
      convertTaskToFormValues({
        id: maxId + 1,
        title: '',
        category: 'Personal',
        dueDate: new Date(),
      }),
    [maxId],
  );

  const onSubmit = (
    values: TaskFormValues,
    { setSubmitting }: FormikHelpers<TaskFormValues>,
  ) => {
    const task = convertFormValuesToTask(values);
    onSubmitTask(task);
    setSubmitting(false);
  };

  return (
    <div className="u-pt-20 u-pb-3 u-px-5 u-bg-zinc-950/70 u-flex-1">
      <Formik
        initialValues={initialValues}
        validationSchema={taskFormValuesSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormField
            id="title"
            name="title"
            label="Title"
            placeholder="New Task"
          />

          <FormField
            id="due-date"
            name="dueDate"
            label="Due Date"
            type="date"
          />

          <FormField id="category" name="category" label="Category" as="select">
            {ALL_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FormField>

          <button type="submit" className="u-w-full">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;