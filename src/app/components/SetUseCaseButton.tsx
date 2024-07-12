import React, { ReactNode } from "react";
import { InputBoundaryInterface } from "../../usecases/InputBoundaryInterface";

type Props = {
  handleClick: (useCase: InputBoundaryInterface, id: number) => void;
  useCase: InputBoundaryInterface;
  id: number;
  children: ReactNode;
};

export const SetUseCaseButton = ({
  handleClick,
  useCase,
  id,
  children,
}: Props) => {
  return (
    <button
      type="submit"
      style={{ fontSize: "18px" }}
      onClick={() => handleClick(useCase, id)}
    >
      {children}
    </button>
  );
};
