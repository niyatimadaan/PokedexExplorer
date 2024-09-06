import MenuTabs from '@/components/tabs';
import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <img src="https://www.thecommoncollector.com.au/cdn/shop/collections/200px-Chase_Pikachu_ASC.png?v=1653047277" 
      alt="Pokedex Explorer"  height={250} style={{width:"100%"}}/>
      <MenuTabs/>
    </div>
  );
}
