/* eslint-disable no-throw-literal */
import React from "react";
import { useRef, useState } from "react";
import axios from "axios";

const Register = () => {
  const [message, setMessage] = useState("");
  let nim = useRef();
  let username = useRef();
  let email = useRef();
  let password = useRef();

  // let onRegisterObsolete = async () => {
  //   try {
  //     let inputFirstName = firstName.current.value;
  //     let inputLastName = lastName.current.value;
  //     let inputEmail = email.current.value;
  //     let inputPassword = password.current.value;
  //     if (!inputFirstName || !inputLastName || !inputEmail || !inputPassword)
  //       throw { message: "Data Not Complete!" };

  //     await axios.post("http://localhost:5000/users", {
  //       firstName: inputFirstName,
  //       lastName: inputLastName,
  //       email: inputEmail,
  //       password: inputPassword,
  //     });
  //     alert("Register Success!");
  //     setMessage("");
  //   } catch (error) {
  //     setMessage(error.message);
  //     console.log(error.message);
  //   }
  // };

  let onRegister = async () => {
    try {
      let inputNim = nim.current.value;
      let inputUsername = username.current.value;
      let inputEmail = email.current.value;
      let inputPassword = password.current.value;

      let response = await axios.get(
        `http://localhost:5000/users?email=${inputEmail}`
      );

      if (!inputNim || !inputUsername || !inputEmail || !inputPassword)
        throw { message: "Data Not Complete!" };
      else if (
        !inputNim ||
        !inputUsername ||
        !inputEmail ||
        !inputPassword ||
        response.data.length !== 0
      )
        throw { message: "Email already added" };

      await axios.post("http://localhost:5000/users", {
        firstName: inputNim,
        lastName: inputUsername,
        email: inputEmail,
        password: inputPassword,
      });
      nim.current.value = "";
      username.current.value = "";
      email.current.value = "";
      password.current.value = "";

      alert("Register Success!");
      setMessage("");
    } catch (error) {
      setMessage(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center text-center pt-14 ">
      <div>
        <div className="font-bold pb-10 text-3xl">Create an account</div>
        <div className="flex text-center w-[500px] mx-auto pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo
          enim officia magni, modi tenetur.
        </div>
        <div className="border rounded-[12px] mx-auto w-[500px] shadow-xl drop-shadow-md pt-8 ">
          <div className="pt-3 md:pt-5">
            <fieldset>
              <div className="pb-4 text-xl">Fill your data here</div>
              <div>
                <div>
                  <input
                    ref={nim}
                    className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-lime-500  w-[300px] rounded-md sm:text-sm focus:ring-1 justify-center"
                    placeholder="NIM"
                    id="nim"
                  ></input>
                </div>
                <div>
                  <input
                    ref={username}
                    className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-lime-500  w-[300px] rounded-md sm:text-sm focus:ring-1 justify-center"
                    placeholder="Username"
                    id="username"
                  ></input>
                </div>
                <div>
                  <input
                    type="email"
                    ref={email}
                    className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-lime-500  w-[300px] rounded-md sm:text-sm focus:ring-1 justify-center"
                    placeholder="Email"
                    id="email"
                  ></input>
                </div>
                <div>
                  <input
                    ref={password}
                    type="password"
                    className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-lime-500  w-[300px] rounded-md sm:text-sm focus:ring-1 justify-center"
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <div className="text-red-500 font-bold my-4">{message}</div>
            <button
              onClick={onRegister}
              className="mb-10 bg-green-800 text-white px-5 py-3 rounded-full border shadow-md drop-shadow-lg font-lg hover:bg-green-900"
            >
              Create Account
            </button>
            {/* <button
                onClick={(e) => onRegister(e)}
                className="mb-10 bg-green-800 text-white px-5 py-3 rounded-full border shadow-md drop-shadow-lg font-lg hover:bg-green-900"
              >
                Create Account
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
