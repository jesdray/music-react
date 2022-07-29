import React from "react";
import Card from "./Card";

export default function Elements() {
    const NewCard = new Card;
    return (
        <section className="elements">
            <Card></Card>
            {NewCard}
        </section>
    )
}