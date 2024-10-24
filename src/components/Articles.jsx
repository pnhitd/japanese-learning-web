import React from 'react'
import articlesData from '../data/articlesData'

const Articles = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
        {articlesData.map((article) => (
            <div key={article.id} className='flex w-[500px] gap-4 my-auto'>
                <img className='w-[160px]' src={article.img} alt="" />
                <div className='max-w-[280px]'>
                    <h3 className='font-semibold text-[18px]'>{article.title}</h3>
                    <p className='mt-2 text-[rgb(2,2,2,0.6)] text[12px]'>{article.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Articles