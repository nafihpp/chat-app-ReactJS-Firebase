import { signOut } from "firebase/auth";
import {
    collection,
    onSnapshot,
    query,
    where,
    doc,
    updateDoc,
    orderBy,
    QuerySnapshot,
    Timestamp,
} from "firebase/firestore";
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageForm from "./MessageForm";
import MessageBox from "./MessageBox";

function Chatting() {
    const user1 = auth.currentUser.uid;
    const usercurrent = auth.currentUser;
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

    // window.addEventListener("beforeunload", (ev) => {
    //     Logout();
    //     ev.preventDefault();
    // });
    const [search, setSearch] = useState("");
    const handleFilter = (e) => {
        let searched = e.target.value.toLowerCase();
        setSearch(searched);
    };
    const [count, setCount] = useState(0);
    const [chat, setChat] = useState([]);
    const selectUser = (user) => {
        setChat(user);
        const id =
            chat > usercurrent
                ? `${chat + usercurrent}`
                : `${usercurrent + chat}`;
        const msgsRef = collection(db, "messages", id, "chat");

        onSnapshot(msgsRef, (querySnapshot) => {
            let msgs = [];
            querySnapshot.forEach((docu) => {
                msgs.push(docu.data());
            });
        });
    };
    let onlineuser = [];
    const [current, setCurrent] = useState("");
    const notify = () => {
        const userRef = collection(db, "users");
        const f = query(userRef, where("id", "in", [user1]));
        onSnapshot(f, (currented) => {
            currented.forEach((curren) => {
                setCurrent(curren.data());
            });
        });
        users.map((element) => {
            if (element.isOnline) {
                onlineuser.push(element);
            }
        });
    };
    notify();
    return (
        <>
            <MainSection>
                <LeftDiv>
                    <Wrap className="wrapper">
                        <HeadlineTop>
                            Welcome Mr {current.name}
                            <OnlineBarTop></OnlineBarTop>
                            <br />
                            <Middle>{chat.name}</Middle>
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
                                        selectUser(user);
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
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                    <Spanned
                                        className={
                                            count === user.id ? "dash" : ""
                                        }
                                    ></Spanned>
                                </ContactsDiv>
                            ))}
                    </Wrap>
                </LeftDiv>
                <MessageDiv>
                    <MessageForm chat={chat} setChat={setChat} />
                </MessageDiv>
            </MainSection>
        </>
    );
}
const MessageDiv = styled.div`
    width: 60%;
    position: relative;
`;
const Middle = styled.div``;
const Spanned = styled.span`
    width: 5px;
    height: 43px;
    background-color: #000;
    display: none;
    &.dash {
        display: block;
    }
`;

const HeadlineTop = styled.h5`
    font-size: 20px;
    margin-bottom: 10px;
`;
const OfflineBar = styled.div`
    width: 3%;
    height: 10px;
    background: red;
    display: inline-block;
    border-radius: 6px;
`;
const OnlineBarTop = styled.div`
    width: 2%;
    height: 8px;
    background: green;
    display: inline-block;
    border-radius: 8px;
    margin-left: 4px;
`;
const OnlineBar = styled.div`
    width: 3%;
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
    width: 30%;
    background: #4285f4;
    padding-top: 22px;
    height: calc(100vh - 100px);
`;
const MainSection = styled.section`
    padding-top: 70px;
    display: flex;
`;
const Wrap = styled.div``;

export default Chatting;
