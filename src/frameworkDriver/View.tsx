import { MainTodo } from "@/entities/todo";
import { ViewModelDataStructure } from "@/interfaceAdaptor/ViewModelDataStructure";
import { Spacer } from "../app/utils/Spacer";
import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
import { SetUseCaseButton } from "@/app/components/SetUseCaseButton";

type Props = {
  handleClick: (useCase: InputBoundaryInterface) => void;
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
        {allTodo.map((mainTodo: MainTodo) => (
          <div key={mainTodo.id}>
            {mainTodo.title}
            <SetUseCaseButton handleClick={handleClick} useCase={deleteMain}>
              完了
            </SetUseCaseButton>
            <SetUseCaseButton handleClick={handleClick} useCase={addSub}>
              SubのTODOに追加
            </SetUseCaseButton>
            <div>
              <Spacer size={5} />
              {mainTodo.subTodo && mainTodo.subTodo.length > 0 ? (
                mainTodo.subTodo.map((subTodo) => (
                  <div key={subTodo.id}>
                    {subTodo.todo}
                    <Spacer size={5} />
                    <div>緊急度：{subTodo.emergency}</div>
                    <Spacer size={5} />
                    <SetUseCaseButton
                      handleClick={handleClick}
                      useCase={deleteSub}
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
        ))}
      </div>
      <div></div>
    </>
  );
};
