import React from "react";
import { Routes, Route, Switch } from 'react-router-dom';
import Elements from "./Elements";
import Navbar from './Navbar'

export default function Main() {

    return (
        <main className="main">
            <>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Elements songCheck={true}/>}>
                    </Route>
                    <Route path="/settings" element={<Elements songCheck={false} />}>
                    </Route>
                </Routes>
            </>
        </main>
    )
}