import React, { useState } from "react";
import { useGlobalContext,languages } from "../../contexts/GlobalContext";
import storyData from '../../assets/data/storyData.json';
import { useNavigate } from "react-router-dom";
const SwitchLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [story, setStory] = useState("1");
  const navigate = useNavigate();
  const {state} = useGlobalContext();
  

  const handleChangeStory = (storyID) => {
    navigate(`/story/${storyID}`);
  };

 

  return (
    <div className="relative inline-block mx-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md shadow-md focus:outline-none hover:bg-gray-700 transition"
      >
        {languages[state.language].translations.selectStory} ▼
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-100 bg-white shadow-lg rounded-md overflow-hidden">
          {Object.values(storyData[state.language]).map((storyy) => (
            <li
              key={storyy.id}
              onClick={() => {
                console.log(storyy);
                handleChangeStory(storyy.id);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-white transition"
            >
              
              {storyy.start.text.split(" ").slice(0,10).join(" ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLanguage;
