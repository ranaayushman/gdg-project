import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {
        fullName,
        email,
        phoneNumber,
        linkedIn,
        githubPortfolio,
        branchYear,
        positions,
        otherClubs,
        weeklyCommitment,
        motivation,
        gdgPerspective,
        eventIdeas,
        contributions,
        additionalSkills,
        comments,
        techProfile,
        prProfile,
        videoProfile,
        contentProfile,
        designProfile,
        photographyProfile
      } = req.body;

      const applicant = await prisma.applicant.create({
        data: {
          fullName,
          email,
          phoneNumber,
          linkedIn,
          githubPortfolio,
          branchYear,
          positions,
          otherClubs,
          weeklyCommitment,
          motivation,
          gdgPerspective,
          eventIdeas,
          contributions,
          additionalSkills,
          comments,
          techProfile: techProfile ? { create: techProfile } : undefined,
          prProfile: prProfile ? { create: prProfile } : undefined,
          videoProfile: videoProfile ? { create: videoProfile } : undefined,
          contentProfile: contentProfile ? { create: contentProfile } : undefined,
          designProfile: designProfile ? { create: designProfile } : undefined,
          photographyProfile: photographyProfile ? { create: photographyProfile } : undefined,
        },
      });

      res.status(201).json({ success: true, applicant });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const applicants = await prisma.applicant.findMany({
        include: {
          techProfile: true,
          prProfile: true,
          videoProfile: true,
          contentProfile: true,
          designProfile: true,
          photographyProfile: true,
        },
      });

      res.status(200).json(applicants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
