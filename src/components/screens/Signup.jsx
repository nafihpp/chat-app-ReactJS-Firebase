import { React, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const [successModal, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            let result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setSuccess(!successModal);
            setModal(!modal);
            await setDoc(doc(db, "users", result.user.uid), {
                id: result.user.uid,
                name: name,
                email: email,
                password: password,
                isOnline: false,
                AccountCreated: Timestamp.fromDate(new Date()),
            });
        } catch (err) {
            setError(err.message);
            console.log(error);
        }
    };
    return (
        <>
            <Helmet>
                <title>Register Now</title>
            </Helmet>
            <Container>
                <RightContainer>
                    <LoginContainer>
                        <LoginInfo>Start Chatting after Signup</LoginInfo>
                        <p>{error}</p>
                        <Form>
                            <InputContainer>
                                <TextInput
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.currentTarget.value)
                                    }
                                />
                            </InputContainer>
                            <InputContainer>
                                <TextInput
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.currentTarget.value)
                                    }
                                />
                            </InputContainer>
                            <InputContainer>
                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.currentTarget.value)
                                    }
                                />
                            </InputContainer>
                            <LoginButton
                                onClick={() => {
                                    setModal(!modal);
                                }}
                            >
                                Login Now
                            </LoginButton>
                            <ButtonContainer>
                                <SubmitButton onClick={handleSubmit}>
                                    Create an Account
                                </SubmitButton>
                            </ButtonContainer>
                        </Form>
                    </LoginContainer>
                </RightContainer>
            </Container>
            {modal && <Login setModal={setModal} />}
        </>
    );
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    align-items: center;
    background-color: bisque;
`;
const RightContainer = styled.div`
    width: 38%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 70px 70px;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 780px) {
        width: 100%;
        padding: 0px 9px 8px;
    }
    @media all and (max-width: 368px) {
        width: 100%;
        padding: 0px 0px 0px;
    }
`;
const LoginContainer = styled.div`
    border-bottom: 10px solid yellowgreen;
    width: 100%;
    height: 514px;
    color: #fff;
    background: black;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
`;
const LoginInfo = styled.p`
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (max-width: 640px) {
        font-size: 25px;
    }
    @media all and (max-width: 480) {
        font-size: 19px;
    }
    @media all and (max-width: 360) {
        font-size: 21px;
    }
`;
const Form = styled.form`
    width: 100%;
    display: block;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
`;
const TextInput = styled.input`
    padding: 15px 25px 15px 30px;
    width: 95%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    @media all and (max-width: 640px) {
        width: 95%;
    }
`;
const LoginButton = styled.a`
    display: flex;
    justify-content: end;
    margin-bottom: 25px;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`;
const SubmitButton = styled.button`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    font-size: 20px;
    border: 1px solid #fff;
    cursor: pointer;
    @media all and (max-width: 640px) {
        padding: 14px 13px;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
