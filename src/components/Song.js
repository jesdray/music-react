import React from "react";
import { Link } from "react-router-dom";

export default function Song(props) {
    const [likeMusic, setLikeMusic] = React.useState(false);
    const LikeBtnClass = likeMusic ? 'song__btn song__like song__like-active' : 'song__btn song__like';
    const hours = Math.floor(props.duration / 3600);
    const min = Math.floor(props.duration % 3600 / 60);
    const sec = Math.floor(props.duration % 3600 % 60);

    const durationMusic = `${hours > 0 ? hours + ':' : ''}${hours > 0 && min < 10 && min > 0 ? '0' : ''}${min > 0 ? min + ':' : ''}${min > 0 && sec < 10 && sec > 0 ? 0 : ''}${sec}`

    function like() {
        setLikeMusic(!likeMusic)
    }

    return (
        <div className="song" >
            <div className="song__box" >
                <img className="song__img" src='https://funart.pro/uploads/posts/2021-07/1627520331_10-funart-pro-p-kot-v-chyornikh-ochkakh-zhivotnie-krasivo-11.jpg' alt="Картинка" />
                <div className="song__hud" />
                <div className="song__box song__box-text" >
                    <p className="song__duration">{durationMusic}</p>
                    <p className="song__name">{props.musicName}</p>
                </div>
            </div>
            <div className="song__box">
                <button className={LikeBtnClass} onClick={like}></button>
                <Link to={props.music} target="_blank" download className="song__btn song__download"></Link>
            </div>
        </div>
    )
}