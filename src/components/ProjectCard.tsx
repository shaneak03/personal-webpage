"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const highlights = project.highlights ?? [];
  const tech = project.tech ?? [];
  const media = project.media ?? [];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const selectedImage =
    selectedImageIndex !== null ? media[selectedImageIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeLightbox = () => setSelectedImageIndex(null);
  const showPreviousImage = () => {
    if (selectedImageIndex === null) {
      return;
    }

    setSelectedImageIndex(
      (selectedImageIndex - 1 + media.length) % media.length,
    );
  };
  const showNextImage = () => {
    if (selectedImageIndex === null) {
      return;
    }

    setSelectedImageIndex((selectedImageIndex + 1) % media.length);
  };
  const showPreviousCarouselImage = () => {
    setCarouselIndex((currentIndex) => (currentIndex - 1 + media.length) % media.length);
  };
  const showNextCarouselImage = () => {
    setCarouselIndex((currentIndex) => (currentIndex + 1) % media.length);
  };

  return (
    <>
      <article className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300/80">
          {project.period}
        </p>
        <h2 className="mb-3 text-2xl font-bold text-white">{project.title}</h2>
        <p className="mb-5 text-gray-300 leading-7">{project.description}</p>

        {highlights.length > 0 && (
          <ul className="mb-5 space-y-3 text-sm leading-6 text-gray-300">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {media.length > 0 && (
          <div className="mb-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Media
              </p>
              <p className="text-xs text-slate-500">Use the carousel and click to expand</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="relative overflow-hidden rounded-[1.2rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.button
                    key={media[carouselIndex].src}
                    type="button"
                    onClick={() => setSelectedImageIndex(carouselIndex)}
                    initial={{ opacity: 0, x: 30, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative block h-52 w-full overflow-hidden bg-white/5 text-left"
                  >
                    <Image
                      src={media[carouselIndex].src}
                      alt={media[carouselIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white">{media[carouselIndex].alt}</p>
                    </div>
                  </motion.button>
                </AnimatePresence>

                {media.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousCarouselImage}
                      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-sm text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/65"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={showNextCarouselImage}
                      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-sm text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/65"
                    >
                      Next
                    </button>
                  </>
                )}
              </div>

              {media.length > 1 && (
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {media.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setCarouselIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === carouselIndex
                            ? "w-8 bg-white"
                            : "w-2.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">
                    {carouselIndex + 1} / {media.length}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {!media.length && project.mediaPlaceholders && project.mediaPlaceholders.length > 0 && (
          <div className="mb-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Media
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.mediaPlaceholders.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[112px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-4 text-center text-sm text-slate-400"
                >
                  Add image: {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </article>

      {mounted && selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] min-h-screen overflow-y-auto bg-black/85 backdrop-blur-lg"
            onClick={closeLightbox}
          >
            <div className="min-h-screen px-4 py-8 md:px-8">
              <div
                className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#081122] shadow-2xl shadow-black/60"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                  <div>
                    <p className="text-sm font-semibold text-white md:text-base">{project.title}</p>
                    <p className="text-xs text-slate-400">
                      {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${media.length}` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>

                <div className="relative flex-1 bg-black">
                  <div className="relative aspect-[16/10] min-h-[50vh] w-full">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={selectedImage.src}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          fill
                          sizes="100vw"
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {media.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-3 text-sm text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/65"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-3 text-sm text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/65"
                      >
                        Next
                      </button>
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
                  <p className="text-sm text-slate-300">{selectedImage.alt}</p>
                  {media.length > 1 && (
                    <div className="flex gap-2">
                      {media.map((item, index) => (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => setSelectedImageIndex(index)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === selectedImageIndex
                              ? "w-8 bg-white"
                              : "w-2.5 bg-white/30 hover:bg-white/50"
                          }`}
                          aria-label={`Show expanded image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
