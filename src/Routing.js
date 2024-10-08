import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import TopBar from './component/Common/TopBar'
import Header from './component/Common/Header'
import NavBar from './component/Common/NavBar'
import Adv from './component/Common/Adv'
import Home from './component/Home/Home'
import Subscribe from './component/Common/Subscribe'
import Footer from './component/Common/Footer'
import Login from './component/Login/Login'
import { Toaster } from 'react-hot-toast'

const Routing = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    return (
        <>
            <Toaster />
            {!isLoginPage && <div className='flex flex-col gap-[15px] relative'>
                <TopBar />
                <div className='bg-headerBg flex flex-col gap-[15px]'>
                    <Header />
                    <NavBar />
                    <Adv />
                </div>
            </div>}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            {!isLoginPage && <Subscribe />}
            {!isLoginPage && <Footer />}
        </>
    )
}

export default Routing