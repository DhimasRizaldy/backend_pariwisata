-- AlterTable
ALTER TABLE "Ulasan" ADD COLUMN     "isi_ulasan" TEXT,
ALTER COLUMN "judul" DROP NOT NULL;
