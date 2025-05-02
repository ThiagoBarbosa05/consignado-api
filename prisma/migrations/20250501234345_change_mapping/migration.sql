/*
  Warnings:

  - You are about to drop the column `saved_in` on the `consigned` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "consigned" DROP COLUMN "saved_in",
ADD COLUMN     "completed_in" TIMESTAMP(3);
