import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { CgOpenCollective } from "react-icons/cg";

function Chatting() {
    const user1 = auth.currentUser.uid;
    // let getDetails = async () => {
    //     await getDoc(doc(db, "users", [user1]));
    // };
    // getDetails();
    // const [showUser, setShowUser] = useState([]);
    // useEffect(() => {
    //     const usersRef = collection(db, "users");
    //     const q = query(usersRef, where("uid", "not-in", [user1]));
    //     const renderuser = onSnapshot(q, (querySnapshot) => {
    //         querySnapshot.forEach((doc) => {});
    //     });
    //     return () => renderuser();
    // }, []);
    // useEffect(() => {
    //     const usersRef = collection(db, "users");
    //     const q = query(usersRef, where("uid", "not-in", [user1]));
    //     console.log(q);
    //     const renderuser = onSnapshot(q, (querySnapshot) => {
    //         let renderusers = [];
    //         querySnapshot.forEach((doc) => {
    //             renderusers.push(doc.data());
    //         });
    //         setShowUser(renderusers);
    //         console.log(showUser);
    //     });
    //     return () => renderuser();
    // }, []);
    // console.log(showUser);

    const [search, setSearch] = useState([]);
    const handleFilter = (e) => {
        var searched = e.target.value.toLowerCase();
        setSearch(searched);
        console.log(search);
    };
    return (
        <TopDiv>
            <Wrap className="wrapper">
                <MainSection>
                    <LeftDiv>
                        <Searchbar
                            type="text"
                            placeholder="Search People"
                            onChange={(e) => handleFilter}
                        />
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                        <ContactsDiv>
                            <ProfileContainer>
                                <img
                                    src={require("../../assets/main_nafi.png")}
                                    alt="profile"
                                />
                            </ProfileContainer>
                            <WriteSpan>
                                <Headline>
                                    {user1} <OnlineBar></OnlineBar>
                                </Headline>
                            </WriteSpan>
                        </ContactsDiv>
                    </LeftDiv>
                    <DivRight></DivRight>
                </MainSection>
            </Wrap>
        </TopDiv>
    );
}
const OnlineBar = styled.div`
    width: 3%;
    height: 10px;
    background: red;
    display: inline-block;
    margin-left: 5px;
`;
const Headline = styled.h5`
    display: flex;
    align-items: center;
`;
const ContactsDiv = styled.a`
    cursor: pointer;
    margin-top: 13px;
    z-index: 200;
    background: white;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
`;
const ProfileContainer = styled.div`
    width: 16%;
    margin-right: 25px;
`;
const WriteSpan = styled.span`
    width: 90%;
`;
const Searchbar = styled.input`
    border-radius: 4px;
    padding: 5px;
    width: 96%;
`;
const LeftDiv = styled.div`
    overflow: scroll;
    max-height: 500px;
`;
const DivRight = styled.div``;
const MainSection = styled.section`
    width: 100%;
`;
const Wrap = styled.div``;
const TopDiv = styled.div`
    height: calc(100vh - 100px);
    padding-top: 100px;
    background: #4285f4;
    width: 25%;
`;

export default Chatting;
