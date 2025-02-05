/*
  Warnings:

  - You are about to drop the `recruitment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recruitment" DROP CONSTRAINT "recruitment_userId_fkey";

-- DropTable
DROP TABLE "recruitment";

-- CreateTable
CREATE TABLE "Recruitment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recruitment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recruitment" ADD CONSTRAINT "Recruitment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
