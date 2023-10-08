import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import axios from 'axios';

interface IFormData {
    email: string,
    password: string
}
interface IUsersError {
    email: string,
    password: string
}
const Login = () => {
    const [formData, setFormData] = useState<IFormData>({
        email: "",
        password: "",
    });
    const [userErrors, setUserErrors] = useState<IUsersError>({});

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const errors = {};

        if (!formData.password.trim()) {
            errors.password = "Password yoxdur"
        } else { }

        if (!formData.email.trim()) {
            errors.email = "Email yoxdur"
        }

        setUserErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const login = async () => {
        const { email, password } = formData;
        try {
            const response = await axios.post(
                `http://localhost:4000/api/auth/login`,
                {
                    email,
                    password,
                },
            );
            localStorage.setItem('token', response.data);
            console.log(response, "token")
        } catch (error) {
            console.log(error);
        }
    };


    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            login()
            console.log(formData, "A")
        }
    }

    return (
        <div className='flex justify-center mt-5'>
            <form className='w-96' onSubmit={FormSubmit}>
                <Input
                    value={formData.email}
                    name='email'
                    type="email"
                    onChange={handlerChange}
                    className="my-3" placeholder="Email" showInput={true} />
                <p>{userErrors.email}</p>
                <Input
                    value={formData.password}
                    name='password'
                    onChange={handlerChange}
                    className="my-3" type="password" placeholder="Password" showInput={true} />
                <p>{userErrors.password}</p>

                <Button type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default Login
