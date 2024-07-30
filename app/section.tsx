import { Image } from "@nextui-org/react";
import {motion, useInView, useScroll} from "framer-motion"
import React, { createRef, MutableRefObject, RefObject, useRef, useState } from "react";
import ponpon from "@/public/img/pompom.webp"
import ponpon2 from "@/public/img/pompom2.webp"
import ponpon3 from "@/public/img/pompom3.png"
import { title } from "process";

export default function SectionHome(){

  



    const infoSection =[
        {title: "Explora el universo del éxito", body: "Explora el conocimiento estelar que te guiará hacia el éxito académico, animándote a reforzar tus habilidades analíticas en Lectura Critica de forma divertida y dinámica junto a tu compañero guía ¡Brany! ", position: "l",img: "/img/pds (2).png" },
        {title: "¿Cómo te ayudaremos?", body: "Fomentaremos tu aprendizaje autónomo e independiente con herramientas y recursos como simulacros, videos y temas que encontrarás en el área de lectura critica dentro de las pruebas saber 11.", position: "r", img:"/img/pompom2.webp"},
        {title: "¿Qué hace que esta página sea eficaz?", body:"Educarse con Train It! es desarrollar la capacidad de analizar, interpretar y evaluar textos de manera objetiva y reflexiva permitiendo que los estudiantes puedan mejorar sus habilidades para comprender textos complejos, identificar información relevante y sacar conclusiones fundamentales.", position: "l", img:"/img/Krl (2).png"},
        {title: "Funcionalidades", body:"Nuestras características y desafíos convierten el aprendizaje en una experiencia divertida y similar a un juego. Donde aprenderás con material didáctico, simulacros y retroalimentación inmediata, y por supuesto, fácil de acceder desde cualquier dispositivo.", position:"r", img:"/img/mmr (1).png"},
        {title: "Estrategias de Educación Efectivas", body:"Por medio de la fusión de técnicas educativas avaladas por la investigación científica, logramos estrategias efectivas que incluye la práctica regular de ejercicios, el estudio espaciado, técnicas de respuesta y simulacros de las pruebas ICFES.", position:"l", img:"/img/pompom3.png"},
        {title: "Nuestro objetivo", body:"Nuestro objetivo es reforzar tus habilidades de Lectura Crítica, proporcionándote un sin fin de herramientas intuitivas y accesibles. Aquí encontrarás módulos de Lectura Crítica diseñados específicamente para ayudarte a identificar y superar tus dificultades, junto con retroalimentación inmediata para que puedas mejorar continuamente. ¡Prepárate para alcanzar el éxito en tus pruebas y desarrollar habilidades esenciales para tu futuro académico _(profesional)_!", position:"r", img:"/img/cll (1).png"},
        
    ];  

    const Refs = ()=> useRef(null);
    

    const IsInViews = (ref: RefObject<Element>) =>  useInView(ref);

    
    return(<>
        <article>
            
        <div className="flex flex-wrap gap-56 w-full ">
            { infoSection.map((info, index)=>{    

                
                const ref = Refs() ;
                const isInView = IsInViews(ref) ;
            
                if(info.position ==="l"){
                    return(
                        <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4" key={info.title}>
                        <div className="flex justify-center items-center  p-3">
                            <div className=' '>
                            <motion.div 
                            ref={ref}
                            initial={{opacity:0, y:20}}
                            animate={ isInView ? {opacity:1,y:0}: {opacity:0,y:20}}
                            transition={{duration:1.2}}
                            >
                            <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>{info.title}</div>
                            <div className='mt-8 font-semibold'>{info.body}
                            </div>
        
                            </motion.div>
        
                            </div>
                        </div>
                        <motion.div
                            ref={ref}
                            initial={{opacity:0, x:200}}
                            animate={isInView ? {opacity:1,x:0}:{opacity:0, x:200}}
                            transition={{duration:1.2}}
                        >
        
                            <div className='flex justify-center '><Image src={info.img} width={500} isBlurred /></div>
                        </motion.div>
                    </div>

                    )
                }else{
                    return(
                        <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4" key={info.title}>
                        <motion.div 
                        ref={ref}
                        initial={{opacity:0, x:-200}}
                        animate={isInView ? {opacity:1,x:0}:{opacity:0, x:-200}}
                        transition={{duration:1.2}}>
        
                            <div className='flex justify-center '><Image src={info.img} width={500} isBlurred /></div>
                        </motion.div>
                        <div className='flex justify-center items-center p-3'>
        
                        
                        <motion.div
                        ref={ref}
                        initial={{opacity:0, y:20}}
                        animate={ isInView ? {opacity:1,y:0}:{opacity:0, y:20}}
                        transition={{duration:1.2}} 
                        >
                            <div className="flex justify-center items-center  p-3 order-last sm:order-first">
                                <div className='justify-items-center '>
        
                                <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '> {info.title}
                                </div>
                                <div className='mt-8 font-semibold'>{info.body} </div>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                    </div>
                    )
                }
            })}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">

                <div className="flex justify-center items-center  p-3">
                    <div className=' '>

                    <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>¿Que hace que esta página sea eficaz? </div>
                    <div className='mt-8 font-semibold'>Educarse con train it! es desarrollar la capacidad de analizar, interpretar y evaluar textos de manera objetiva y reflexiva permitiendo que los estudiantes puedan mejorar sus habilidades para comprender textos complejos identificar información relevante y sacar conclusiones fundamentales. Esto no solo les ayuda a enfrentar con éxito la prueba saber 11 sino que también es crucial para su formación académica y profesional
                    </div>
                    </div>
                </div>
                <div className='flex justify-center '><Image src={ponpon3.src} width={500} isBlurred /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">

                <div className='flex justify-center '><Image src={ponpon3.src} width={500} isBlurred /></div>
                <div className="flex justify-center items-center  p-3">
                    <div className=' '>

                    <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>Funcionalidades</div>
                    <div className='mt-8 font-semibold'>Nuestras características y desafíos convierten el aprendizaje en una experiencia divertida y similar a un juego. Donde aprenderás con material didáctico, simulacros y retroalimentación inmediata, y, por supuesto fácil de acceder en cualquier dispositivo.

                    </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">

                <div className="flex justify-center items-center  p-3">
                    <div className=' '>

                    <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>Avalado por la ciencia </div>
                    <div className='mt-8 font-semibold'>Por medio de la fusión de técnicas educativas avaladas por la investigación científica, logramos estrategias efectivas que incluye la práctica regular de ejercicios, el estudio espaciado, técnicas de respuestas y simulacros de las pruebas ICFES. </div>
                    </div>
                </div>
                <div className='flex justify-center '><Image src={ponpon3.src} width={500} isBlurred /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">

                <div className='flex justify-center '><Image src={ponpon3.src} width={500} isBlurred /></div>
                <div className="flex justify-center items-center  p-3">
                    <div className=' '>
                    <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>Nuestro objetivo </div>
                    <div className='mt-8 font-semibold'>Nuestro objetivo es reforzar tus habilidades de lectura crítica, proporcionandote un sin fin de herramientas intuitivas y accesibles. Aquí encontrarás módulos de lectura crítica diseñados específicamente para ayudarte a identificar y superar tus dificultades, junto con retroalimentación inmediata para que puedas mejorar continuamente. ¡Prepárate para alcanzar el éxito en tus pruebas y desarrollar habilidades esenciales para tu futuro académico y personal!</div>
                    </div>
                </div>
            </div> */}
        </div>
    </article>
    </>)
}