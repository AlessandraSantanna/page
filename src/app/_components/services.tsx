"use client"
import useEmblaCarousel from "embla-carousel-react"
import { CarTaxiFront,CakeSlice,Cake, Dessert, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"


const services=[
    {
    title:"Entrega a Domicílio",
    description:"Serviço de entrega de bolos, tortas e outros produtos em domicílio ou no local do evento.",
    duration:"1h",
    price:"R$ 10,00",
    icon:<CarTaxiFront />,
    linkText:"Olá, vi no site sobre a entrega de bolos e tortas. Gostaria de saber mais informações."

},
{
    title:"Atendimento Eficaz",
    description:"Atendimento atencioso e personalizado para ajudar os clientes a escolherem os melhores produtos para suas necessidades.",
    duration:"1h",
    price:" Grátis",
    icon:<CakeSlice/>,
    linkText:"Olá, vi no site sobre a entrega de bolos e tortas. Gostaria de saber mais informações."
  
},
{
    title:"Decoração de Bolos" ,
    description:"Serviço de decoração de bolos personalizados com pasta americana, chantilly, frutas e outros elementos decorativos.",
    duration:"1h",
    price:" Grátis",
    icon:<Dessert/>,
    linkText:"Olá, vi no site sobre a entrega de bolos e tortas. Gostaria de saber mais informações."
  
},
{
    title:"Bolos e tortas Sob Encomenda" ,
    description:"Produção de bolos e tortas personalizadas para aniversários, casamentos, eventos corporativos e outras celebrações.",
    duration:"1h",
    price:" Grátis",
    icon:<Cake/>,
    linkText:"Olá, vi no site sobre a entrega de bolos e tortas. Gostaria de saber mais informações."
  
}
]



export function Services(){
    const [emblaRef, emblaApi] = useEmblaCarousel({
         loop: false,
         align:'start',
         slidesToScroll: 1,
         breakpoints: {
            " (min-width: 768px)": { slidesToScroll: 3}
        }   
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }
  

    return(
        <section className="bg-white py-16">
            <div className= "container mx auto px-4">
                
                    <h2 className="text-4xl font-bold mb-12">Serviços</h2>

             <div className="relative">

                    <div className="overflow-hidden"  ref={emblaRef}>
                        <div className="flex">
                            {services.map((item,index)=>(
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 items-start justify-between">
                                           
                                           
                                            <div className="flex gap-3">
                                                <span className="text-3x1"> {item.icon}</span>
                                            
                                                <div>
                                                    <h3 className="text-2xl  my-1 font-bold">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                             <Clock className="w-5 h-5" />
                                             <span> {item.duration}</span>
                                            </div>

                                            <a target="_blank" href={"https://wa.me/5511999999999?Olá! Vim pelo site e gostaria de mais informações"}rel="noreferrer"
                                             className="flex items-center gap-2 justify-center hover:bg-green-500   text-white px-4 py-2 rounded-md duration-300">
                                        <WhatsappLogo className="w-5 h-5"/>
                                        Entrar Em Contato
                                    </a>

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