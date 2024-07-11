import { MainTodo } from "@/entities/todo";
import { ViewModelDataStructure } from "@/interfaceAdaptor/ViewModelDataStructure";
import { Spacer } from "../app/utils/Spacer";
import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
import { SetUseCaseButton } from "@/app/components/SetUseCaseButton";
import { Fleur_De_Leah } from "next/font/google";

type Props = {
  handleClick: (useCase: InputBoundaryInterface, id: number) => void;
  viewModelData: ViewModelDataStructure;
  deleteMain: InputBoundaryInterface;
  deleteSub: InputBoundaryInterface;
  addSub: InputBoundaryInterface;
};
export const View = ({
  handleClick,
  viewModelData,
  deleteMain,
  deleteSub,
  addSub,
}: Props) => {
  const allTodo = viewModelData.allTodo;
  return (
    <>
      <div>
        <Spacer size={10} horizontal={false} />
        {allTodo.map((mainTodo: MainTodo) => (
          <div key={mainTodo.id}>
            {mainTodo.title}
            <Spacer size={10} horizontal={true} />
            <SetUseCaseButton
              handleClick={handleClick}
              id={mainTodo.id}
              useCase={deleteMain}
            >
              完了
            </SetUseCaseButton>
            <SetUseCaseButton
              handleClick={handleClick}
              id={mainTodo.id}
              useCase={addSub}
            >
              SubのTODOに追加
            </SetUseCaseButton>
            <div style={{ display: "flex" }}>
              <Spacer size={30} horizontal={true} />
              <div>
                {mainTodo.subTodo && mainTodo.subTodo.length > 0 ? (
                  mainTodo.subTodo.map((subTodo) => (
                    <div key={subTodo.id} style={{ display: "flex" }}>
                      <div style={{ width: "30%" }}>{subTodo.todo}</div>
                      <Spacer size={10} horizontal={true} />
                      <div>緊急度：{subTodo.emergency}</div>
                      <Spacer size={5} horizontal={true} />
                      <SetUseCaseButton
                        handleClick={handleClick}
                        useCase={deleteSub}
                        id={subTodo.id}
                      >
                        完了
                      </SetUseCaseButton>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <Spacer size={30} horizontal={true} />
          </div>
        ))}
      </div>
    </>
  );
};
