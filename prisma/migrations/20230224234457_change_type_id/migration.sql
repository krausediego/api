/*
  Warnings:

  - The primary key for the `MateriaPrima` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MateriaPrima" DROP CONSTRAINT "MateriaPrima_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MateriaPrima_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MateriaPrima_id_seq";
