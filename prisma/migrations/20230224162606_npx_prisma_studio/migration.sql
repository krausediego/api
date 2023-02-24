/*
  Warnings:

  - Added the required column `updated_at` to the `MateriaPrima` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MateriaPrima" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;
