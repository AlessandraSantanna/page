import React from 'react';
import Image from "next/image";
import about1img from '../../../public/tortamorango.png';
import bombomimg from '../../../public/docinhos.png';
import { Check, MapPin } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

export function About() {
    return (
        <section className="bg-amber-100 py-16">
            <div className="container  px-4 mx-auto ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-up-right" data-aos-delay="300"> 
                 
                 <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                     <Image
                         src={about1img}
                         alt="foto do bolo"
                         fill
                         quality={100}
                         className="object-cover hover:scale-110 duration-300"
                         priority
                     />
                 </div>
           
                 <div className="absolute w-40 h-40 right-4 -bottom-8 border-4  overflow-hidden rounded-lg
                  border-white">
                     <Image
                         src={bombomimg}
                         alt="docinhos"
                         fill
                         quality={100}
                         priority
                     />
                 </div>
             </div>
                 <div className='space y-6  mt-10'  data-aos="fade-up-left" data-aos-delay="300">
                     <h2 className='text-4xl font-bold py-6'>Sobre nós</h2>
                     <p >
                         Aqui na Doce Sabor, nós acreditamos que a vida é muito curta
                         para não se deliciar com os prazeres que ela nos oferece. Por isso, 
                         nos dedicamos a criar doces e bolos que são verdadeiras obras de arte, 
                         feitas com ingredientes de alta qualidade e muito amor.
                     </p>
                      <ul className='space-y-4 py-6'>
                         <li className='flex items-center gap-2'>
                             <Check className='text-red-500' />
                              Entrega a Domicílio
                         </li>

                         <li className='flex items-center gap-2'>
                             <Check className='text-red-500' />
                              Bolos Personalizados
                         </li>

                         <li className='flex items-center gap-2'>
                             <Check className='text-red-500' />
                              Bolos e Tortas Sob Encomenda
                         </li>
                     </ul>

                     <div className='flex gap-4'>

                        <a target="_blank" href={"https://wa.me/5511999999999?Olá! Vim pelo site e gostaria de mais informações"}rel="noreferrer"
                         className='bg-[#E84C3D] text-white  flex  items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>     
                             <WhatsappLogo className='w-5 h-5 text-white'/>
                                 Contato via WhatsApp 
                         </a>


                         <a href="#"
                         className='bg-[#E84C3D] text-white  flex  items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>     
                             <MapPin className='w-5 h-5 text-white'/>
                                 Endereço da Loja 
                         </a>
                     </div>


                 </div>
        

             </div>
              
              
            </div>      
        </section>
    )
}
