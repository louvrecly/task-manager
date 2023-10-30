import { useMemo } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import {
  ALL_CATEGORIES,
  Task,
  TaskFormValues,
  convertFormValuesToTask,
  convertTaskToFormValues,
} from '../../types/task';

interface TaskFormProps {
  maxId: number;
  onSubmitTask: (task: Task) => void;
}

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
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="u-mb-3 u-flex u-justify-between u-items-center u-gap-3">
            <label htmlFor="title">Title</label>

            <Field
              id="title"
              className="u-py-1 u-px-3 u-flex-1 u-rounded-full"
              name="title"
              placeholder="Insert title here"
            />
          </div>

          <div className="u-mb-3 u-flex u-justify-between u-items-center u-gap-3">
            <label htmlFor="due-date">Due Date</label>

            <Field
              id="due-date"
              className="u-py-1 u-px-3 u-flex-1 u-rounded-full"
              name="dueDate"
              type="date"
            />
          </div>

          <div className="u-mb-3 u-flex u-justify-between u-items-center u-gap-3">
            <label htmlFor="category">Category</label>

            <Field
              id="category"
              className="u-py-1 u-px-3 u-flex-1 u-rounded-full"
              name="category"
              as="select"
            >
              {ALL_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
          </div>

          <button type="submit" className="u-w-full">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
