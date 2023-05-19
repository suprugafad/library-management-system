-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Available', 'Borrowed', 'Lost');

-- CreateTable
CREATE TABLE "Book" (
    "bookId" VARCHAR(13) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "publicationYear" DATE NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Borrower" (
    "borrowerId" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "Borrower_pkey" PRIMARY KEY ("borrowerId")
);

-- CreateTable
CREATE TABLE "Exemplar" (
    "exemplarId" SERIAL NOT NULL,
    "bookId" VARCHAR(13) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Exemplar_pkey" PRIMARY KEY ("exemplarId")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transactionId" SERIAL NOT NULL,
    "borrowerId" INTEGER NOT NULL,
    "exemplarId" INTEGER NOT NULL,
    "borrowedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnedAt" TIMESTAMPTZ(6),
    "dueToDate" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_author_key" ON "Book"("title", "author");

-- CreateIndex
CREATE UNIQUE INDEX "Borrower_email_key" ON "Borrower"("email");

-- AddForeignKey
ALTER TABLE "Exemplar" ADD CONSTRAINT "Exemplar_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("bookId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "Borrower"("borrowerId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_exemplarId_fkey" FOREIGN KEY ("exemplarId") REFERENCES "Exemplar"("exemplarId") ON DELETE NO ACTION ON UPDATE NO ACTION;
