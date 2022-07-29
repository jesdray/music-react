import React from "react";
import { Routes, Route } from 'react-router-dom';
import Elements from "./Elements";

export default function Main() {

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Elements />}>
                </Route>
                <Route path="/settings" element={<div> sajdi;ajsd;jaisdj;ais</div>}>
                </Route>
            </Routes>
        </main>
    )
}