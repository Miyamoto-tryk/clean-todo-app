import { MainTodo } from "@/entities/todo";
import { ViewModelDataStructure } from "@/interfaceAdaptor/ViewModelDataStructure";
import { Spacer } from "../app/utils/Spacer";
import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";
import { SetUseCaseButton } from "@/app/components/SetUseCaseButton";
import { Fleur_De_Leah } from "next/font/google";
import styled from "styled-components";

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const SubGridTodo = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  border-left: 1px solid white;
  border-right: 1px solid white;
`;
const GridItem = styled(FlexRow)`
  border-bottom: 1px solid white;
`;
const MainGridTodo = styled.div`
  display: grid;
  grid-gap: 20px;
`;
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
      <FlexRow style={{ fontSize: "18px" }}>
        <Spacer size={30} horizontal={true} />
        <MainGridTodo>
          {allTodo.map((mainTodo: MainTodo) => (
            <SubGridTodo key={mainTodo.id}>
              <GridItem
                style={{
                  fontSize: "24px",
                  backgroundColor: "CaptionText",
                  color: "black",
                }}
              >
                <Spacer size={10} horizontal={true} />
                {mainTodo.title}
              </GridItem>

              <FlexCol style={{ backgroundColor: "CaptionText" }}>
                <Spacer size={2} />
                <GridItem
                  style={{
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
                </GridItem>
                <Spacer size={2} />
              </FlexCol>

              {mainTodo.subTodo && mainTodo.subTodo.length > 0 ? (
                mainTodo.subTodo.map((subTodo) => (
                  <>
                    <GridItem
                      key={subTodo.todo}
                      style={{ backgroundColor: "GrayText" }}
                    >
                      <Spacer size={10} horizontal={true} />
                      {subTodo.todo}
                    </GridItem>
                    <GridItem
                      key={subTodo.id}
                      style={{ backgroundColor: "GrayText" }}
                    >
                      <div>緊急度：{subTodo.emergency}</div>
                      <Spacer size={5} horizontal={true} />
                      <SetUseCaseButton
                        handleClick={handleClick}
                        useCase={deleteSub}
                        id={subTodo.id}
                      >
                        完了
                      </SetUseCaseButton>
                    </GridItem>
                  </>
                ))
              ) : (
                <></>
              )}
            </SubGridTodo>
          ))}
          <SubGridTodo></SubGridTodo>
        </MainGridTodo>
        <Spacer size={30} horizontal={true} />
      </FlexRow>
    </>
  );
};
