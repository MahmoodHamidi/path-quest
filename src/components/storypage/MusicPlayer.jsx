import React, { useState, useRef, useEffect } from "react";
import { FaRegCirclePlay, FaRegCirclePause, FaHeart } from "react-icons/fa6";

import {
  IoPlaySkipForwardCircleOutline,
  IoPlaySkipBackCircleOutline,
} from "react-icons/io5";
import { MdOutlineReplay10, MdForward10 } from "react-icons/md";
import { PiSpeakerHighFill, PiSpeakerSimpleXFill } from "react-icons/pi";

const songs = [
  { name: "Frozen", url: "/Music/05 - Let It Go.mp3" },
  { name: "Game of Thrones", url: "/Music/Game of Thrones.mp3" },
  { name: "Post Shir", url: "/Music/post-shir.mp3" },
];

const MusicPlayer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHigh, setIsHigh] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  const toggleLike = () => setIsLiked(!isLiked);
  const toggleHigh = () => setIsHigh(!isHigh);

  const playMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const forward10Seconds = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const backward10Seconds = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const previousSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(true);
  };
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
    toggleHigh();
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-8/12 mx-auto text-center mt-5 p-4 bg-amber-400 opacity-70 rounded-2xl bounce-in-top ">
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].url}
        onEnded={nextSong}
      />

      <div className="flex justify-center items-center mt-5">
        <button className="mr-8 md:hidden" onClick={toggleMute}>
          {isHigh ? (
            <PiSpeakerHighFill className="text-gray-700 text-[35px]" />
          ) : (
            <PiSpeakerSimpleXFill className="text-red-500 text-[35px]" />
          )}
        </button>
        <h1 className="text-2xl font-bold">{songs[currentSongIndex].name}</h1>
        <button className="ml-8 md:hidden" onClick={toggleLike}>
          <FaHeart
            className={`text-[30px] ${
              isLiked ? "text-red-500" : "text-gray-700"
            }`}
          />
        </button>
      </div>

      <div className="flex justify-center items-center  p-5">
        <div className="mr-10 hidden md:block">
          <button onClick={toggleMute}>
            {isHigh ? (
              <PiSpeakerHighFill className="text-gray-700 text-[35px]" />
            ) : (
              <PiSpeakerSimpleXFill className="text-red-500 text-[35px]" />
            )}
          </button>
        </div>

        <div>
          <button className="mr-5" onClick={backward10Seconds}>
            <MdOutlineReplay10 className="text-gray-700 text-[35px] hover:text-blue-500" />
          </button>

          <button className="mr-5" onClick={previousSong}>
            <IoPlaySkipBackCircleOutline className="text-gray-700 text-[40px] hover:text-blue-500" />
          </button>

          <button className="mr-5" onClick={playMusic}>
            {isPlaying ? (
              <FaRegCirclePause className="text-red-500 text-[40px]" />
            ) : (
              <FaRegCirclePlay className="text-gray-700 text-[40px] hover:text-blue-500" />
            )}
          </button>

          <button className="mr-5" onClick={nextSong}>
            <IoPlaySkipForwardCircleOutline className="text-gray-700 text-[40px] hover:text-blue-500" />
          </button>

          <button onClick={forward10Seconds}>
            <MdForward10 className="text-gray-700 text-[35px] hover:text-blue-500" />
          </button>
        </div>

        <div>
          <button className="ml-10 hidden md:block" onClick={toggleLike}>
            <FaHeart
              className={`text-[30px] ${
                isLiked ? "text-red-500" : "text-gray-700"
              }`}
            />
          </button>
        </div>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="mx-4"
        />
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
