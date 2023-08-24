import React, { FC } from 'react';

type ErrorMessageProps = {
  error?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <p className="mb-4 text-red-500">{error}</p>;
};

export default ErrorMessage;
