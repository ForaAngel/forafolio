import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

interface SecondaryButtonProps {
  to: string;
  children: React.ReactNode;
}

export const SecondaryButton = ({ to, children }: SecondaryButtonProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className="group flex items-center gap-2 px-6 py-3 border border-gray-800 hover:border-violet-500 rounded-full font-medium text-gray-300 hover:text-violet-400 transition-all duration-300"
      >
        {children}
      </Link>
    </motion.div>
  );
}; 