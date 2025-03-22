import master from '../../../public/master.webp';
import visa from '../../../public/visa.webp';
import american from '../../../public/american.webp';
import elo from '../../../public/elo.webp';
import  Image  from 'next/image';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';

const brands = [
    { name: "Mastercard", logo: master },
    { name: "Visa", logo: visa },
    { name: "Elo", logo: elo },
    { name: "Hipercard", logo: american },
];
    
export function Footer() {
    return (
        <footer>
           <section className="bg-amber-100 text-black py-16">
            <div className="container mx-auto px-4">
                <div className="border-b border-white pb-8">  
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Aceitamos</h4>
               
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {brands.map((item, index) => (
                            <div key= {index}  className='bg-white p-4 rounded-lg flex items-center justify-center'> 
                              <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={50}
                                quality={100}  
                                style={{
                                width:"auto",
                                height:"auto",
                                }} 
                                className='object-contain'
                             />
                           </div>
                         ))}
                    </div>
                </div> 
        
         

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                    <h3 className='text-4xl font-bold mb-2'>Doce Sabor</h3>
                        <p className='mb-4'>Oferecemos os melhores bolos e tortas feitos com os melhores ingredientes e com muito amor.</p>

                        <a href='#' className= 'bg-green-500 px-4 py-2 rounded-md '>Contato via WhatsApp</a>
                    </div>


                    <div> 
                   
                        <h3 className='text-2x1 font-semibold mb-2'>Contatos</h3>
                        <p>E-mail:docesabor@email.com</p>
                        <p>Telefone: (11) 9999-9999</p>
                        <p>Endereço:Rua Y, Centro ,CampoGrande |(11) 9999-9999 </p> 

                       
                    </div>

                    <div> 
                   
                        <h3 className='text-2x1 font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href='#' target='_blank'>
                            <FacebookLogo className='w-8 h-8'/>
                            </a>

                            <a href='#' target='_blank' >
                            <InstagramLogo className='w-8 h-8'/>
                            </a>

                            <a href='#' target='_blank' >
                            <YoutubeLogo className='w-8 h-8'/>
                            </a>
                        </div>
                       
                    </div>



                 
                </footer>
            </div>
            </section>
        </footer>
    );
}