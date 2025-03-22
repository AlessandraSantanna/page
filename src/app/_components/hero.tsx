import {WhatsappLogo}from '@phosphor-icons/react/dist/ssr'
import boloimg from '../../../public/bolocolorido.png'
import bombomimg from '../../../public/docinhos.png'
import next from 'next'
import Image from 'next/image'

export function Hero(){
    return(
        <section className="bg-fuchsia-300 text-white relative overflow-hidden">
                <div>
                    <Image 
                    src={boloimg} 
                    alt="Bolo colorido"
                    className='object-cover opacity-40 lg:hidden'
                    layout='fill'
                    quality={100}
                    sizes='100vw'
                    priority
                    />
                    <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
                </div>
            <div className='container mx-auto px-4 pt-16  md:pb-0 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"data-aos="fade-down" >
                        Bolos e tortas feitos com amor e os melhores ingredientes
                        
                        </h1>
                        <p className="lg:text-1g"data-aos="fade-right">
                            Oferecemos os melhores bolos e tortas feitos com os melhores ingredientes e com muito amor.
                        </p>
                        
                        
                        <div >
                        <a data-aos="fade-up" target="_blank" href={"https://wa.me/5511999999999?Olá! Vim pelo site e gostaria de mais informações"}rel="noreferrer"
                         className='bg-green-500 text-white  flex  items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>     
                             <WhatsappLogo className='w-5 h-5 text-white'/>
                                 Contato via WhatsApp 
                            </a>
                        </div>
                        
                        
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md"> 5%</b> de desconto na primeira compra.
                            </p>
                            <div className='flex mt-4'>
                                <div className='w25 hidden lg:block'>
                                 
                                 
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='hidden md:block  h-[500px] w-[500px] relative'>
                           <Image 
                           src={boloimg} 
                           alt="Bolo colorido"
                           className='object-contain'
                           fill
                           sizes='(max-width: 768px) 0vw, 50vw'
                           quality={100}
                           priority
                           />
                        </div>

                </article>

            </div>
            
        </section>
    )
}
