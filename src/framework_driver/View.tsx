import { ViewModelDataStructure } from "@/interface_adaptor/ViewModelDataStructure";

export const View = ({ allNames, displayMessage }: ViewModelDataStructure) => {
  return (
    <>
      <div>
        {allNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </div>
      <div>{displayMessage}</div>
    </>
  );
};
