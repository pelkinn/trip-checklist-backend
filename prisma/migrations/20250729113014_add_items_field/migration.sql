-- AlterTable
ALTER TABLE "TripTemplate" ADD COLUMN     "items" TEXT[] DEFAULT ARRAY[]::TEXT[];
