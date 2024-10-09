import React from 'react';
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config'
import { IUser } from '../../../models/IUser';

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is not valid. ex: user@domain.tld"),
    password: yup.string().required("Password is mandatory").min(8,"Password has to be at least 8 characters long"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Password must be the same")
})

interface RegisterFormProps {
  onRegisterSuccess: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    }); 

    const onSubmitForm = async (data: IUser) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            onRegisterSuccess();
        } catch (error) {
            console.error("Registration error:", error);
        }
    }

    return (
        <>
          <h2 className="mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2><br />
          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                    <input id="email" className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" autoComplete="email" {...register('email')} />
                    <p>{errors.email && errors.email.message}</p>
                </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
                <input type="password" id="password" required className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register('password')} />
                <p>{errors.password && errors.password.message}</p>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            <div className="mt-2">
                <input type="password" id="confirmPassword" required className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register('confirmPassword')} />
                <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">

            <div className="text-sm leading-6">
              <a href="#" className="font-semibold text-amber-400 hover:text-amber-600">Forgot password?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-amber-400 shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
    </>
  )
}
