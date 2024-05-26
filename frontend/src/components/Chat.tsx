import React, { useEffect } from 'react';
import Input from './Input';

const Chat: React.FC = () => {

    useEffect(() => {
        const welcomeHeading = document.querySelector('.welcome-heading') as HTMLElement | null;
        const insideChats = document.querySelector('.inside-chats');

        if (insideChats && insideChats.children.length > 0 && welcomeHeading) {
            welcomeHeading.style.display = 'none';
        }
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (
        <>
            <div className="container mx-auto max-w-4xl justify-between">
                <div className="chats overflow-y-auto mt-20">
                    <h1 className="welcome-heading text-3xl flex justify-center mx-auto items-center h-96 font-bold">How can I help you today?</h1>
                    <div className="inside-chats">
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    {/* Add more chat bubbles here as needed */}
                </div>
            </div>
            <Input />
        </>
    );
};

export default Chat;
