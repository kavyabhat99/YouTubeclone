import React from 'react'

const ChatMessage = ({name,message,image}) => {
    return (
        <div className='flex items-center'>
            <img className='mt-1 ml-2 h-7 rounded-full' alt='user-icon' src={image} />
            <span className='font-semibold text-sm text-gray-400 px-2'>{name}</span>
            <span className='text-sm'>{message}</span>
        </div>
    )
}

export default ChatMessage
