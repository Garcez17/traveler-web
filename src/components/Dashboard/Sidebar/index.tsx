import Image from 'next/image';
import { FiMapPin, FiMessageSquare, FiPower } from 'react-icons/fi';
import { Container } from '../../../styles/components/Dashboard/DashSidebar/styles';

export function DashSidebar(): JSX.Element {
  return (
    <Container>
      <header>
        <Image src="/sidebarLogo.svg" height={48} width={22} />
      </header>
      <section>
        <FiMapPin />
        <Image src="/categoryIconOn.svg" height={24} width={24} color="#fff" />
        <FiMessageSquare />
      </section>
      <footer>
        <FiPower />
      </footer>
    </Container>
  );
}
