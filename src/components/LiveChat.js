import React, { useEffect, useState } from 'react'
import ChatMessage from './chatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './Utils/chatSlice'
import { generateRandomCompliment, generateRandomName, generateRandomUsericon } from './helper'
import { LiaLaughBeam } from "react-icons/lia";


const LiveChat = () => {
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    //Api polling
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomCompliment(),
        icon: generateRandomUsericon()
      }))
    }, 2000)
    return () => clearInterval(i);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({
      name: "Kavya Bhat",
      message: userMessage,
      icon: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
    }));
    setUserMessage("");
  };

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <>
      <div className='w-[300px] h-[350px] border border-gray overflow-y-scroll flex flex-col-reverse '>
        {
          chatMessages.map((c) => {
            return <ChatMessage name={c.name} message={c.message} image={c.icon} />
          })
        }
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white flex p-2 gap-2 rounded-b-xl border boder-gray items-center">
            <input
              className="outline-none w-full rounded-full bg-gray-100 text-sm p-2"
              placeholder="Chat..."
              value={userMessage}
              name="userMessage"
              onChange={handleChange}
            />
            <button type="submit" className="bg-none border-none">
              <LiaLaughBeam className="w-10 h-6 cursor-pointer" />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LiveChat
