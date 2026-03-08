import { useForm } from "react-hook-form";
import FormField from "./FormField";

export default function DynamicForm({ fields, onSubmit, buttonContent }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-lg"
    >
      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          icon={field.icon}
          name={field.name}
          type={field.type}
          register={register}
          error={errors[field.name]}
        />
      ))}

      <button className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700">
        {buttonContent}
      </button>
    </form>
  );
}
