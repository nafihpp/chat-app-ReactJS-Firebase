import { signOut } from "firebase/auth";
import {
    collection,
    onSnapshot,
    query,
    where,
    doc,
    updateDoc,
} from "firebase/firestore";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase";

function Chatting() {
    const user1 = auth.currentUser.uid;
    const user2 = auth.currentUser.email;
    const [users, setUser] = useState([]);

    useEffect(() => {
        const userRef = collection(db, "users");
        const q = query(userRef, where("id", "not-in", [user1]));
        const getUsers = onSnapshot(q, (querySnapshot) => {
            let users = [];
            querySnapshot.forEach((docu) => {
                users.push(docu.data());
                setUser(users);
            });
        });
        return () => getUsers();
    }, []);
    const Logout = async () => {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
            isOnline: false,
        });
        signOut(auth)
            .then(() => {})
            .catch((error) => {});
    };
    window.addEventListener("beforeunload", (ev) => {
        Logout();
        ev.preventDefault();
    });
    const [search, setSearch] = useState("");
    const handleFilter = (e) => {
        let searched = e.target.value.toLowerCase();
        setSearch(searched);
    };
    const [count, setCount] = useState(0);
    const [chat, setChat] = useState();
    const selectUser = (user) => {
        setChat(user);
        console.log(chat);
        console.log("hai");
    };
    return (
        <TopDiv>
            <MainSection>
                <LeftDiv>
                    <Wrap className="wrapper">
                        <HeadlineTop>
                            Welcome - {user2} <OnlineBarTop></OnlineBarTop>
                        </HeadlineTop>
                        <Searchbar
                            type="text"
                            placeholder="Search People"
                            onChange={handleFilter}
                        />
                        {users
                            .filter((item) => {
                                if (search === "") {
                                    return item;
                                } else if (
                                    item.name.toLowerCase().includes(search)
                                ) {
                                    return item;
                                }
                            })
                            .map((user) => (
                                <ContactsDiv
                                    key={user.id}
                                    user={user}
                                    onClick={() => {
                                        setCount(user.id);
                                    }}
                                >
                                    <ProfileContainer>
                                        <img src={user.url} alt="profile" />
                                    </ProfileContainer>
                                    <WriteSpan>
                                        <Headline>
                                            {user.name}
                                            {user.isOnline ? (
                                                <>
                                                    <p>Online</p>
                                                    <OnlineBar></OnlineBar>
                                                </>
                                            ) : (
                                                <>
                                                    <p>Offline</p>
                                                    <OfflineBar></OfflineBar>
                                                </>
                                            )}
                                        </Headline>
                                    </WriteSpan>
                                    <Spanned
                                        className={
                                            count === user.id ? "dash" : ""
                                        }
                                    ></Spanned>
                                </ContactsDiv>
                            ))}
                    </Wrap>
                </LeftDiv>
                <Foot>
                    <WrapperBottom>
                        <DivRight>
                            <ChatType
                                type="text"
                                placeholder="start chatting now"
                            />
                            <ButtonSend>Send</ButtonSend>
                        </DivRight>
                    </WrapperBottom>
                </Foot>
            </MainSection>
        </TopDiv>
    );
}
const WrapperBottom = styled.div`
    margin-left: 382px;
`;
const Spanned = styled.span`
    width: 5px;
    height: 43px;
    background-color: #000;
    display: none;
    &.dash {
        display: block;
    }
`;
const MiddleDiv = styled.div``;
const HeadlineTop = styled.h5`
    font-size: 20px;
    margin-bottom: 10px;
`;
const Foot = styled.section`
    width: 100%;
    background: grey;
`;
const ChatType = styled.input`
    border-radius: 4px;
    padding: 5px;
    height: 42px;
    width: 90%;
`;
const ButtonSend = styled.a`
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4285f4;
`;
const OfflineBar = styled.div`
    width: 4%;
    height: 10px;
    background: red;
    display: inline-block;
    border-radius: 6px;
`;
const OnlineBarTop = styled.div`
    width: 3%;
    height: 10px;
    background: green;
    display: inline-block;
    border-radius: 8px;
`;
const OnlineBar = styled.div`
    width: 4%;
    height: 10px;
    background: green;
    display: inline-block;
    border-radius: 6px;
`;
const Headline = styled.h5`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    :hover {
        background: lightgrey;
    }
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
    width: 100%;
`;
const LeftDiv = styled.div`
    height: calc(100vh - 115px);
    background: #4285f4;
    width: 25%;
    padding-top: 22px;
`;
const DivRight = styled.div`
    display: flex;
`;
const MainSection = styled.section``;
const Wrap = styled.div``;
const TopDiv = styled.div`
    padding-top: 70px;
`;

export default Chatting;
