-- CreateEnum
CREATE TYPE "ConsignedStatus" AS ENUM ('EM_ANDAMENTO', 'CONCLUÍDO');

-- CreateTable
CREATE TABLE "consigned" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "status" "ConsignedStatus" NOT NULL DEFAULT 'EM_ANDAMENTO',
    "saved_in" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consigned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wine_on_consigned" (
    "consigned_id" TEXT NOT NULL,
    "wine_id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "count" INTEGER,

    CONSTRAINT "wine_on_consigned_pkey" PRIMARY KEY ("consigned_id","wine_id")
);

-- AddForeignKey
ALTER TABLE "consigned" ADD CONSTRAINT "consigned_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_consigned_id_fkey" FOREIGN KEY ("consigned_id") REFERENCES "consigned"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wine_on_consigned" ADD CONSTRAINT "wine_on_consigned_wine_id_fkey" FOREIGN KEY ("wine_id") REFERENCES "wines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
