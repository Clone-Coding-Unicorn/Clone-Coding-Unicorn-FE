import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPages from "../main-pages/MainPages";
import Search from "../main-pages/Search"
import Layout from "../main-pages/Layout";
import DetailPages from "../main-pages/DetailPages";
import { GlobalStyles } from "../main-pages/styled/MainPagesStyled";

function Router() {
    return (
        <div>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    
                    <Route element={<Layout />}>

                        <Route path="/" element={<MainPages />} />
                        <Route path="/:id" element={<DetailPages />} />
                        
                    </Route>
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router