import { Input, Text, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { AuthBtn } from "./AuthBtn";


export const LoginForm = () => {

    const [datas, setdata] = useState({
        email: "",
        password: "",
      });
    const handleChange = (e) => {
        setdata({ ...datas, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://mock-server-app-2-88b4.onrender.com/user?email=${datas.email}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res[0].password == datas.password) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              });
          
            // data({ type: "SUCCESS", payload: res });
          } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              });
          
          }
        })
        .catch((err) => {
          console.log(err);
        });
      };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <VStack
                    w={['95%', '95%', '85%', '85%', '85%', '85%']}
                    mx={'auto'}
                    gap={'8px'}
                >

                    <Input
                        onChange={handleChange}
                        name="email"
                        type={'email'}
                        placeholder="Email address"
                    />

                    <Input
                        onChange={handleChange}
                        name="password"
                        type={'password'}
                        placeholder="Password"
                    />
<br/>

                    <AuthBtn value={'LOGIN'} />
                    
                </VStack>
            </form>
        </>
    );
};