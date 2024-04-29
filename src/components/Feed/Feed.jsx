import React, { useEffect, useState } from "react";
import InputOption from "./Input1Option";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscribtonsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post/Post";
import "./style.scss";
import { db } from "../../firbase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
// import { Timestamp } from "firebase/firestore";
import FlipMove from "react-flip-move";

function index() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <>
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>

          <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
            <InputOption
              Icon={SubscribtonsIcon}
              title="Video"
              color="#e7a33e"
            />
            <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
            <InputOption
              Icon={CalendarViewDayIcon}
              title="Write article"
              color="#7fc15e"
            />
          </div>
        </div>

        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>

        {/* <Post
          name="John Depp"
          description="This is a test"
          message="<Message>"
          photoUrl="photoUrl"
        /> */}
      </div>
    </>
  );
}

export default index;
