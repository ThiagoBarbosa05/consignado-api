-- CreateTable
CREATE TABLE "wines" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "harvest" INTEGER,
    "type" TEXT NOT NULL,
    "price" INTEGER,
    "producer" TEXT,
    "country" TEXT,
    "size" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "wines_pkey" PRIMARY KEY ("id")
);
