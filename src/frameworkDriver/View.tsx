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
      <div style={{ display: "flex", fontSize: "18px" }}>
        <Spacer size={30} horizontal={true} />
        <div
          style={{
            display: "grid",
            gridGap: "20px",
          }}
        >
          {allTodo.map((mainTodo: MainTodo) => (
            <div
              key={mainTodo.id}
              style={{
                display: "grid",
                gridTemplateColumns: "5fr 4fr",
                backgroundColor: "GrayText",
              }}
            >
              {/* (1,1) */}
              <div
                style={{
                  fontSize: "24px",
                  display: "flex",
                  backgroundColor: "CaptionText",
                  color: "black",
                }}
              >
                <Spacer size={10} horizontal={true} />
                {mainTodo.title}
              </div>
              {/* (1,2) */}
              <div
                style={{
                  display: "flex",
                  backgroundColor: "CaptionText",
                  color: "black",
                }}
              >
                <SetUseCaseButton
                  handleClick={handleClick}
                  id={mainTodo.id}
                  useCase={deleteMain}
                >
                  完了
                </SetUseCaseButton>
                <Spacer size={20} horizontal={true}></Spacer>
                <SetUseCaseButton
                  handleClick={handleClick}
                  id={mainTodo.id}
                  useCase={addSub}
                >
                  SubのTODOに追加
                </SetUseCaseButton>
                <Spacer size={20} horizontal={true}></Spacer>
              </div>
              {/* (2,1) */}
              <div style={{ display: "flex" }}>
                <Spacer size={30} horizontal={true} />
                <div>
                  {mainTodo.subTodo && mainTodo.subTodo.length > 0 ? (
                    mainTodo.subTodo.map((subTodo) => (
                      <div style={{ height: "40px" }} key={subTodo.id}>
                        <Spacer size={10} horizontal={false} />
                        <div>{subTodo.todo}</div>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {/* (2,2) */}
              <div>
                {mainTodo.subTodo && mainTodo.subTodo.length > 0 ? (
                  mainTodo.subTodo.map((subTodo) => (
                    <div style={{ height: "40px" }} key={subTodo.id}>
                      <Spacer size={10} horizontal={false} />
                      <div style={{ display: "flex" }}>
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
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
