import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPages from "../main-pages/MainPages";
import Search from "../main-pages/Search"
import Layout from "../main-pages/Layout";
import DetailPages from "../main-pages/DetailPages";
import { GlobalStyles } from "../main-pages/styled/MainPagesStyled";
import Login from '../my-pages/Login';
import SignUp from '../my-pages/SignUp';
import Profile from '../my-pages/Profile';
import MyPage from '../my-pages/MyPage';
import Categorypages from "../main-pages/Categorypages";
import MyPage1 from "../my-pages/mypages/MyPage1";
import MyPage2 from "../my-pages/mypages/MyPage2";
import MyPage3 from "../my-pages/mypages/MyPage3";

function Router() {
    return (
        <div>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route element={<Layout />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="mypage" element={<MyPage />} />
                        <Route path="mypage1" element={<MyPage1 />} />
                        <Route path="mypage2" element={<MyPage2 />} />
                        <Route path="mypage3" element={<MyPage3 />} />
                        <Route path="/" element={<MainPages />} />
                        <Route path="/:id" element={<DetailPages />} />
                        <Route path="/posts/:category" element={<Categorypages />} />
                    </Route>
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router