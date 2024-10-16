import { Input, Select, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthBtn } from "./AuthBtn";

export const SignupForm = () => {

    const initState = { firstName: "", lastName: "", email: "", password: "", gender: "", dateOfBirth: "" };

    const [form, setForm] = useState(initState);
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://mock-server-app-2-88b4.onrender.com/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        }).then((res) => res.json())
            .then((Res) => console.log(Res))
            .catch((err) => console.log(err))
            navigate("/login")
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <VStack
                    w={['95%', '95%', '85%', '85%', '85%', '85%']}
                    mx={'auto'}
                    gap={'7px'}
                >

                    <Input
                        name="email"
                        onChange={handleChange}
                        type={'email'}
                        placeholder="Email address"
                    />

                    <Input
                        name="password"
                        onChange={handleChange}
                        type={'password'}
                        placeholder="Password"
                    />

                    <Input
                        name="firstName"
                        type={'text'}
                        placeholder="First Name"
                    />

                    <Input
                        name="lastName"
                        type={'text'}
                        placeholder="Last Name"
                    />

                    <Select name="gender"
                        placeholder='Choose Gender'>
                        <option>Male</option>
                        <option>Female</option>
                    </Select>

                    <Input
                        name="dateOfBirth"
                        type={'date'}
                    />

                    <Link to={"/auth"}><AuthBtn value={'JOIN US'} /></Link>

                </VStack>
            </form>
        </>
    );
};