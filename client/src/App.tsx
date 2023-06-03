import React from 'react'
import './styles/general.scss'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import ChatLayout from './components/ChatLayout'
import RegisterModal from './forms/RegisterModal'

function App() {
    return (
        <>
            <Topbar />
            {/* <ChatLayout /> */}
            <RegisterModal />
            <Footer />
        </>
    )
}

export default App
