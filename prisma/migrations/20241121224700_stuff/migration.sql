-- CreateTable
CREATE TABLE "Stuff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,
    "condition" "Condition" NOT NULL,

    CONSTRAINT "Stuff_pkey" PRIMARY KEY ("id")
);