// lib/validationSchema.ts
import { z } from "zod";

export const generalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .endsWith(".com", "Please use your college email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  rollNumber: z.string().min(1, "Roll number is required"),
  branch: z.enum([
    "CSE Main",
    "CSE AI/ML",
    "CSE DS",
    "CSE CS",
    "Information Technology",
    "Electronics and Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Food Technology",
    "Bio Technology",
    "Agriculture Engineering"
  ], { 
    required_error: "Please select your branch" 
  }),
  year: z.enum(["1st Year", "2nd Year", "3rd Year", "4th Year"], {
    required_error: "Please select your year"
  }),
  selectedPositions: z.array(z.string()).min(1, "Please select at least one position")
});

export type GeneralInfoFormData = z.infer<typeof generalInfoSchema>;