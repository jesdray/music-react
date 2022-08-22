import React from "react";
import Player from "./Player";
import { data } from "../utils/utils";

export default function Card() {

    return (
        <article className="card">
            <img className="card__img" src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614642581_60-p-fon-salyut-dlya-fotoshopa-89.jpg" />
            <div className="card__box">
                <p className="card__name">{data.name}</p>
            </div>
        </article>
    )
}