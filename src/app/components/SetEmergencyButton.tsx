import React from "react";

type Props = {
  handleClick: (emergency: number) => void;
};
export const SetEmergencyButton = ({ handleClick }: Props) => {
  return (
    <>
      <div>
        <button
          type="submit"
          onClick={() => {
            handleClick(0);
          }}
        >
          緊急度:0
        </button>
        <button
          type="submit"
          onClick={() => {
            handleClick(1);
          }}
        >
          緊急度:1
        </button>
        <button
          type="submit"
          onClick={() => {
            handleClick(2);
          }}
        >
          緊急度:2
        </button>
      </div>
    </>
  );
};
