/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `recruitment` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('TECH_MEMBER', 'PR', 'VIDEO_EDITOR', 'CONTENT_WRITER', 'GRAPHICS_DESIGNER', 'PHOTOGRAPHER');

-- DropForeignKey
ALTER TABLE "recruitment" DROP CONSTRAINT "recruitment_userId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
DROP COLUMN "image",
DROP COLUMN "password",
DROP COLUMN "role",
DROP COLUMN "username",
ADD COLUMN     "branch" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL DEFAULT 'N/A',
ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 2024,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "recruitment";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" "RoleType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechMember" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languages" TEXT[],
    "projects" TEXT,
    "openSource" BOOLEAN NOT NULL,
    "hackathons" BOOLEAN NOT NULL,
    "codingSolution" TEXT,

    CONSTRAINT "TechMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicRelations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "socialMedia" BOOLEAN NOT NULL,
    "outreach" BOOLEAN NOT NULL,
    "platforms" TEXT[],
    "eventPromo" TEXT,

    CONSTRAINT "PublicRelations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoEditor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tools" TEXT[],
    "portfolio" TEXT,
    "colorGrading" BOOLEAN NOT NULL,
    "storytelling" TEXT,

    CONSTRAINT "VideoEditor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentWriter" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "articles" TEXT,
    "seo" BOOLEAN NOT NULL,
    "socialPosts" BOOLEAN NOT NULL,

    CONSTRAINT "ContentWriter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicsDesigner" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tools" TEXT[],
    "portfolio" TEXT,
    "uiux" BOOLEAN NOT NULL,

    CONSTRAINT "GraphicsDesigner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photographer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "skills" TEXT[],
    "liveEvents" BOOLEAN NOT NULL,
    "portfolio" TEXT,
    "camera" TEXT,

    CONSTRAINT "Photographer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recruitment" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "domain" TEXT NOT NULL,
    "suggestion" TEXT,
    "gdgStand" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Recruitment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recruitment_email_key" ON "Recruitment"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recruitment_userId_key" ON "Recruitment"("userId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechMember" ADD CONSTRAINT "TechMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicRelations" ADD CONSTRAINT "PublicRelations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoEditor" ADD CONSTRAINT "VideoEditor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentWriter" ADD CONSTRAINT "ContentWriter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicsDesigner" ADD CONSTRAINT "GraphicsDesigner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photographer" ADD CONSTRAINT "Photographer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recruitment" ADD CONSTRAINT "Recruitment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
