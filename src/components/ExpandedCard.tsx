"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Twitter } from "lucide-react";

interface ExpandedCardProps {
  member: {
    name: string;
    role: string;
    imageSrc: string;
    borderColor: string;
    bio?: string;
    social?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
  onClose: () => void;
  isOpen: boolean;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ member, onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ y: 100, opacity: 0, scale: 0.8, rotateX: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-white/90 dark:bg-darkgray/90 rounded-2xl max-w-3xl w-[90%] md:w-[700px] p-8 shadow-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-2/5"
              >
                <div
                  className="relative w-full aspect-square rounded-xl overflow-hidden border-4 shadow-lg"
                  style={{ borderColor: member.borderColor }}
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-3/5"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h2>
                <p className="text-lg text-blue-600 dark:text-blue-400 mt-2 font-medium">
                  {member.role}
                </p>
                <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {member.bio || "A passionate developer dedicated to creating innovative solutions and contributing to the tech community."}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mt-8 flex gap-6"
                >
                  {member.social?.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                    >
                      <Twitter size={24} />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandedCard;
