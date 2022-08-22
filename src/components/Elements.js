import React from "react";
import Card from "./Card";
import Song from "./Song";
import { data } from "../utils/utils";


export default function Elements(props) {

    const musicRenderList = data.map((i) =>
        <Song
            key={i.id}
            music={i.music}
            musicName={i.name}
            musicminuscheck={i.minus}
            duration={i.duration}
        />
    )

    const elementsClass = props.songCheck ? "elements elements_sont-list" : "elements";

    return (
        <section className={elementsClass}>
            {musicRenderList}
        </section>
    )
}