"use client";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "../hooks/MaxWidthWrapper";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Hero = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDarkMode = mounted && theme === 'dark';

    // Google color palette
    const colors = {
        blue: '#4285F4',
        red: '#DB4437',
        yellow: '#F4B400',
        green: '#0F9D58',
        white: '#FFFFFF',
        black: '#000000'
    };

    // Text color logic
    const getDevGroupColor = (char: string) => {
        const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
        return colors[char.toLowerCase().charCodeAt(0) % 4];
    };

    const renderColoredText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} style={{ color: getDevGroupColor(char) }}>
                {char}
            </span>
        ));
    };

    return (
        <section
            className={`relative min-h-screen flex items-center justify-center ${
                isDarkMode ? `bg-[${colors.black}] text-[${colors.white}]` : `bg-[${colors.white}] text-[${colors.black}]`
            }`}
        >
            <MaxWidthWrapper className="relative z-10 flex flex-col justify-center items-center px-8 sm:px-12 lg:px-16">

                {/* Google Logo */}
                <div className="w-24 h-24 mb-8 flex justify-center items-center">
                    <FaGoogle className="text-6xl text-[#4285F4]" />
                </div>

                {/* Main Content */}
                <motion.div
                    className={`w-full max-w-5xl text-center p-8 rounded-3xl ${
                        isDarkMode ? `bg-[${colors.black}] shadow-2xl` : `bg-[${colors.white}] shadow-md`
                    }`}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        {renderColoredText('Google Developer Group')}
                    </h1>
                    <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-medium"
                        style={{ color: colors.blue }}>
                        On Campus
                    </h2>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-medium"
                        style={{ color: isDarkMode ? colors.white : colors.black }}>
                        Haldia Institute of Technology
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                        Google Developer Groups are university-based communities for students interested in Google technologies.
                        By joining GDG, you'll grow your knowledge and build solutions for your local community.
                    </p>

                    {/* Call to Action Button */}
                    <motion.div
                        className="w-full lg:w-auto mt-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Button className="w-full sm:w-auto px-6 py-4 text-base lg:text-lg rounded-md shadow-xl transition-all duration-300 transform group min-w-[160px] sm:min-w-[200px] bg-[#4285F4] text-white hover:bg-[#1565C0]">
                            Learn More
                        </Button>
                    </motion.div>
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Hero;