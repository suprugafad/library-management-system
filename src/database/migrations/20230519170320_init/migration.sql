-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Available', 'Borrowed');

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "isbn" VARCHAR(13) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "publicationYear" DATE NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Borrower" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "Borrower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exemplar" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Exemplar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "borrowerId" INTEGER NOT NULL,
    "exemplarId" INTEGER NOT NULL,
    "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnedAt" TIMESTAMP(3),
    "dueToDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "Borrower_email_key" ON "Borrower"("email");

-- AddForeignKey
ALTER TABLE "Exemplar" ADD CONSTRAINT "Exemplar_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_exemplarId_fkey" FOREIGN KEY ("exemplarId") REFERENCES "Exemplar"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
