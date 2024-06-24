import { ViewModelDataStructure } from "@/interfaceAdaptor/ViewModelDataStructure";
import { useState } from "react";

type Props = {
  viewModelData: ViewModelDataStructure;
  handlCheckbox: (event: {
    target: {
      value: string;
      checked: any;
    };
  }) => void;
};
export const View = ({ viewModelData, handlCheckbox }: Props) => {
  const [selectedUser, setSelectedUser] = useState<number>();
  const allNames = viewModelData.allNames;
  const displayMessage = viewModelData.displayMessage;
  const id = viewModelData.id;

  return (
    <>
      <div>
        {allNames.map((name, index) => (
          <li key={index}>
            <input
              type="radio"
              value={id[index]}
              checked={selectedUser === id[index]}
              onChange={(event) => {
                setSelectedUser(id[index]);
                handlCheckbox(event);
              }}
            ></input>
            {name}
          </li>
        ))}
      </div>
      <div>{displayMessage}</div>
    </>
  );
};
