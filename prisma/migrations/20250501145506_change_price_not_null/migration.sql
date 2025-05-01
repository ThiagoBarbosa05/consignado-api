/*
  Warnings:

  - Made the column `price` on table `wines` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "wines" ALTER COLUMN "price" SET NOT NULL;
