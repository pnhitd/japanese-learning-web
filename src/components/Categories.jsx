import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { mainArticles, sidebarArticles, recommendedArticles } from '../data/categoriesData';

function Categories() {
    return (
        <div className="">
            <nav className="flex space-x-4 my-4">
                <a href="#all" className="text-gray-600">Tất cả</a>
                <a href="#life" className="text-gray-600">Đời sống</a>
                <a href="#travel" className="text-gray-600">Du lịch</a>
                <a href="#history" className="text-gray-600">Lịch sử</a>
                <a href="#anime" className="text-gray-600">Anime</a>
                <a href="#entertainment" className="text-gray-600">Giải trí</a>
                <a href="#education" className="text-gray-600">Học thuật</a>
            </nav>

            <div className="flex gap-8">
                <div className='flex w-[80%] border-2 p-4'>
                    <div className="w-[80%] mr-8">
                        {mainArticles.map((mainArticle, index) => (
                            <div key={index} className="mb-6">
                                <div className="relative">
                                    <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-auto" />
                                    <p className='mt-4 text-gray-500 font-semibold'>{mainArticle.date}</p>
                                </div>
                                <h2 className="text-2xl font-semibold mt-4">{mainArticle.title}</h2>
                                <p className="text-gray-600 mt-2">{mainArticle.description}</p>
                                <a href="#read-more" className="mt-4 flex text-[#F490AF]">
                                    <p className='mr-2 font-medium'>Đọc thêm</p>
                                    <IoArrowBackSharp className='my-auto w-4 h-4 rotate-180' />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Bài viết khác</h2>
                        {sidebarArticles.map((slidebarArticle, index) => (
                            <div key={index} className="flex mb-6">
                                <img src={slidebarArticle.image} alt={slidebarArticle.title} className="w-[30%]" />
                                <div className='my-auto ml-2'>
                                    <h3 className="text-[17px] font-medium">{slidebarArticle.title}</h3>
                                    <p className="text-[12px] text-gray-500">{slidebarArticle.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="border-2 p-4">
                        <h2 className="text-xl font-semibold mb-4">Bạn sẽ thích</h2>
                        {recommendedArticles.map((recommendedArticle, index) => (
                            <div key={index} className="mb-6 flex">
                                <img src={recommendedArticle.image} alt={recommendedArticle.title} className="w-[40%]" />
                                <div className='my-auto ml-2'>
                                    <h3 className="text-[17px] font-medium">{recommendedArticle.title}</h3>
                                    <p className="text-[12px] text-gray-500">{recommendedArticle.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Categories;
