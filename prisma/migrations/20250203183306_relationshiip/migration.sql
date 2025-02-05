/*
  Warnings:

  - The `domain` column on the `Recruitment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Recruitment" DROP COLUMN "domain",
ADD COLUMN     "domain" TEXT[];
