'use client';

import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWidget from './ChatWidget';

export default function LiveChat() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <>
            <ChatButton onClick={toggleChat} />
            {isChatOpen && <ChatWidget />}
        </>
    );
} 