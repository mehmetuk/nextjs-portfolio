import React from 'react'
import { Button } from './ui/button'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex-1'>
      <section id='home' className='max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6'>
        <div className='flex-1'>
            <p className='text-gray-400 text-xl mb-4'>
                Hello I am
            </p>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>
                Mehmet Umut Korhan
            </h1>
            <p className='text-3xl md:text-5xl font-bold font-poppins mb-4 text-amber-500'>Full-Stack Developer</p>
            <p className='text-gray-400 text-lg mb-4 max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptas quae ullam officia doloremque minus, placeat quis tempore quas dolore incidunt autem? Placeat iusto deleniti illum, doloremque minus praesentium cum?</p>
<div>
    <Button>
        Hire me!
    </Button>
</div>
        </div>

        <div className='flex-1 flex flex-col justify-center items-center'>
            <div className='relative w-64 h-64 md:h-80 lg:w-80'>
                 <Image
                 src="/profile.jpg"
                 alt="Profil fotoğrafı"
                 width={500}
                 height={500}
                 className='object-cover rounded-full'
                 priority
                 />
            </div>
             <div className='flex items-center gap-3 mt-8'>
                    <Button variant={"secondary"}>
                        <Twitter/>
                    </Button>
                    <Button variant={"secondary"}>
                        <Instagram/>
                    </Button><Button variant={"secondary"}>
                        <Facebook/>
                    </Button><Button variant={"secondary"}>
                        <Linkedin/>
                    </Button>
                </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
