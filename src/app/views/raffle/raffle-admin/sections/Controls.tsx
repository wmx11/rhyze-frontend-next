import Card, { CardHeader } from '@/app/components/Card';
import Container from '@/app/components/Container';
import H1 from '@/app/components/H1';
import Section from '@/app/components/Section';
import CreateNewRaffle from '@/app/components/raffle/admin-controls/CreateNewRaffle';
import EndRaffle from '@/app/components/raffle/admin-controls/EndRaffle';
import GrantAllowanceSevenUp from '@/app/components/raffle/admin-controls/GrantAllowanceSevenUp';
import RecyclePotPercentage from '@/app/components/raffle/admin-controls/RecyclePotPercentage';
import RemoveGradient from '@/app/components/raffle/admin-controls/RemoveGradient';
import SetPrizeGradient from '@/app/components/raffle/admin-controls/SetPrizeGradient';
import ToggleSaleSlate from '@/app/components/raffle/admin-controls/ToggleSaleSlate';

const Controls = () => {
  return (
    <Section>
      <Container>
        <H1 className="text-center mb-16">Controls</H1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>Create New Raffle</CardHeader>
            <CreateNewRaffle />
          </Card>
          <Card>
            <CardHeader>End Raffle</CardHeader>
            <EndRaffle />
          </Card>
          <Card>
            <CardHeader>Raffle ID</CardHeader>
            <GrantAllowanceSevenUp />
          </Card>
          <Card>
            <CardHeader>Toggle Sale State</CardHeader>
            <ToggleSaleSlate />
          </Card>
          <Card>
            <CardHeader>Recycle Pot Percentage</CardHeader>
            <RecyclePotPercentage />
          </Card>
          <Card>
            <CardHeader>Prize Gradient</CardHeader>
            <SetPrizeGradient />
          </Card>
          <Card>
            <CardHeader>Clear Gradient</CardHeader>
            <RemoveGradient />
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Controls;
