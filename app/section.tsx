import { Image } from "@nextui-org/react";
import {motion, useInView, useScroll} from "framer-motion"
import React, { useRef } from "react";
import ponpon from "@/public/img/pompom.webp"
import ponpon2 from "@/public/img/pompom2.webp"
import ponpon3 from "@/public/img/pompom3.png"

export default function SectionHome(){
    const ref = useRef(null);
    const { scrollY } = useScroll({target: ref, offset: ["end end", "start start"]});
    const isInView = useInView(ref); 

  
 
    return(<>
        <article>
        <div className="flex flex-wrap gap-56 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">
                <div className="flex justify-center items-center  p-3">
                    <div className=' '>
                    <motion.div 
                    ref={ref}
                    initial={{opacity:0, y:20}}
                    animate={ {opacity:1,y:0}}
                    transition={{duration:1.2}}
                    >
                    <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>titulo ****</div>
                    <div className='mt-8 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi eius vitae culpa nisi. Iure incidunt optio deserunt facere eveniet quo similique odit aperiam possimus eos sequi, sunt maiores fugiat.</div>

                    </motion.div>

                    </div>
                </div>
                <motion.div
                    ref={ref}
                    initial={{opacity:0, x:200}}
                    animate={ {opacity:1,x:0}}
                    transition={{duration:1.2}}
                >

                    <div className='flex justify-center '><Image src={ponpon.src} width={500} isBlurred /></div>
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">
                <motion.div 
                ref={ref}
                initial={{opacity:0, x:-200}}
                animate={ {opacity:1,x:0}}
                transition={{duration:1.2}}>

                    <div className='flex justify-center '><Image src={ponpon2.src} width={500} isBlurred /></div>
                </motion.div>
                <div className='flex justify-center items-center p-3'>

                
                <motion.div
                ref={ref}
                initial={{opacity:0, y:20}}
                animate={ {opacity:1,y:0}}
                transition={{duration:1.2}} 
                >
                    <div className="flex justify-center items-center  p-3 order-last sm:order-first">
                        <div className='justify-items-center '>

                        <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>titulo ****</div>
                        <div className='mt-8 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi eius vitae culpa nisi. Iure incidunt optio deserunt facere eveniet quo similique odit aperiam possimus eos sequi, sunt maiores fugiat.</div>
                        </div>
                    </div>
                </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center mb-4">

                <div className="flex justify-center items-center  p-3">
                    <div className=' '>

                    <div className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl '>titulo ****</div>
                    <div className='mt-8 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi eius vitae culpa nisi. Iure incidunt optio deserunt facere eveniet quo similique odit aperiam possimus eos sequi, sunt maiores fugiat.</div>
                    </div>
                </div>
                <div className='flex justify-center '><Image src={ponpon3.src} width={500} isBlurred /></div>
            </div>
        </div>
    </article>
    </>)
}