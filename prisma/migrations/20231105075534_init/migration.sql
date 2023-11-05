/*
  Warnings:

  - You are about to drop the column `alamat` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "alamat";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "foto_profile" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
