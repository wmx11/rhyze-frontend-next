import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import { RAFFLE_SET_PRIZE_GRADIENT } from '@/app/utils/web3/constants';
import { useEffect, useState } from 'react';
import ErrorMessage from '../../ErrorMessage';

const SetPrizeGradient = () => {
  const MAX_PERCENTAGE = 100;
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [gradientValue, setGradientValue] = useState('');
  const [error, setError] = useState('');

  const { mutateAsync, isLoading } = useRhyzeRaffleContractWrite({
    method: RAFFLE_SET_PRIZE_GRADIENT,
  });

  const handleGradientChange = () => {
    const gradientValues = gradientValue
      .trim()
      .split(',')
      .map((item) => parseFloat(item));

    if (gradientValues.length && gradientValues.includes(NaN)) {
      setError('Some values are not numbers');
      return;
    } else {
      setError('');
    }

    const total = gradientValues.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    if (total > MAX_PERCENTAGE) {
      setError(`Sum of gradient values exceed ${MAX_PERCENTAGE}`);
    } else {
      setError('');
    }

    setTotalPercentage(total);
  };

  useEffect(() => {
    handleGradientChange();
  }, [gradientValue]);

  /**
   * @params gradient uint256[] array of gradients
   */
  const handleSetPrizeGradient = () => {
    mutateAsync({
      args: [
        gradientValue
          .trim()
          .split(',')
          .map((item) => item.toString()),
      ],
    });
  };

  return (
    <>
      <div className="space-y-8">
        <div>
          <p>Total percentage: {totalPercentage}% </p>
          <ErrorMessage error={error} />
        </div>
        <div className="form-control w-full ">
          <input
            type="text"
            placeholder="Enter Gradient"
            className="input input-bordered w-full text-neutral"
            value={gradientValue}
            onChange={(e) => setGradientValue(e.currentTarget.value)}
          />
        </div>
        <button
          className="btn btn-warning btn-block"
          disabled={isLoading || !!error}
          onClick={handleSetPrizeGradient}
        >
          {isLoading && <span className="loading loading-ring"></span>}Set
          Gradient
        </button>
      </div>
    </>
  );
};

export default SetPrizeGradient;
