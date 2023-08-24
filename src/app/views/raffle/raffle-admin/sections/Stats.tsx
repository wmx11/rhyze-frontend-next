import Card, { CardHeader } from '@/app/components/Card';
import Container from '@/app/components/Container';
import H1 from '@/app/components/H1';
import Section from '@/app/components/Section';

const Stats = () => {
  return (
    <Section>
      <Container>
        <H1 className="text-center mb-16">Raffle Stats</H1>
        <div className="grid grid-cols md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>Current Players</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>All # Tix Sold</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader># of Players</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>Previous Winners</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>Previous Winner Prize Amnt</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>Mgmnt Vault</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>Wlt Raffle Tix Bal (This Round) </CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>Previous Winning Numbers</CardHeader>
            <div>0x...</div>
          </Card>
          <Card>
            <CardHeader>Raffle State</CardHeader>
            <div>Raffle Acitve</div>
          </Card>
          <Card>
            <CardHeader>Minimum Pot</CardHeader>
            <div>0</div>
          </Card>
          <Card>
            <CardHeader>Number of winners</CardHeader>
            <div>5</div>
          </Card>
          <Card>
            <CardHeader>Multiwin Enabled</CardHeader>
            <div>true</div>
          </Card>
          <Card>
            <CardHeader>Current Gradient</CardHeader>
            <div>...</div>
          </Card>
          <Card>
            <CardHeader>Current Recycle %</CardHeader>
            <div>0</div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Stats;
