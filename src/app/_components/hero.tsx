import {WhatsappLogo}from '@phosphor-icons/react/dist/ssr'
import boloimg from '../../../public/bolocolorido.png'
import bombomimg from '../../../public/docinhos.png'
import next from 'next'
import Image from 'next/image'

export function Hero() {
    return (
      <section className="relative w-full ">
        {/* Mobile/Tablet Background Hero */}
        <div className="block lg:hidden relative h-[500px] w-full ">
          <Image
            src={boloimg}
            alt="Bolo colorido"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"   />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 text-white ">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 ">
              Bolos e tortas feitos com amor e os melhores ingredientes
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-md">
              Oferecemos os melhores bolos e tortas feitos com os melhores ingredientes e com muito amor.
            </p>
            <a
              target="_blank"
              href="https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de mais informações"
              rel="noreferrer"
              className="bg-green-500 text-white flex items-center gap-2 px-4 py-2 rounded-md"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato via WhatsApp
            </a>
            <p className="text-sm mt-4">
              <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
            </p>
            </div>
        </div>
  
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 items-center gap-8 bg-fuchsia-300 text-white px-8 py-20 ">
          <div className="space-y-6" data-aos="fade-up-right" data-aos-delay="300">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
              Bolos e tortas feitos com amor e os melhores ingredientes
            </h1>
            <p className="text-lg">
              Oferecemos os melhores bolos e tortas feitos com os melhores ingredientes e com muito amor.
            </p>
            <a
              target="_blank"
              href="https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de mais informações"
              rel="noreferrer"
              className="bg-green-500 text-white flex items-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato via WhatsApp
            </a>
            <p className="text-sm mt-4">
              <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
            </p>
          </div>
  
          <div className="relative h-[400px] xl:h-[500px] w-full">
            <Image
              src={boloimg}
              alt="Bolo colorido"
              className="object-contain"
              fill
              priority
            />
          </div>
        </div>
      </section>
    )
  }