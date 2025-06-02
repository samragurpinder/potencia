'use client';

import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface ChatButtonProps {
    onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-40"
            aria-label="Toggle chat"
        >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </button>
    );
} 