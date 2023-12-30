/*
  Warnings:

  - Added the required column `urlmaps` to the `Wisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wisata" ADD COLUMN     "urlmaps" TEXT NOT NULL;
