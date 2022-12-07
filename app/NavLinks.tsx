import { CATEGORIES } from '../constants';
import Navlink from './Navlink';
import { usePathname } from 'next/navigation';

type Props = {};

function NavLinks({}: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b '>
      {CATEGORIES.map((category) => (
        <Navlink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
