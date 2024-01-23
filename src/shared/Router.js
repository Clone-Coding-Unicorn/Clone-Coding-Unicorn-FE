import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../my-pages/Login';
import SignUp from '../my-pages/SignUp';
import Profile from '../my-pages/Profile';
import MyPage from '../my-pages/MyPage';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="mypage" element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router