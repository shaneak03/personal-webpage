"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import type { MediaItem } from "@/types/media";

const motionEase = [0.22, 1, 0.36, 1] as const;

interface MediaCarouselProps {
  items?: MediaItem[];
  placeholders?: string[];
  label?: string;
  helperText?: string;
  title?: string;
  imageClassName?: string;
  expandedImageClassName?: string;
}

export default function MediaCarousel({
  items = [],
  placeholders = [],
  label = "Media",
  helperText = "Use the carousel and click to expand",
  title,
  imageClassName = "h-52",
  expandedImageClassName = "object-contain",
}: MediaCarouselProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!items.length && !placeholders.length) {
    return null;
  }

  const selectedImage =
    selectedImageIndex !== null ? items[selectedImageIndex] : null;

  const closeLightbox = () => setSelectedImageIndex(null);
  const showPreviousImage = () => {
    if (selectedImageIndex === null) {
      return;
    }

    setSelectedImageIndex(
      (selectedImageIndex - 1 + items.length) % items.length,
    );
  };
  const showNextImage = () => {
    if (selectedImageIndex === null) {
      return;
    }

    setSelectedImageIndex((selectedImageIndex + 1) % items.length);
  };
  const showPreviousCarouselImage = () => {
    setCarouselIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  };
  const showNextCarouselImage = () => {
    setCarouselIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  return (
    <>
      {items.length > 0 && (
        <div className="mb-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              {label}
            </p>
            <p className="text-xs text-slate-500">{helperText}</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3">
            <div className="relative overflow-hidden rounded-[1.2rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.button
                  key={items[carouselIndex].src}
                  type="button"
                  onClick={() => setSelectedImageIndex(carouselIndex)}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: motionEase }}
                  className={`group relative block w-full overflow-hidden bg-white/5 text-left ${imageClassName}`}
                >
                  <Image
                    src={items[carouselIndex].src}
                    alt={items[carouselIndex].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.button>
              </AnimatePresence>

              {items.length > 1 && (
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

            {items.length > 1 && (
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {items.map((item, index) => (
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
                  {carouselIndex + 1} / {items.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {!items.length && placeholders.length > 0 && (
        <div className="mb-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            {label}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {placeholders.map((item) => (
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

      {typeof document !== "undefined" && selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] min-h-screen overflow-y-auto bg-black/85 backdrop-blur-lg"
            onClick={closeLightbox}
          >
            <div className="min-h-screen px-4 py-8 md:px-8">
              <div
                className="mx-auto flex h-[calc(100vh-4rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#081122] shadow-2xl shadow-black/60"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                  <div>
                    <p className="text-sm font-semibold text-white md:text-base">
                      {title ?? label}
                    </p>
                    <p className="text-xs text-slate-400">
                      {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${items.length}` : ""}
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

                <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black p-4 md:p-6">
                  <div className="relative h-full w-full">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={selectedImage.src}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: motionEase }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          fill
                          sizes="100vw"
                          className={expandedImageClassName}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {items.length > 1 && (
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
                      <div className="absolute bottom-4 right-4 flex gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                        {items.map((item, index) => (
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
                    </>
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
