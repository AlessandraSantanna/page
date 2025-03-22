"use client"
import useEmblaCarousel from "embla-carousel-react"
import { CarTaxiFront,CakeSlice,Cake, Dessert, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import tutor1 from '../../../public/tutor1.jpg'
import tutor2 from '../../../public/tutor2.jpg'
import Image from 'next/image'


const depoimentos=[
    {
        content: "Estava procurando um bolo especial para o aniversário da minha filha, e encontrei muito mais do que esperava. O bolo de chocolate com morangos era simplesmente divino, com uma massa fofinha e um recheio que derretia na boca.",
        author: "Paulo Henrique",
        role: "Cliente",
        image: tutor1,
    },
    {
        content: "O atendimento foi impecável, desde o primeiro contato até a entrega. A equipe foi super atenciosa e prestativa, me ajudando a escolher o bolo perfeito para a ocasião. E o melhor de tudo: o bolo chegou impecável, no horário combinado.",
        author: "Aurora Francisca",
        role: "Cliente",
        image: tutor2,
    },
];



export function Depoimentos(){
    const [emblaRef, emblaApi] = useEmblaCarousel({
         loop: true,
       
       
          
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }
  

    return(
        <section className="bg-fuchsia-300 py-16">
            <div className= "container mx auto px-4">
                
                    <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos Nossos Clientes</h2>

             <div className="relative max-w-4xl mx-auto">

                    <div className="overflow-hidden"  ref={emblaRef}>
                        <div className="flex">
                            {depoimentos.map((item,index)=>(
                                <div key={index} className="flex-[0_0_100%] min-w-0  px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        
                                        <div className="flex flex-col items-center text-center space-y-4">

                                           <div className="relative w-24 h-24 ">

                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className="object-cover rounded-full"
                                                />
                                            </div>

                                            <p className="text-sm text-gray-400">{item.content} </p>
                                            <p className="font-bold"> {item.author} </p>
                                            <p className="text-sm text-gray-400">{item.role} </p>


                                        </div>
                                    </article>
                               
                                </div>
                                
                            ))}
                        </div>
                    </div>

                <button
                    className='bg-white flex items-center justify-center rounded-full shadow-1g w-10 h-10 absolute
                    top-1/2 left-3 transform -translate-y-1/2 -translate-x-1/2 z-10'
                    onClick={scrollPrev}
                >
                    <ChevronLeft className='w-6 h-6 text-gray-600'/>
                </button>

                <button
                    className='bg-white flex items-center justify-center rounded-full shadow-1g w-10 h-10 absolute
                    top-1/2 -right-6 transform -translate-y-1/2 -translate-x-1/2 z-10'
                    onClick={scrollNext}
                >
                    <ChevronRight className='w-6 h-6 text-gray-600'/>
                </button>



                </div>


            </div>
    </section>
    )
}