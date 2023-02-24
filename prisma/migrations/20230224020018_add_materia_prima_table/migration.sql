-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('un', 'kg', 'l');

-- CreateTable
CREATE TABLE "MateriaPrima" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" "Unit" NOT NULL DEFAULT 'un',
    "amount" INTEGER NOT NULL,

    CONSTRAINT "MateriaPrima_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MateriaPrima" ADD CONSTRAINT "MateriaPrima_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
