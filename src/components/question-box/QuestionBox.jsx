import React, { useState } from "react";
import "./QuestionBox.css";
import Button from "./Button";

const QuestionBox = ({ question }) => {
  

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center pt-20">
      
      <div className="question-card flex w-1/3 items-center justify-center opacity-25 ">
        <div className="relative w-full flex gap-4 bg-gradient-to-r from-[#00B0FF] to-[#8E24AA] p-3 rounded-lg shadow-2xl border-4 border-[#121212]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-[#121212] animate-flame rounded-xl"></div>
          <div className="w-3/5 h-52 overflow-hidden z-10 rounded-xl shadow-md shadow-primary">
            <img className="h-full w-full rounded-xl object-cover object-center" src="./assets/images/burg.jpg" alt="" />
          </div>
          <p className="text-white text-2xl font-bold text-center question-text">
            {question}
          </p>
        </div>
      </div>
      <div className="connect-line relative h-40 w-0.5 bg-primary flex justify-center">
        <span className="absolute w-3 h-3 top-1/2 rounded-full bg-primary"></span>
      </div>
      <div className="question-card flex w-1/3 items-center justify-center  opacity-50">
        <div className="relative w-full flex gap-4 bg-gradient-to-r from-[#00B0FF] to-[#8E24AA] p-3 rounded-lg shadow-2xl border-4 border-[#121212]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-[#121212] animate-flame rounded-xl"></div>
          <div className="w-3/5 h-52 overflow-hidden z-10 rounded-xl shadow-md shadow-primary">
            <img className="h-full w-full rounded-xl object-cover object-center" src="./assets/images/burg.jpg" alt="" />
          </div>
          <p className="text-white text-2xl font-bold text-center question-text">
            {question}
          </p>
        </div>
      </div>
      <div className="connect-line relative h-40 w-0.5 bg-primary flex justify-center">
        <span className="absolute w-3 h-3 top-1/2 rounded-full bg-primary"></span>
      </div>
      <div className="question-card flex w-1/3 items-center justify-center mt-0 ">
        <div className="relative w-full flex gap-4 bg-gradient-to-r from-[#00B0FF] to-[#8E24AA] p-3 rounded-lg shadow-2xl border-4 border-[#121212]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-[#121212] animate-flame rounded-xl"></div>
          <div className="w-3/5 h-52 overflow-hidden z-10 rounded-xl shadow-md shadow-primary">
            <img className="h-full w-full rounded-xl object-cover object-center" src="./assets/images/burg.jpg" alt="" />
          </div>
          <p className="text-white text-2xl font-bold text-center question-text">
            {question}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-1/3 mt-15 gap-4 mb-72">
        <Button bgColor="before:bg-primary" answer="Yes, I am sure." />
        <Button bgColor="before:bg-secondary" answer="No, I don't want" />
      </div>
    </div>
  );
};

export default QuestionBox;
