import React from 'react'

const About = () => {
    return (
        <div className=' w-[80%] h-[80vh] flex items-center justify-evenly absolute left-[10%] top-24'>
            <div className='w-[50%] h-[100%] flex flex-col items-center justify-evenly p-7'>
                <h1 className=' text-3xl font-bold'>Our Mission</h1>
                <p className='tracking-[1px]'>At Habot Connect DMCC, we believe in empowering both parents and learning support providers. While parents use the platform to find the right support, it's equally important for providers to showcase their expertise. This project introduces a simplified, step-by-step profile wizard designed specifically for learning support providers to create detailed and engaging profiles. The goal is to make the onboarding experience intuitive and seamless—enabling providers to input diverse information such as bios, services offered, specializations, availability, and contact details. By streamlining this process, we ensure that providers can present their skills effectively and connect with the right families in need of their support.</p>
            </div>
            <div className="h-[85%] w-[40%] flex items-center justify-center bg-[url('https://img.freepik.com/free-vector/gradient-our-mission-concept-illustrated_23-2149108413.jpg?t=st=1733703879~exp=1733707479~hmac=c6ac58f11ca1bb80e48494e5c27959856d923d21862cbb14cfea29ad3ddb9d39&w=1060')] bg-cover bg-center rounded-[50px]">
            </div>
        </div>
    )
}

export default About