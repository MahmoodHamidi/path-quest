import React, { useState } from "react";
import { useGlobalContext,languages } from "../../contexts/GlobalContext";
const SwitchLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useGlobalContext();
  console.log("Current language in SwitchLanguage:", state.language);

  const handleChangeLanguage = (langCode) => {
    console.log(langCode);
    
    dispatch({ type: "TOGGLE_LANGUAGE", payload: langCode });
  };

 

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md shadow-md focus:outline-none hover:bg-gray-700 transition"
      >
        <span className="mr-2">
          {languages[state.language]?.flag}
        </span>
        {languages[state.language].name} ▼
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
          {Object.values(languages).map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                handleChangeLanguage(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-900 hover:text-white transition"
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLanguage;
