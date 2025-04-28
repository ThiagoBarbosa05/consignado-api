/*
  Warnings:

  - A unique constraint covering the columns `[state_registration]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "customers_state_registration_key" ON "customers"("state_registration");
