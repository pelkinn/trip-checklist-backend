-- CreateTable
CREATE TABLE "TripTemplate" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "items" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripTemplate_pkey" PRIMARY KEY ("id")
);
