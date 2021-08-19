import React from 'react'


const BounceProgressBubble = () => {
    return (
        <div className="mt-2 flex items-center justify-center space-x-2 animate-bounce animate-pulse">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
        </div>
    )
}

export default BounceProgressBubble
