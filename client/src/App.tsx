import React from 'react'
import './styles/general.scss'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import ChatLayout from './components/ChatLayout'

function App() {
    return (
        <>
            <Topbar />
            <ChatLayout />
            <Footer />
        </>
    )
}

export default App
