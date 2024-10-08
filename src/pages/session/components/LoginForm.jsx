import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().required("Email is required").
    email("Email is not valid. ex: user@domain.tld"),
    password: yup.string().required("Password is mandatory").min(8,"Password has to be at least 8 characters long")
})

export const LoginForm = () => {
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    }); 

    const navigate = useNavigate();

    const onSubmitForm = (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //console.log(user); //Para ver credenciales y probar.
            navigate('/')
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
    }

  return (
    <>
        <h2>Login Form</h2>
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

            <button type="submit">Login</button>
        </form>
    </>
  )
}
