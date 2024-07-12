import React from "react";

type Props = {
  handleClick: (emergency: number) => void;
};
export const SetEmergencyButton = ({ handleClick }: Props) => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", fontSize: "18px" }}
      >
        <div>
          <button
            type="submit"
            onClick={() => {
              handleClick(0);
            }}
          >
            緊急度:0
          </button>
          やったらえらい
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              handleClick(1);
            }}
          >
            緊急度:1
          </button>
          そのうちやらなきゃ
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              handleClick(2);
            }}
          >
            緊急度:2
          </button>
          なる早でやる
        </div>
      </div>
    </>
  );
};
