import { DashHeader } from './Header';
import { ContainerDashboardProps } from './interface';
import { DashSidebar } from './Sidebar';

import { Container } from '../../styles/components/Dashboard/styles';

export function ContainerDashboard({
  children,
}: ContainerDashboardProps): JSX.Element {
  return (
    <Container>
      <DashSidebar />
      <main>
        <DashHeader />
        {children}
      </main>
    </Container>
  );
}
