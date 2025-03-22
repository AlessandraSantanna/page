import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Depoimentos } from "./_components/depoimentos";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main>
   
    <Hero/>
    <About/> 
    <Services/>
    <Depoimentos/>
    <Footer/>

     
    </main>
  );
}
