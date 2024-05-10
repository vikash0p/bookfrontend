"use client";
import { RegisterApi } from "@/utils/FetchData";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof schema>;

const RegisterForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      RegisterApi(values.name, values.email, values.password, router);
      schema.parse(values);
      setValues({
        name:"",
        email:"",
        password:"",
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="container mx-auto mt-10  min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto   border border-violet-800 bg-gray-900 text-white  rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div>
          <h2 className="my-6 text-center text-3xl font-extrabold ">
            Sign in to your account
          </h2>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`form-input ${
              errors.name ? "border-red-500" : ""
            }w-full py-2 border border-violet-400  bg-gray-800 ps-3`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`form-input ${
              errors.email ? "border-red-500" : ""
            } w-full py-2 border border-violet-400 ps-3 bg-gray-800  `}
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={`form-input ${
              errors.password ? "border-red-500" : ""
            } w-full py-2 border border-violet-400 ps-3 bg-gray-800`}
            placeholder="Your Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-violet-800 w-full   text-white font-bold py-2 hover:bg-violet-600 text-xl px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
