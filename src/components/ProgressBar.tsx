"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setVisible(true);
    setAnimKey((k) => k + 1);
    const t = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={animKey}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          style={{ transformOrigin: "left", originX: 0 }}
          className="fixed left-0 right-0 top-0 z-[200] h-[2px] bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#ec4899] dark:from-[#a78bfa] dark:via-[#22d3ee] dark:to-[#f472b6]"
        />
      )}
    </AnimatePresence>
  );
}
