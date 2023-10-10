import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Api } from "../../api/Api";

interface IFormData {
  username: string;
  email: string;
  password: string;
}
interface IUsersError {
  username: string;
  email: string;
  password: string;
}
const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [userErrors, setUserErrors] = useState<IUsersError>({});

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username yoxdur";
    }

    if (!formData.password.trim()) {
      errors.password = "Password yoxdur";
    } else {
    }

    if (!formData.email.trim()) {
      errors.email = "Email yoxdur";
    }

    setUserErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const register = async () => {
    const { username, email, password } = formData;
    try {
      const response = await Api().post(`/api/auth/register`, {
        username,
        email,
        password,
      });
      toast({
        description: response,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      register();
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <form className="w-96" onSubmit={FormSubmit}>
        <Input
          value={formData.username}
          name="username"
          onChange={handlerChange}
          className="my-3"
          type="text"
          placeholder="Username"
        />
        <p>{userErrors.username}</p>
        <Input
          value={formData.email}
          name="email"
          onChange={handlerChange}
          className="my-3"
          type="email"
          placeholder="Email"
        />
        <p>{userErrors.email}</p>
        <Input
          value={formData.password}
          name="password"
          onChange={handlerChange}
          className="my-3"
          type="password"
          placeholder="Password"
        />
        <p>{userErrors.password}</p>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
