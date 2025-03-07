import React, { useState } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const VocabularyCard = ({ word, furigana, img, type, examples }) => (
  <div className="w-[790px] h-[440px] bg-white shadow-lg rounded-3xl p-5">
    <div className="flex justify-between">
      <div className="p-4 basis-2/3 ">
        <div className="flex">
          <p className="font-semibold text-[#2B308B] text-5xl">{word}</p>
          <HiOutlineSpeakerWave className="w-6 h-6 my-auto ml-4" />
        </div>
        <p className="mt-2 text-lg">{furigana}</p>
        <p className="bg-[#3E8B2B] text-white text-center font-semibold  rounded-md px-2 py-1 mt-2 max-w-[125px]">
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
            <p className="ml-6 my-1 text-lg text-[#67727E]">
              {example.translation}
            </p>
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
    <div className="flex flex-row container px-16">
      <div className="basis-2/3 flex flex-row">
        <VocabularyCard {...vocabularyData[currentIndex]} />
        <div className="flex flex-col ml-5 gap-5 text-6xl justify-center">
          <FaRegArrowAltCircleUp
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="text-[#2B308B] cursor-pointer"
          />
          <FaRegArrowAltCircleDown
            onClick={handleNext}
            disabled={currentIndex === vocabularyData.length - 1}
            className=" text-[#2B308B] cursor-pointer"
          />
        </div>
      </div>

      {/* Danh sách từ vựng bên phải */}
      <div className="basis-1/3">
        <div className="w-[350px] h-full  bg-[#F2F4FF] rounded-3xl shadow-lg ml-4">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-center">Danh sách từ vựng</h2>
          </div>
          <div className="p-4 overflow-auto h-[370px] ">
            {vocabularyData.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex flex-row items-center justify-between p-5 h-[60px] mb-2 text-base rounded-2xl transition duration-100 cursor-pointer ${
                  currentIndex === index
                    ? "bg-[#2B308B] text-white"
                    : "bg-white hover:bg-[#BFDBFE]"
                }`}
              >
                <div className="basis-2/3">
                  <p className="font-mono text-xl">
                    {index + 1}. <span>{item.word}</span>
                  </p>
                  <div className="flex flex-row gap-1 items-center">
                    <p className="text-sm mr-2">Độ thông dụng</p>
                    {[...Array(item.stars)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-[#FFD233]" />
                    ))}
                  </div>
                </div>
                <div className="basis-1/3 flex justify-end gap-1">
                  <FaHeart className="text-red-500"></FaHeart>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabList;
