import { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer";
import "./StoryPage.css";
import storyData from "../../assets/data/storyData.json";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";

const StoryPage = () => {
  const params = useParams();
  const storyID = params.id;
  const result = params.result;
  const {state} = useGlobalContext();

  const currentStory = storyData[state.language][storyID][result];

  const [showDiv, setShowDiv] = useState(false);
  const [shoeComponent, setshoeComponent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setshoeComponent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen p-4">
      
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src="../../assets/images/burgVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70"></div>
      {showDiv && (
        <div className="flex w-8/12 mx-auto flex-col sm:flex-row items-center justify-center">
          <div
            className="bg-[url('/assets/images/story.jpg')] bg-cover bg-center border-r-2 w-full
         sm:w-1/2 lg:w-2/5 xl:w-1/2 min-h-[200px] sm:min-h-[600px] border-amber-900 
      rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none puff-in-center p-10 flex items-stretch"
          >
            <img
              className="rounded-xl object-cover object-center hue-rotate-30"
              src="../../assets/images/burg.jpg"
              alt=""
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)," +
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)," +
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>

          <div
            className="bg-[url('/assets/images/story.jpg')] bg-cover bg-center border-l-2 w-full 
        sm:w-1/2 lg:w-2/5 xl:w-1/2 min-h-[400px] sm:min-h-[600px] border-amber-900 
      rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none puff-in-center flex items-center"
          >
            <p className="text-amber-900 font-bold text-xl leading-10 p-14 text-center">
              {currentStory.text}
            </p>
          </div>
        </div>
      )}
      {shoeComponent && <MusicPlayer />}
    </div>
  );
};

export default StoryPage;
