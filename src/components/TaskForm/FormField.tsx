import { ErrorMessage, Field, FieldAttributes } from 'formik';

type FormFieldProps = FieldAttributes<unknown> & {
  label: string;
};

const FormField = ({ id, name, label, ...props }: FormFieldProps) => {
  return (
    <div className="u-relative u-mb-3">
      <div className="u-flex u-justify-between u-items-center u-gap-3">
        <label htmlFor={id}>{label}</label>

        <Field
          id={id}
          className="u-py-1 u-px-3 u-flex-1 u-rounded-full"
          name={name}
          {...props}
        />
      </div>

      <div className="u-absolute u-top-full u-inset-x-0 u-py-2 u-px-3 u-bg-zinc-950/70 u-text-red-500 u-text-sm u-rounded-lg u-z-20">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default FormField;
