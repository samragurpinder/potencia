'use client';

import { useState, useRef, useEffect } from 'react';
import { PaperClipIcon, PaperAirplaneIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'support';
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
    attachments?: string[];
}

interface Agent {
    name: string;
    role: string;
    avatar: string;
    status: 'online' | 'offline' | 'away';
    lastSeen?: string;
}

interface ChatWidgetProps {
    onClose: () => void;
    onMinimize: () => void;
}

export default function ChatWidget({ onClose, onMinimize }: ChatWidgetProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! Welcome to Potencia Academy. How can I assist you today?",
            sender: 'support',
            timestamp: new Date().toLocaleTimeString(),
            status: 'read'
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showAttachMenu, setShowAttachMenu] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

    const agent: Agent = {
        name: 'Sarah Wilson',
        role: 'Academic Advisor',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Wilson&background=0D8ABC&color=fff',
        status: 'online',
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleTyping = () => {
        setIsTyping(true);
        if (typingTimeout) clearTimeout(typingTimeout);
        
        const timeout = setTimeout(() => {
            setIsTyping(false);
        }, 1000);
        
        setTypingTimeout(timeout);
    };

    const simulateFileUpload = () => {
        const fileTypes = ['PDF Document', 'Course Brochure', 'Application Form', 'Study Material'];
        const randomFile = fileTypes[Math.floor(Math.random() * fileTypes.length)];
        
        const userMessage: Message = {
            id: messages.length + 1,
            text: `Attached: ${randomFile}`,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString(),
            status: 'sent',
            attachments: [randomFile]
        };
        
        setMessages(prev => [...prev, userMessage]);
        simulateResponse();
    };

    const handleSend = () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString(),
            status: 'sent'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        simulateResponse();
    };

    const simulateResponse = () => {
        setIsTyping(true);
        
        setTimeout(() => {
            setIsTyping(false);
            
            const responses = [
                "I understand your interest. Let me help you with detailed information about our courses.",
                "That's a great question! Our expert faculty members specialize in this area.",
                "I can help you with the admission process. Would you like to know about our upcoming batches?",
                "We offer comprehensive study materials and personalized attention to each student.",
                "Let me connect you with our academic counselor for more specific guidance."
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            const supportMessage: Message = {
                id: messages.length + 2,
                text: randomResponse,
                sender: 'support',
                timestamp: new Date().toLocaleTimeString(),
                status: 'read'
            };
            
            setMessages(prev => [...prev, supportMessage]);
        }, 2000);
    };

    return (
        <div className="bg-white text-black w-[400px] h-[600px] fixed bottom-20 right-20 z-50 rounded-lg shadow-xl flex flex-col">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <img src={agent.avatar} alt={agent.name} className="w-10 h-10 rounded-full" />
                            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                                agent.status === 'online' ? 'bg-green-400' :
                                agent.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                            } border-2 border-white`}></div>
                        </div>
                        <div>
                            <h3 className="font-semibold">{agent.name}</h3>
                            <p className="text-sm opacity-75">{agent.role}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button onClick={onMinimize} className="p-1 hover:bg-blue-700 rounded">
                            <ChevronDownIcon className="h-5 w-5" />
                        </button>
                        <button onClick={onClose} className="p-1 hover:bg-blue-700 rounded">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                                message.sender === 'user'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-black'
                            }`}
                        >
                            {message.attachments && (
                                <div className="mb-2 p-2 bg-opacity-10 bg-white rounded">
                                    <div className="flex items-center space-x-2">
                                        <PaperClipIcon className="h-4 w-4" />
                                        <span className="text-sm">{message.attachments[0]}</span>
                                    </div>
                                </div>
                            )}
                            <p>{message.text}</p>
                            <div className="flex items-center justify-end space-x-2 mt-1">
                                <span className="text-xs opacity-75">
                                    {message.timestamp}
                                </span>
                                {message.sender === 'user' && (
                                    <span className="text-xs">
                                        {message.status === 'sent' ? '✓' : 
                                         message.status === 'delivered' ? '✓✓' : 
                                         message.status === 'read' ? '✓✓' : ''}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex items-center space-x-2 text-gray-500">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-sm">Sarah is typing...</span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <button
                            onClick={() => setShowAttachMenu(!showAttachMenu)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <PaperClipIcon className="h-5 w-5 text-gray-500" />
                        </button>
                        {showAttachMenu && (
                            <div className="absolute bottom-full left-0 mb-2 bg-white shadow-lg rounded-lg p-2 w-48">
                                <button
                                    onClick={() => {
                                        simulateFileUpload();
                                        setShowAttachMenu(false);
                                    }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                                >
                                    Attach Document
                                </button>
                            </div>
                        )}
                    </div>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => {
                            setInputText(e.target.value);
                            handleTyping();
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-600"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
} 