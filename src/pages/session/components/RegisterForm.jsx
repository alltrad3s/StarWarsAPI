import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config';

const schema = yup.object().shape({
    email: yup.string().required("Email is required").
    email("Email is not valid. ex: user@domain.tld"),
    password: yup.string().required("Password is mandatory").min(8,"Password has to be at least 8 characters long"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null], "Password must be the same")
})

export const RegisterForm = () => {
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    }); 

    const onSubmitForm = (data) => {
        console.log(data);

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
    }

  return (
    <>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <section>
                <label>Email</label>
                <input type="email" id="email" placeholder="Email for register" {...register('email')} />
                <p>{errors.email && errors.email.message}</p>
            </section>

            <section>
                <label>Password</label>
                <input type="password" id="password" placeholder="Password for register" {...register('password')} />
                <p>{errors.password && errors.password.message}</p>
            </section>

            <section>
                <label>Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Repeat your register" {...register('confirmPassword')} />
                <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            </section> 

            <button type="submit">Register</button>
        </form>
    </>
  )
}
