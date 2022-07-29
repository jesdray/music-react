import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Player(props) {
    const dispatch = useDispatch();
    const playListMusic = useSelector(state => state.playListMusic);
    const audio = useMemo(() => new Audio(props.music), []);
    const [playMusic, setPlayMusic] = React.useState(false);

    const btnClass = playMusic ? "player__btn player__btn-off player__btn-active" : "player__btn player__btn-on player__btn-active";

    function onOff() {
        if (!playMusic) {
            audio.play();
            dispatch({ type: "onOff", play: true })
            setPlayMusic(true)
        } else {
            audio.pause();
            dispatch({ type: "onOff", play: false })
            setPlayMusic(false)
        }
    }

    return (
        <div className="player">
            <button className="player__btn player__btn-active player__btn-back"></button>
            <button className={btnClass} onClick={onOff}></button>
            <button className="player__btn player__btn-active player__btn-next"></button>
        </div>
    )
}