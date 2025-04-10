import { useEffect, useState } from "react";
import storyData from "../../assets/data/storyData.json";
import "./StoryQuestioner.css";
import Button from "../question-box/Button";
import { replace, useNavigate,useParams } from "react-router-dom";
import { useGlobalContext,languages } from "../../contexts/GlobalContext";

export default function StoryQuestioner() {
  const {state} = useGlobalContext();
  const [currentStep, setCurrentStep] = useState("start");
  const storyID = useParams();
  const currentStory = storyData[state.language][storyID.id][currentStep];
  const [previusStories, setPreviusStories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentStep")) {
      console.log("شما یک داستان ناتمام دارید.آیا مایلید ادامه دهید؟");

      setCurrentStep(localStorage.getItem("currentStep"));
      setPreviusStories(localStorage.getItem("previusStories").split(","));
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [currentStep]);

  const handleChoice = (nextStep) => {
    previusStories.push(currentStep);
    setPreviusStories(previusStories);

    setCurrentStep(nextStep);
    localStorage.setItem("currentStep", currentStep);
    localStorage.setItem("currentStory", storyID.id);
    localStorage.setItem("previusStories", previusStories);
  };

  return (
    <div className="bg-gray-900 relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src="../assets/images/burgVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="w-6/12 mx-auto flex flex-col items-center pb-30">
        <h2 className="xl:text-6xl lg:text-5xl text-primary z-10 font-extrabold font-sans my-40 uppercase [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.4)]">
          {languages[state.language].translations.websiteName}
        </h2>
        {previusStories.length > 0 &&
          previusStories.map((previusStory, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="question-card flex w-full flex-col items-stretch justify-center "
              >
                <div className="relative w-full flex gap-4 bg-gradient-to-r from-[#00B0FF] to-[#8E24AA] p-5 rounded-lg shadow-2xl border-4 border-[#121212]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-[#121212] animate-flame rounded-xl"></div>
                  <div className="w-1/3  overflow-hidden z-10 rounded-xl shadow-md shadow-primary">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src="../assets/images/burg.jpg"
                      alt=""
                    />
                  </div>
                  <p className="text-white w-2/3 text-xl font-bold text-center question-text p-4">
                    {storyData[state.language][storyID.id][previusStory].text}
                  </p>
                </div>
              </div>
              <div className="connect-line relative h-40 w-0.5 bg-primary flex justify-center">
                <span className="absolute w-3 h-3 top-1/2 rounded-full bg-primary"></span>
              </div>
            </div>
          ))}

        <div className={currentStory.options.length > 0 ? "question-card flex w-full items-stretch justify-center": "question-card flex w-full items-stretch justify-center mb-40"}>
          <div className="relative w-full flex gap-4 bg-gradient-to-r from-[#00B0FF] to-[#8E24AA] p-3 rounded-lg shadow-2xl border-4 border-[#121212]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-[#121212] animate-flame rounded-xl"></div>
            <div className="w-1/3  overflow-hidden z-10 rounded-xl shadow-md shadow-primary">
              <img
                className="h-full w-full rounded-xl object-cover object-center"
                src="../assets/images/burg.jpg"
                alt=""
              />
            </div>
            <p className="text-white w-2/3 text-xl font-bold text-center question-text p-4">
              {currentStory.text}
            </p>
          </div>
        </div>
        {currentStory.options.length > 0 ? (
          <div className="flex flex-col w-full mt-15 gap-4">
            <div>
              {currentStory.options.map((option, index) => (
                <button
                  className={` cursor-pointer first:before:bg-primary last:before:bg-secondary relative mt-4 w-full flex justify-center items-center gap-2 p-4 pl-8 pr-8 bg-transparent border-0 rounded-full origin-center  button`}
                  key={index}
                  onClick={() => handleChoice(option.next)}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[-10] rounded-full bg-transparent dots_border"></div>

                  <span className="text-white text-2xl z-10 relative ">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          localStorage.removeItem("previusStories") ||
          localStorage.removeItem("currentStep") ||
          localStorage.removeItem("currentStory") ||
          navigate(`/view/${storyID.id}/${currentStep}`,{replace:true})  
        )}
      </div>
    </div>
  );
}
