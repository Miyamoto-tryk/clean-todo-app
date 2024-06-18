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
  const initialViewModel: ViewModelDataStructure = {
    allNames: ["name"],
    displayMessage: "hello",
  };
  const [viewModel, setViewModel] = useState(initialViewModel);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const userRepository = new PrismaUserRepository();
  const presenter = new Presenter();
  const useCaseInteractor = new UseCaseInteractor(userRepository, presenter);

  const controller = new Controller(
    useCaseInteractor,
    inputName,
    inputEmail,
    "POST",
    0
  );
  const handleClick = async () => {
    controller.setEmail(inputEmail);
    controller.setName(inputName);
    await controller.exeUseCase();
    setViewModel(presenter.viewModel);
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
            handleClick();
          }}
        >
          追加
        </button>
      </div>

      <View
        displayMessage={viewModel.displayMessage}
        allNames={viewModel.allNames}
      />
    </>
  );
}
