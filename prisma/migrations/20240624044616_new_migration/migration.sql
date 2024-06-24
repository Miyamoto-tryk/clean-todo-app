/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `mainTodo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `main` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subTodo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `todo` VARCHAR(191) NOT NULL,
    `emergency` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subTodo` ADD CONSTRAINT `subTodo_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `mainTodo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
