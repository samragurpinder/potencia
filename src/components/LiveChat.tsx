'use client';

import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWidget from './ChatWidget';

export default function LiveChat() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(true);
        setIsMinimized(false);
    };

    const handleClose = () => {
        setIsChatOpen(false);
        setIsMinimized(false);
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    return (
        <>
            {!isChatOpen && <ChatButton onClick={toggleChat} />}
            {isChatOpen && !isMinimized && (
                <ChatWidget onClose={handleClose} onMinimize={handleMinimize} />
            )}
            {isChatOpen && isMinimized && (
                <div 
                    className="fixed bottom-20 right-20 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-blue-700 transition-all duration-300"
                    onClick={() => setIsMinimized(false)}
                >
                    <div className="flex items-center space-x-2">
                        <img 
                            src="https://ui-avatars.com/api/?name=Sarah+Wilson&background=0D8ABC&color=fff" 
                            alt="Sarah Wilson" 
                            className="w-8 h-8 rounded-full" 
                        />
                        <div>
                            <p className="font-semibold">Sarah Wilson</p>
                            <p className="text-xs opacity-75">Click to expand</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 