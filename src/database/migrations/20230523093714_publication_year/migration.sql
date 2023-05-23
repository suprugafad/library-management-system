/*
  Warnings:

  - Changed the type of `publicationYear` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "publicationYear",
ADD COLUMN     "publicationYear" SMALLINT NOT NULL;
