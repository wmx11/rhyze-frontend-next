import React, { FC, PropsWithChildren } from 'react';
import H1 from './H1';
import H2 from './H2';

type Props = {
  h1?: string;
  h2?: string;
} & PropsWithChildren;

const TextBlock: FC<Props> = ({ h1, h2, children }) => {
  return (
    <div className="space-y-4 animate">
      {h1 && <H1>{h1}</H1>}
      {h2 && <H2>{h2}</H2>}
      <div className="text-lg">{children}</div>
    </div>
  );
};

export default TextBlock;
