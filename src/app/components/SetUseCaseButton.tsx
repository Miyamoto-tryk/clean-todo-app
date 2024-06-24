import React, { ReactNode } from "react";
import { InputBoundaryInterface } from "../../usecases/InputBoundaryInterface";

type Props = {
  handleClick: (useCase: InputBoundaryInterface) => void;
  useCase: InputBoundaryInterface;
  children: ReactNode;
};

export const SetUseCaseButton = ({ handleClick, useCase, children }: Props) => {
  return (
    <button type="submit" onClick={() => handleClick(useCase)}>
      {children}
    </button>
  );
};
