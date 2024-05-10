"use client";
import { LoginData } from "@/utils/FetchData";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
const { object, string } = z;

const validationSchema = object({
  email: string().email("Invalid email").min(5),
  password: string().min(4, "Password must be at least 4 characters"),
});

type LoginFormValues = z.infer<typeof validationSchema>;

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<z.ZodError | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      validationSchema.parse(values);
      // Here you can add your login logic
      console.log("Form submitted with values:", values);
      LoginData(values.email, values.password, router);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-md w-full space-y-8 border border-violet-800 p-5 bg-gray-900 pb-8 rounded">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm py-2">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                className="w-full py-2 rounded-sm border border-violet-800 ps-4 bg-gray-800 appearance-none outline-none focus:rounded-none "
                placeholder="Email address"
              />
              {errors?.errors.find((err) => err.path[0] === "email") && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {
                    errors?.errors.find((err) => err.path[0] === "email")
                      ?.message
                  }
                </p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full py-2 rounded-sm border border-violet-800 ps-4 bg-gray-800 appearance-none outline-none focus:rounded-none "
                  placeholder="Password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye />
                  ) : (
                   <EyeOff />
                  )}
                </div>
              </div>
              {errors?.errors.find((err) => err.path[0] === "password") && (
                <p className="mt-2 text-sm text-red-600" id="password-error">
                  {
                    errors?.errors.find((err) => err.path[0] === "password")
                      ?.message
                  }
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4  border-violet-800 accent-violet-800 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
