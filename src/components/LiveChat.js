import React, { useEffect, useState } from "react";
import LiveChatMsg from "./LiveChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [LiveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(15),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="my-4">
      <div className="px-4 border rounded-t-lg border-gray-400">
        <h1 className="text-xl text-bold py-2">Top Chat</h1>
        <hr />
      </div>
      <div className=" px-4 border-gray-400 border-2  w-96 h-[400px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <LiveChatMsg
            key={i}
            name={c.name}
            message={c.message}
            className="overflow-y-scroll flex flex-col-reverse"
          />
        ))}
      </div>
      <form
        className="border-gray-400 border-2 rounded-b-lg w-96 p-1"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted " + LiveMsg);
          dispatch(addMessage({
            name : "vs",
            message : LiveMsg
          }))
          setLiveMsg("")
        }}
      >
        <input
          type="text"
          value={LiveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
          className="w-80 px-2 py-1 border border-gray-900 rounded-bl-md"
        />
        <button className="bg-green-500 text-white font-semibold px-2 py-1 rounded-br-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
