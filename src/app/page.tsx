"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Controller } from "@/interface_adaptor/Controller";
import { PrismaUserRepository } from "@/framework_driver/PrismaUserRepository";
import prisma from "@/entities/prisma";
import { Presenter } from "@/interface_adaptor/Presenter";
import { SetStateAction, useEffect, useState } from "react";
import { ViewModelDataStructure } from "@/interface_adaptor/ViewModelDataStructure";
import { UseCaseInteractor } from "@/usecases/UseCaseInteractor";
import { View } from "@/framework_driver/View";
import { userAgentFromString } from "next/server";

export default function Home() {
  const [viewModel, setViewModel] = useState<ViewModelDataStructure>({
    allNames: [],
    displayMessage: "",
    id: [],
  });
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputId, setInputId] = useState(0);

  const userRepository = new PrismaUserRepository();
  const presenter = new Presenter();
  const useCaseInteractor = new UseCaseInteractor(userRepository, presenter);
  const controller = new Controller(
    useCaseInteractor,
    inputName,
    inputEmail,
    "GET",
    inputId
  );

  const handleClick = async (control: string) => {
    controller.setEmail(inputEmail);
    controller.setName(inputName);
    controller.setControl(control);
    await controller.exeUseCase();
    setViewModel(presenter.viewModel);
  };
  const handleCheckbox = (event: {
    target: { value: string; checked: any };
  }) => {
    const id = parseInt(event.target.value);
    if (event.target.checked) {
      setInputId(id);
    } else {
      setInputId(0);
    }
  };
  return (
    <>
      <div>
        <div>
          your name
          <input
            type="text"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          ></input>
        </div>
        <div>
          your email
          <input
            type="text"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          ></input>
        </div>

        <button
          type="submit"
          onClick={() => {
            handleClick("POST");
          }}
        >
          追加
        </button>
        <button
          type="submit"
          onClick={() => {
            handleClick("GET");
          }}
        >
          一覧を表示
        </button>
        <button
          type="submit"
          onClick={() => {
            handleClick("DELETE");
          }}
        >
          削除
        </button>
        <button
          type="submit"
          onClick={() => {
            handleClick("PUT");
          }}
        >
          ユーザ情報更新
        </button>
      </div>

      <View viewModelData={viewModel} handlCheckbox={handleCheckbox} />
    </>
  );
}
