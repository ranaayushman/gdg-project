/*
  Warnings:

  - You are about to drop the column `accountId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the `Recruitment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('TECH_MEMBER', 'PUBLIC_RELATIONS', 'VIDEO_EDITOR', 'CONTENT_WRITER', 'GRAPHICS_DESIGNER', 'PHOTOGRAPHER');

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Recruitment" DROP CONSTRAINT "Recruitment_userId_fkey";

-- DropIndex
DROP INDEX "Member_accountId_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "accountId",
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "Recruitment";

-- CreateTable
CREATE TABLE "Applicant" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "linkedIn" TEXT,
    "githubPortfolio" TEXT,
    "branchYear" TEXT NOT NULL,
    "positions" "Position"[],
    "otherClubs" TEXT,
    "weeklyCommitment" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "gdgPerspective" TEXT NOT NULL,
    "eventIdeas" TEXT NOT NULL,
    "contributions" TEXT NOT NULL,
    "additionalSkills" TEXT,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechProfile" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "skills" TEXT[],
    "projects" TEXT,
    "openSource" TEXT,
    "codingSolution" TEXT,

    CONSTRAINT "TechProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PRProfile" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "experience" TEXT,
    "mockPost" TEXT,
    "outreach" TEXT,
    "platforms" TEXT,

    CONSTRAINT "PRProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoProfile" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "tools" TEXT[],
    "videoLink" TEXT,
    "skills" TEXT,
    "improvementIdea" TEXT,

    CONSTRAINT "VideoProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentProfile" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "writingExperience" TEXT,
    "blogIntro" TEXT,
    "seoKnowledge" TEXT,
    "socialWriting" TEXT,

    CONSTRAINT "ContentProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignProfile" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "tools" TEXT[],
    "portfolio" TEXT,
    "comfortableWithUIUX" BOOLEAN NOT NULL,
    "eventPosterIdea" TEXT,

    CONSTRAINT "DesignProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotographyProfile" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "experience" TEXT,
    "portfolio" TEXT,
    "cameraModel" TEXT,

    CONSTRAINT "PhotographyProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_userId_key" ON "Applicant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_email_key" ON "Applicant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TechProfile_applicantId_key" ON "TechProfile"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "PRProfile_applicantId_key" ON "PRProfile"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoProfile_applicantId_key" ON "VideoProfile"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentProfile_applicantId_key" ON "ContentProfile"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "DesignProfile_applicantId_key" ON "DesignProfile"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "PhotographyProfile_applicantId_key" ON "PhotographyProfile"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_userId_key" ON "Member"("userId");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechProfile" ADD CONSTRAINT "TechProfile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRProfile" ADD CONSTRAINT "PRProfile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoProfile" ADD CONSTRAINT "VideoProfile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentProfile" ADD CONSTRAINT "ContentProfile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignProfile" ADD CONSTRAINT "DesignProfile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotographyProfile" ADD CONSTRAINT "PhotographyProfile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
