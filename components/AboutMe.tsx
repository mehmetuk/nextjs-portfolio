import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
    const skills = [
        {name:"UX", percent:80},
        {name:"Website Design", percent:90},
        {name:"App Design", percent:75},
        {name:"Graphic Design", percent:70},
    ]
  return (
    <section className='py-16'>
        <div className='max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10'>
            <div className='flex'>
    <Image
                 src="/profile.jpg"
                 alt="Profil fotoğrafı"
                 width={500}
                 height={500}
                 className='object-cover rounded-full'
                 priority
                 />
            </div>
<div className='flex-1 '>
    <h2 className='text-4xl font-bold mb-4 text-amber-500'>
        About Me
    </h2>
    <p className='mb-6 text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, ea quibusdam mollitia consectetur dignissimos quos accusamus harum aspernatur odit, tempore fugiat perferendis consequuntur labore voluptatibus minus soluta expedita autem est?</p>
  <p className='mb-6 text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, ea quibusdam mollitia consectetur dignissimos quos accusamus harum aspernatur odit, tempore fugiat perferendis consequuntur labore voluptatibus minus soluta expedita autem est?</p>
  <div className='space-y-6 mt-8'>
{
    skills.map((skill,index)=>(
<div key={index}>
<div className='flex items-center justify-between mb-1'>
<span className='font-medium'>{skill.name}</span>
<span className='font-medium'>{skill.percent}</span>
</div>
<div className='w-full bg-gray-700 h-2 rounded-full'>
<div className='bg-amber-500 h-2 rounded-full' 
style={{width:`${skill.percent}%`}}>

</div>
</div>
</div>
    ))
}
  </div>
</div>
        </div>
      
    </section>
  )
}

export default AboutMe
