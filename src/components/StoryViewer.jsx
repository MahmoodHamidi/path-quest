import { useEffect, useState } from "react";
import storyData from "../assets/data/storyData.json";


export default function StoryViwer() {
  const [currentStep, setCurrentStep] = useState("start"); // مرحله فعلی داستان
  const currentStory = storyData[currentStep]; // داده‌های مربوط به مرحله فعلی
  const [previusStories,setPreviusStories] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem("currentStep")){
        console.log("شما یک داستان ناتمام دارید.آیا مایلید ادامه دهید؟");
        console.log(localStorage.getItem("previusStories"));
        
        setCurrentStep(localStorage.getItem("currentStep"));
        setPreviusStories(localStorage.getItem("previusStories").split(","));
    }
  },[]);

  const handleChoice = (nextStep) => {
    
    setPreviusStories([...previusStories,currentStep]);
    
    setCurrentStep(nextStep); // مرحله بعدی را تنظیم می‌کنیم
    localStorage.setItem("currentStep",currentStep);
    localStorage.setItem("previusStories",previusStories);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        📖 داستان تعاملی
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <p className="text-gray-700 text-lg mb-6">{currentStory.text}</p>

        {currentStory.options.length > 0 ? (
          <div className="space-y-4">
            {currentStory.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleChoice(option.next)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                {option.text}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">داستان به پایان رسید!</p>
          && localStorage.removeItem("currentStep")
        )}
      </div>
    </div>
  );
}
