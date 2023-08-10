import Card, { CardHeader } from '@/app/components/Card';
import Container from '@/app/components/Container';
import H1 from '@/app/components/H1';
import H2 from '@/app/components/H2';
import Section from '@/app/components/Section';
import React, { useState } from 'react';

const Controls = () => {
  const [recyclePotPercentage, setRecyclePotPercentage] = useState(0);
  const [gradientValue, setGradientValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [minPot, setMinPot] = useState(0);
  const [numberOfWinners, setNumberOfWinners] = useState(0);
  const [canWinMultipleTimes, setCanWinMultipleTimes] = useState('false');

  return (
    <Section>
      <Container>
        <H1 className="text-center mb-16">Controls</H1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>Create New Raffle</CardHeader>
            <div>
              <div className="mb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter price"
                    className="input input-bordered w-full text-neutral"
                    value={price}
                    onChange={(e) =>
                      setPrice(parseInt(e.currentTarget.value, 10))
                    }
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Minium Pot</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter minimum pot"
                    className="input input-bordered w-full text-neutral"
                    value={minPot}
                    onChange={(e) =>
                      setMinPot(parseInt(e.currentTarget.value, 10))
                    }
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Number of Winners</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter number of winners"
                    className="input input-bordered w-full text-neutral"
                    value={numberOfWinners}
                    onChange={(e) =>
                      setNumberOfWinners(parseInt(e.currentTarget.value, 10))
                    }
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      Can the same wallet win multiple times?
                    </span>
                  </label>
                  <select
                    className="select select-bordered text-neutral"
                    value={canWinMultipleTimes}
                    onChange={(e) =>
                      setCanWinMultipleTimes(e.currentTarget.value)
                    }
                  >
                    <option disabled selected>
                      Select Yes or No
                    </option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-warning btn-block">Create</button>
            </div>
          </Card>
          <Card>
            <CardHeader>End Raffle</CardHeader>
            <div>
              <button className="btn btn-warning btn-block">End Raffle</button>
            </div>
          </Card>
          <Card>
            <CardHeader>Raffle ID</CardHeader>
            <div className="space-y-8">
              <div>
                <H2>ID: 3</H2>
                <H2>Grant Allowance 7up</H2>
              </div>
              <button className="btn btn-warning btn-block">Approve</button>
            </div>
          </Card>
          <Card>
            <CardHeader>Toggle Sale State</CardHeader>
            <div className="space-y-8">
              <H2 className="underline">Sale is active</H2>
              <button className="btn btn-warning btn-block">Sale On/Off</button>
            </div>
          </Card>
          <Card>
            <CardHeader>Recycle Pot Percentage</CardHeader>
            <div className="space-y-8">
              <div className="form-control w-full">
                <input
                  type="number"
                  placeholder="Enter recycle pot percentage"
                  className="input input-bordered w-full text-neutral"
                  value={recyclePotPercentage}
                  onChange={(e) =>
                    setRecyclePotPercentage(parseInt(e.currentTarget.value, 10))
                  }
                />
              </div>
              <button className="btn btn-warning btn-block">Set %</button>
            </div>
          </Card>
          <Card>
            <CardHeader>Prize Gradient</CardHeader>
            <div className="space-y-8">
              <div className="form-control w-full ">
                <input
                  type="number"
                  placeholder="Enter Gradient"
                  className="input input-bordered w-full text-neutral"
                  value={gradientValue}
                  onChange={(e) =>
                    setGradientValue(parseInt(e.currentTarget.value, 10))
                  }
                />
              </div>
              <button className="btn btn-warning btn-block">
                Set Gradient
              </button>
            </div>
          </Card>
          <Card>
            <CardHeader>Clear Gradient</CardHeader>
            <div>
              <button className="btn btn-warning btn-block">
                Remove Gradient
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Controls;
