'use client';

import { useEffect, useState, useRef } from 'react';
import Talk from 'talkjs';

export default function ChatWidget() {
    const chatboxEl = useRef<HTMLDivElement>(null);
    const [talkLoaded, setTalkLoaded] = useState(false);

    useEffect(() => {
        Talk.ready.then(() => setTalkLoaded(true));

        if (talkLoaded && chatboxEl.current) {
            const currentUser = new Talk.User({
                id: '1',
                name: 'Visitor',
                email: 'visitor@example.com',
                photoUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
                welcomeMessage: 'Hello! How can I help you today?',
                role: 'default',
            });

            const supportUser = new Talk.User({
                id: '2',
                name: 'Customer Support',
                email: 'support@yourdomain.com',
                photoUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
                welcomeMessage: 'Hi there! How can I assist you today?',
                role: 'default',
            });

            const session = new Talk.Session({
                appId: 'YOUR_TALKJS_APP_ID', // You'll need to replace this with your TalkJS API key
                me: currentUser,
            });

            const conversation = session.getOrCreateConversation(
                Talk.oneOnOneId(currentUser, supportUser)
            );
            conversation.setParticipant(currentUser);
            conversation.setParticipant(supportUser);

            const chatbox = session.createChatbox();
            chatbox.select(conversation);
            chatbox.mount(chatboxEl.current);

            return () => session.destroy();
        }
    }, [talkLoaded]);

    return (
        <div 
            ref={chatboxEl} 
            style={{
                width: '400px',
                height: '500px',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 50,
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                borderRadius: '10px',
                overflow: 'hidden'
            }}
        />
    );
} 