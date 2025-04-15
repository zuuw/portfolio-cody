"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function GoBack() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/aboutme");
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gradient-to-r from-white-500 to-blue-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 items-center justify-center"
    >
      <ArrowLeft className="w-6 h-6"/>
    </motion.button>
  );
}