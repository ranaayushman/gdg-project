// components/FormSelectField.tsx
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GeneralInfoFormData } from "@/schemas/validationSchema";

interface FormSelectFieldProps {
  control: any;
  name: keyof GeneralInfoFormData;
  label: string;
  options: readonly string[];
}

export const FormSelectField = ({ control, name, label, options }: FormSelectFieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label} *</FormLabel>
        <Select onValueChange={field.onChange} value={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={`Select your ${label.toLowerCase()}`} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);