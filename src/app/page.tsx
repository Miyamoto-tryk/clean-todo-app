"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Controller } from "@/interfaceAdaptor/Controller";
import { PrismaUserRepository } from "@/frameworkDriver/PrismaUserRepository";

import { Presenter } from "@/interfaceAdaptor/Presenter";
import { useEffect, useState } from "react";
import { ViewModelDataStructure } from "@/interfaceAdaptor/ViewModelDataStructure";
import { PostMainCaseInteractor } from "@/usecases/useCaseInteractor/PostMainUseCaseInteractor";
import { AddSubCaseInteractor } from "@/usecases/useCaseInteractor/AddSubUseCaseInteractor";
import { ReadCaseInteractor } from "@/usecases/useCaseInteractor/ReadUseCaseInteractor";
import { DeleteSubCaseInteractor } from "@/usecases/useCaseInteractor/DeleteSubUseCaseInteractor";
import { DeleteMainCaseInteractor } from "@/usecases/useCaseInteractor/DeleteMainUseCaseInteractor";
import { View } from "@/frameworkDriver/View";
import { SetEmergencyButton } from "./components/SetEmergencyButton";
import { SetUseCaseButton } from "./components/SetUseCaseButton";

import { InputBoundaryInterface } from "@/usecases/InputBoundaryInterface";

export default function Home() {
  const [viewModel, setViewModel] = useState<ViewModelDataStructure>({
    allTodo: [],
  });
  const [inputText, setInputText] = useState("");
  const [inputEmergency, setInputEmergency] = useState(0);
  const [inputId, setInputId] = useState(0);

  const userRepository = new PrismaUserRepository();
  const presenter = new Presenter();
  //ユースケース　インテラクター
  const postMainUseCase = new PostMainCaseInteractor(userRepository, presenter);
  const readUseCase = new ReadCaseInteractor(userRepository, presenter);
  const addSubUseCase = new AddSubCaseInteractor(userRepository, presenter);
  const deleteSubUseCase = new DeleteSubCaseInteractor(
    userRepository,
    presenter
  );
  const deleteMainUseCase = new DeleteMainCaseInteractor(
    userRepository,
    presenter
  );
  //コントローラー
  const controller = new Controller(
    readUseCase,
    inputText,
    inputId,
    inputEmergency
  );
  //トリガー
  const setEmergencyClick = (emergency: number) => {
    setInputEmergency(emergency);
  };
  const setUseCaseClick = async (
    useCase: InputBoundaryInterface,
    id: number
  ) => {
    setInputId(id);
    controller.setId(id);
    controller.setUseCase(useCase);
    await controller.exeUseCase();
    setViewModel(presenter.viewModel);
  };
  // const handleCheckbox = (event: {
  //   target: { value: string; checked: any };
  // }) => {
  //   const id = parseInt(event.target.value);
  //   if (event.target.checked) {
  //     setInputId(id);
  //   } else {
  //     setInputId(0);
  //   }
  // };
  useEffect(() => {
    controller.exeUseCase();
  }, []);
  return (
    <>
      <div>
        <div>
          TODO:
          <input
            type="text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </div>
        <div>
          <SetEmergencyButton handleClick={setEmergencyClick} />
        </div>

        <SetUseCaseButton
          useCase={readUseCase}
          id={0}
          handleClick={setUseCaseClick}
        >
          一覧を取得
        </SetUseCaseButton>
        <SetUseCaseButton
          useCase={postMainUseCase}
          id={0}
          handleClick={setUseCaseClick}
        >
          MainのTODOを追加
        </SetUseCaseButton>
      </div>

      <View
        viewModelData={viewModel}
        handleClick={setUseCaseClick}
        deleteMain={deleteMainUseCase}
        deleteSub={deleteSubUseCase}
        addSub={addSubUseCase}
      />
    </>
  );
}
