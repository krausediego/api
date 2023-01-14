/*
  Warnings:

  - Added the required column `status` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "razao_social" TEXT,
ADD COLUMN     "status" BOOLEAN NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
