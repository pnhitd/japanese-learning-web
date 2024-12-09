import React, { useState } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";


const VocabularyCard = ({ word, furigana,img , type, examples }) => (
  <div className="w-[790px] max-h-[500px] bg-white rounded-xl p-5">
    <div className="flex justify-between">
        <div className="p-4 basis-2/3 ">
            <div className="flex">
                <p className="font-semibold text-[#2B308B] text-5xl">{word}</p>
                <HiOutlineSpeakerWave className="w-6 h-6 my-auto ml-4" />
            </div>
            <p className="mt-2 text-lg">{furigana}</p>
            <p className="bg-[#3E8B2B] text-white  rounded-md px-2 py-1 mt-2 max-w-[125px]">
                {type}
            </p>
        </div>
        <img src={img} alt="Ảnh minh họa" />
    </div>

    <div className="flex">
      <div className="px-4">
        {examples.map((example, index) => (
          <div key={index} className="mt-2">
            <div className="flex">
              <FaStar className="w-4 h-4 text-[#FFD233] my-auto" />
              <p className="ml-1 text-lg font-semibold">{example.title}</p>
            </div>
            <p className="ml-6 my-1 text-lg">{example.sentence}</p>
            <p className="ml-6 my-1 text-lg text-[#67727E]">{example.translation}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const VocabList = ({ vocabularyData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < vocabularyData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="flex flex-row container mx-auto p-4">
      <div className="basis-2/3">
        <VocabularyCard {...vocabularyData[currentIndex]} />
      </div>

       {/* Danh sách từ vựng bên phải */}
       <div className="basis-1/3 max-w-[300px] h-[440px] bg-[#F2F4FF] rounded-lg shadow-lg ml-4">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold">Từ vựng</h2>
        </div>
        <div className="p-4 overflow-y-auto h-[400px]">
          {vocabularyData.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                currentIndex === index ? "bg-[#2B308B] text-white" : "hover:bg-[#1677FF]"
              }`}
            >
              <p className="font-semibold">{index + 1}. {item.word}</p>
              <FaStar className="text-[#FFD233]" />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          className="bg-[#2B308B] text-white px-4 py-2 rounded-md disabled:bg-gray-300"
          disabled={currentIndex === 0}
        >
          Trước
        </button>
        <button
          onClick={handleNext}
          className="bg-[#2B308B] text-white px-4 py-2 rounded-md disabled:bg-gray-300"
          disabled={currentIndex === vocabularyData.length - 1}
        >
          Sau
        </button>
      </div> */}
    </div>
  );
};

export default VocabList;
