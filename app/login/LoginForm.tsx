'use client';
import LoadingIcon from '@/ui/LoadingIcon';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { FC } from 'react';

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginFormProps {
  onSubmit: (formValues: LoginFormValues) => void | Promise<void>;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => (
  <Formik<LoginFormValues>
    {...{ onSubmit }}
    initialValues={{ email: '', password: '', rememberMe: false }}
  >
    {({ isSubmitting }) => (
      <Form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="email"
          >
            Email address
          </label>
          <Field
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="email"
            required
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <Field
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="password"
            name="password"
            required
            type="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <input
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
            />
            <label
              className="block text-sm leading-6 text-gray-900"
              htmlFor="rememberMe"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm leading-6">
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              href="#"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div>
          <button
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-75"
            disabled={isSubmitting}
            type="submit"
          >
            <LoadingIcon
              className={clsx('w-4 h-4 mr-2 -ml-6 animate-spin', {
                hidden: !isSubmitting,
              })}
            />
            Sign in
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
