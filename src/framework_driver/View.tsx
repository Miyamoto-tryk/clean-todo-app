import { ViewModelDataStructure } from "@/interface_adaptor/ViewModelDataStructure";

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
  const allNames = viewModelData.allNames;
  const displayMessage = viewModelData.displayMessage;
  const id = viewModelData.id;

  const checked = viewModelData.id.map((elm) => false);

  return (
    <>
      <div>
        {allNames.map((name, index) => (
          <li key={index}>
            <input
              type="checkbox"
              value={id[index]}
              onChange={(event) => {
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
