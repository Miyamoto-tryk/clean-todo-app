import { ViewModelDataStructure } from "@/interface_adaptor/ViewModelDataStructure";

export const View = (viewData: ViewModelDataStructure) => {
  const allNames = viewData.allNames;
  const displayMessage = viewData.displayMessage;

  return (
    <>
      <div>
        {allNames.map((name) => (
          <li key={name}>
            <div>{name}</div>
          </li>
        ))}
      </div>
      <div>{displayMessage}</div>
    </>
  );
};
