// components/FormField.jsx
export default function FormField({ label, icon: Icon, error, register, name, type, iconProps = {} }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold">{label}</label>

      <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
        {Icon && <Icon {...iconProps} />}

        <input
          type={type}
          {...register(name)}
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
}
