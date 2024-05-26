import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Chat from '../components/Chat'
import Input from '../components/Input'

const Home: React.FC = () => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <Chat />
            {/* <Input /> */}
        </>
    )
}

export default Home
