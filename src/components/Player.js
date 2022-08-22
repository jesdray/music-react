import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

export default function Player() {
    const dispatch = useDispatch();
    const playListMusic = useSelector(state => state.playListMusic);
    const [playMusic, setPlayMusic] = React.useState(false);
    const [idMusic, setIdMusic] = React.useState(0);
    const audio = useMemo(() => new Audio(playListMusic[0].music), []);
    const [nameMusic, setNameMusic] = React.useState(playListMusic[0].name)
    const [volumeMusic, setVolumeMusic] = React.useState(100)
    const [volumeSettingsOpen, setVolumeSettingsOpen] = React.useState(false)

    const durationPlayer = `${Math.floor(audio.currentTime)}/${isNaN(audio.duration) ? 0 : Math.floor(audio.duration)}`

    const [progressPercent, setProgressPercent] = React.useState(0);
    function updateProgress() {
        const { duration, currentTime } = audio;
        setProgressPercent((currentTime / duration) * 100)
    }

    function setProgress(e) {
        const widthProgress = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;

        audio.currentTime = (clickX / widthProgress) * audio.duration;
    }

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextMusic);

    const btnClass = playMusic ? "player__btn player__btn-off player__btn-active" : "player__btn player__btn-on player__btn-active";


    const volumeOpen = volumeSettingsOpen ? 'player__value-volume player__value-volume-active' : 'player__value-volume';

    function onOff() {
        if (!playMusic) {
            audio.play();
            setPlayMusic(true)
        } else {
            audio.pause();
            setPlayMusic(false)
        }
    }

    function nextMusic() {
        if (idMusic < playListMusic.length - 1) {
            setIdMusic(idMusic + 1);
            setPlayMusic(true);
            setNameMusic(playListMusic[idMusic + 1].name)

            audio.src = playListMusic[idMusic + 1].music;
            audio.play().catch(e => e);
        }
    }

    function backMusic() {
        if (idMusic !== 0) {
            setIdMusic(idMusic - 1);
            setPlayMusic(true);
            setNameMusic(playListMusic[idMusic - 1].name)

            audio.src = playListMusic[idMusic - 1].music;
            audio.play();
        }
    }

    function handlerVolume(e) {
        audio.volume = e.target.value / 100
        setVolumeMusic(e.target.value)
    }

    function openVolume() {
        if (volumeSettingsOpen) {
            setVolumeSettingsOpen(false);
            return
        }
        setVolumeSettingsOpen(true)
    }


    return (
        <div className="player">
            <div className="player__box player__box-btn">
                <button className="player__btn player__btn-active player__btn-back" onClick={backMusic} disabled={idMusic !== 0 ? false : true}></button>
                <button className={btnClass} onClick={onOff}></button>
                <button className="player__btn player__btn-active player__btn-next" onClick={nextMusic} disabled={idMusic < playListMusic.length - 1 ? false : true}></button>
            </div>
            <div className="player__box">
                <div className="player__box player__box-text">
                    <div className="player__settings"></div>
                    <p className="player__text player__text-duration">{durationPlayer}</p>
                    <p className="player__text player__text-name">{nameMusic}</p>
                    <div className="player__volume" onClick={openVolume}></div>
                    <input className={volumeOpen} onChange={handlerVolume} defaultValue='100' type='range' step='5' minvalue='0' maxvalue='100' disabled={!volumeSettingsOpen}></input>
                </div>
                <div className="player__progress" onClick={setProgress}>
                    <div className="player__progress-visual" style={{ width: `${progressPercent}%` }}></div>
                </div>
            </div>
        </div>
    )
}