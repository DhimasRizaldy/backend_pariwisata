-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "googleid" TEXT,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nama" TEXT,
    "jenis_kelamin" TEXT,
    "alamat" TEXT,
    "foto_profile" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wisata" (
    "id" SERIAL NOT NULL,
    "nama_wisata" TEXT NOT NULL,
    "kategoriId" INTEGER NOT NULL,
    "daerahId" INTEGER NOT NULL,
    "alamat" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "jam_operasi" TEXT NOT NULL,
    "harga_tiket" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "foto_wisata" TEXT,

    CONSTRAINT "Wisata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KategoriWisata" (
    "id" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,

    CONSTRAINT "KategoriWisata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Daerah" (
    "id" SERIAL NOT NULL,
    "nama_daerah" TEXT NOT NULL,

    CONSTRAINT "Daerah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rekomendasi" (
    "id" SERIAL NOT NULL,
    "tanggal_vote" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "wisataId" INTEGER NOT NULL,

    CONSTRAINT "Rekomendasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ulasan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "wisataId" INTEGER NOT NULL,
    "tanggal_ulasan" TIMESTAMP(3) NOT NULL,
    "judul" TEXT NOT NULL,
    "foto_ulasan" TEXT,

    CONSTRAINT "Ulasan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rekomendasi_userId_key" ON "Rekomendasi"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rekomendasi_wisataId_key" ON "Rekomendasi"("wisataId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wisata" ADD CONSTRAINT "Wisata_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wisata" ADD CONSTRAINT "Wisata_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "KategoriWisata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wisata" ADD CONSTRAINT "Wisata_daerahId_fkey" FOREIGN KEY ("daerahId") REFERENCES "Daerah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rekomendasi" ADD CONSTRAINT "Rekomendasi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rekomendasi" ADD CONSTRAINT "Rekomendasi_wisataId_fkey" FOREIGN KEY ("wisataId") REFERENCES "Wisata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ulasan" ADD CONSTRAINT "Ulasan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ulasan" ADD CONSTRAINT "Ulasan_wisataId_fkey" FOREIGN KEY ("wisataId") REFERENCES "Wisata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
