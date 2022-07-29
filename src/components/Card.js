import React from "react";
import Player from "./Player";
import { data } from "../utils/utils";

export default function Card() {

    return (
        <article className="card">
            <img className="card__img" src="https://img3.akspic.ru/attachments/crops/7/4/6/0/0/100647/100647-kupol_lavy-nebo-tipy_vulkanicheskih_izverzhenij-lava-teplo-2560x1440.jpg" />
            <div className="card__box">
                <p className="card__name">{data.name}</p>
                <Player
                    key='1'
                    music={data.music}
                />
            </div>
        </article>
    )
}