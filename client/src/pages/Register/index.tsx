import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

interface IFormData {
    username: string,
    email: string,
    password: string
}
interface IUsersError {
    username: string,
    email: string,
    password: string
}
const Register = () => {
    const [formData, setFormData] = useState<IFormData>({
        username: "",
        email: "",
        password: ""
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

        if (!formData.username.trim()) {
            errors.username = "Username yoxdur"
        }

        if (!formData.password.trim()) {
            errors.password = "Password yoxdur"
        } else { }

        if (!formData.email.trim()) {
            errors.email = "Email yoxdur"
        }

        setUserErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData, "A")
        }
    }
    return (
        <div className='flex justify-center mt-5'>
            <form className='w-96' onSubmit={FormSubmit}>
                <Input
                    value={formData.username}
                    name='username'
                    onChange={handlerChange}
                    className="my-3" type="text" placeholder="Username" showInput={true} />
                <p>{userErrors.username}</p>
                <Input
                    value={formData.email}
                    name='email'
                    onChange={handlerChange}
                    className="my-3" type="email" placeholder="Email" showInput={true} />
                <p>{userErrors.email}</p>
                <Input
                    value={formData.password}
                    name='password'
                    onChange={handlerChange}
                    className="my-3" type="password" placeholder="Password" showInput={true} />
                <p>{userErrors.password}</p>

                <Button type='submit'>Register</Button>
            </form>
        </div>
    )
}

export default Register
