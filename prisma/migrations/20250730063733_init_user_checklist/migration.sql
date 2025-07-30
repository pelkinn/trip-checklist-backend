/*
  Warnings:

  - You are about to drop the `TripTemplate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TripTemplate";

-- CreateTable
CREATE TABLE "TripType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TripType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Duration" (
    "id" SERIAL NOT NULL,
    "days" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" SERIAL NOT NULL,
    "tripTypeId" INTEGER NOT NULL,
    "durationId" INTEGER NOT NULL,

    CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChecklistItem" (
    "id" SERIAL NOT NULL,
    "checklistId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "ChecklistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChecklist" (
    "id" SERIAL NOT NULL,
    "checklistId" INTEGER NOT NULL,

    CONSTRAINT "UserChecklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChecklistItem" (
    "id" SERIAL NOT NULL,
    "userChecklistId" INTEGER NOT NULL,
    "itemId" INTEGER,
    "customName" TEXT,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserChecklistItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_tripTypeId_fkey" FOREIGN KEY ("tripTypeId") REFERENCES "TripType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistItem" ADD CONSTRAINT "ChecklistItem_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistItem" ADD CONSTRAINT "ChecklistItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChecklist" ADD CONSTRAINT "UserChecklist_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChecklistItem" ADD CONSTRAINT "UserChecklistItem_userChecklistId_fkey" FOREIGN KEY ("userChecklistId") REFERENCES "UserChecklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChecklistItem" ADD CONSTRAINT "UserChecklistItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
