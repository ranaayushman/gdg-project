// components/FormInputField.tsx
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GeneralInfoFormData } from "@/schemas/validationSchema";

interface FormInputFieldProps {
  control: any;
  name: keyof GeneralInfoFormData;
  label: string;
  placeholder: string;
  type?: string;
}

export const FormInputField = ({ control, name, label, placeholder, type = "text" }: FormInputFieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label} *</FormLabel>
        <FormControl>
          <Input {...field} type={type} placeholder={placeholder} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);