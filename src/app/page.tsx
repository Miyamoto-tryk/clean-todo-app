"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Controller } from "@/interface_adaptor/Controller";
import { PrismaUserRepository } from "@/framework_driver/PrismaUserRepository";
import prisma from "@/entities/prisma";
import { Presenter } from "@/interface_adaptor/Presenter";
import { useEffect, useState } from "react";
import { ViewModelDataStructure } from "@/interface_adaptor/ViewModelDataStructure";
import { UseCaseInteractor } from "@/usecases/UseCaseInteractor";
import { View } from "@/framework_driver/View";

export default function Home() {
  const userRepository = new PrismaUserRepository();
  const presenter = new Presenter();
  const useCaseInteractor = new UseCaseInteractor(userRepository, presenter);

  const controller = new Controller(
    useCaseInteractor,
    "user",
    "a@b",
    "POST",
    0
  );
  const handleClick = () => {
    controller.exeUseCase();
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          追加
        </button>
      </div>

      <View
        displayMessage={presenter.viewModel.displayMessage}
        allNames={presenter.viewModel.allNames}
      />
    </>
  );
}
