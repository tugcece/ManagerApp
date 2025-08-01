import { BaseInputProps } from "../../types/inputs/BaseInputProps";
import FormFieldWrapper from "../layout/FormFieldWrapper";

export default function NumberInput({
  name,
  label,
  register,
  required,
  className,
  error,
  placeholder,
}: BaseInputProps) {
  return (
    <FormFieldWrapper label={label} required={required} error={error}>
      <input
        type="number"
        {...register(name, { valueAsNumber: true })}
        id={name}
        step="0.01"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-light_fourth dark:bg-secondary dark:border-black ${className}`}
      />
    </FormFieldWrapper>
  );
}