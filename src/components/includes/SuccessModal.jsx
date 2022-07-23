import { React, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { updateDoc } from "firebase/firestore/lite";
import { doc, Timestamp } from "firebase/firestore";

export default function SuccessModal({ SuccessModal, setSuccess, error }) {
    return (
        <>
            <MainContainer>
                <Wrapper>
                    <Container>
                        <RightContainer>
                            {SuccessModal && (
                                <LoginContainer>
                                    <LoginHeading>
                                        Successful tick!
                                    </LoginHeading>
                                    <LoginInfo>
                                        you're account has been created
                                    </LoginInfo>
                                    <ButtonContainer>
                                        <SubmitButton
                                            onClick={() => {
                                                setSuccess(false);
                                            }}
                                        >
                                            Let's Go
                                        </SubmitButton>
                                    </ButtonContainer>
                                </LoginContainer>
                            )}
                            {error && (
                                <LoginContainer>
                                    <LoginHeading>Unsuccessful!</LoginHeading>
                                    <LoginInfo>oop's </LoginInfo>
                                    <ButtonContainer>
                                        <SubmitButton
                                            onClick={() => {
                                                setSuccess(false);
                                            }}
                                        >
                                            Let's Go
                                        </SubmitButton>
                                    </ButtonContainer>
                                </LoginContainer>
                            )}
                        </RightContainer>
                    </Container>
                </Wrapper>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    background: blur(2px);
    z-index: 100;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Container = styled.div``;
const RightContainer = styled.div`
    border-radius: 20px;
    padding: 30px;
    color: #000;
    width: 27%;
    height: 233px;
    margin: 0 auto;
    background: #fff;
    @media all and (max-width: 1080px) {
        width: 80%;
        padding: 0 55px 55px;
    }
`;
const LoginContainer = styled.div`
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (max-width: 640px) {
        font-size: 22px;
    }
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 93%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    border: 1px solid black;
    outline: none;
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const ForgotButton = styled.a`
    margin-bottom: 25px;
    font-size: 15px;
    text-decoration: none;
    color: red;
    cursor: pointer;
    font-weight: 550;
`;
const SubmitButton = styled.a`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid;
    @media all and (max-width: 640px) {
        padding: 6px 24px;
        font-size: 13px;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
