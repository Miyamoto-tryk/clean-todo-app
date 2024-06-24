/*
  Warnings:

  - You are about to drop the column `main` on the `mainTodo` table. All the data in the column will be lost.
  - You are about to alter the column `emergency` on the `subTodo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `title` to the `mainTodo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mainTodo` DROP COLUMN `main`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `subTodo` MODIFY `emergency` INTEGER NOT NULL;
