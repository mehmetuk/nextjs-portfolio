import React from 'react'
import {
    FaPencilRuler,
    FaLaptopCode,
    FaMobileAlt,
    FaPaintBrush,
    FaServer,
    FaCloud,
    FaDatabase,
    FaLock,
} from 'react-icons/fa'

const servicesData = [
    {
        id: 1,
        icon: <FaPencilRuler size={40} className="text-amber-500" />,
        title: 'UI/UX Design',
        description:
            'Modern ve kullanıcı dostu arayüzler tasarlayarak ziyaretçilerinizin deneyimini iyileştiriyorum.',
    },
    {
        id: 2,
        icon: <FaLaptopCode size={40} className="text-amber-500" />,
        title: 'Web Development',
        description:
            'React, Next.js gibi teknolojilerle hızlı ve güvenilir web uygulamaları geliştiriyorum.',
    },
    {
        id: 3,
        icon: <FaMobileAlt size={40} className="text-amber-500" />,
        title: 'Mobile Development',
        description:
            'Android ve iOS için performanslı, native benzeri mobil uygulamalar inşa ediyorum.',
    },
    {
        id: 4,
        icon: <FaPaintBrush size={40} className="text-amber-500" />,
        title: 'Graphic Design',
        description:
            'Markanıza uygun logo, afiş ve diğer görsel içerikleri profesyonelce tasarlıyorum.',
    },
    {
        id: 5,
        icon: <FaServer size={40} className="text-amber-500" />,
        title: 'Backend Development',
        description:
            'Node.js ve veritabanı teknolojileri ile ölçeklenebilir backend çözümleri sağlıyorum.',
    },
    {
        id: 6,
        icon: <FaCloud size={40} className="text-amber-500" />,
        title: 'Cloud Services',
        description:
            'AWS, Azure ve diğer bulut platformlarında uygulama dağıtımı ve optimizasyonu yapıyorum.',
    },
    {
        id: 7,
        icon: <FaDatabase size={40} className="text-amber-500" />,
        title: 'Database Management',
        description:
            'SQL ve NoSQL veritabanlarında yüksek performanslı veri yönetimi sağlıyorum.',
    },
    {
        id: 8,
        icon: <FaLock size={40} className="text-amber-500" />,
        title: 'Cybersecurity',
        description:
            'Uygulamalarınızı ve verilerinizi güvenlik tehditlerine karşı koruma altına alıyorum.',
    },
]

const Services = () => {
  return (
   <section className='py-10' id='section'>
     <div className='max-w-6xl mx-auto px-4 '>
        <div className='text-center mb-10'>
            <h2 className='text-4xl text-amber-500 font-bold'>Services</h2>
            <p className='text-gray-500 mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia similique facere ducimus pariatur suscipit totam corrupti a dignissimos, amet excepturi praesentium repellat cumque impedit neque, saepe porro, quasi quibusdam quaerat.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                servicesData.map((service)=>(
                    <div key={service.id} className='border rounded-lg p-6 flex flex-col items-start transform transition duration-500 hover:scale-105'>
                            <div className='mb-4 '>{service.icon}</div>
                            <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
                            <p className='text-gray-500'>{service.description}</p>
                       
                    </div>
                ))
            }
        </div>
     </div>
   </section>
  )
}

export default Services
