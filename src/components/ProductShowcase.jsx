import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaGlobeAmericas,
  FaLeaf,
} from "react-icons/fa";
import { products } from "../data/products";
import { generateProductInquiryMessage, buildWhatsAppUrl } from "../config/whatsapp";

/**
 * ProductShowcase Component
 *
 * Unified luxury export showcase for Bahara International.
 * - Desktop/Tablet: Simultaneous responsive multi-column grid displaying all products.
 * - Mobile (< 768px): Automatic single-product carousel rotating every 4.5s with touch-swipe,
 *   pause-on-interaction, accessible controls, and seamless infinite loop.
 */
function ProductShowcase({ isPage = false }) {
  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Touch tracking references
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchEndXRef = useRef(0);
  const touchEndYRef = useRef(0);

  const autoplayTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const totalProducts = products.length;

  // Reduced motion preference state
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Monitor viewport width and reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect mobile viewport (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    // Check reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    const handleResize = () => checkMobile();

    window.addEventListener("resize", handleResize);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Slide navigation with seamless looping
  const goToNext = useCallback(() => {
    if (totalProducts <= 1) return;
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalProducts);
  }, [totalProducts]);

  const goToPrev = useCallback(() => {
    if (totalProducts <= 1) return;
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
  }, [totalProducts]);

  const goToSlide = useCallback(
    (index) => {
      if (index === currentIndex) return;
      setSlideDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Pause autoplay temporarily during interaction and resume after 5 seconds of inactivity
  const pauseAutoplayTemporarily = useCallback(() => {
    setIsPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  // Autoplay effect - only runs on mobile when not paused and reduced motion is disabled
  useEffect(() => {
    if (!isMobile || prefersReducedMotion || isPaused || totalProducts <= 1) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      goToNext();
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [isMobile, prefersReducedMotion, isPaused, totalProducts, goToNext]);

  // Clean up all timers on unmount
  useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Touch Swipe Handlers for mobile (distinguishes horizontal swipe from vertical scroll)
  const minSwipeDistance = 45; // Minimum px distance to register a swipe

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchStartYRef.current = e.targetTouches[0].clientY;
    touchEndXRef.current = e.targetTouches[0].clientX;
    touchEndYRef.current = e.targetTouches[0].clientY;
    pauseAutoplayTemporarily();
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
    touchEndYRef.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const deltaY = touchStartYRef.current - touchEndYRef.current;

    // Only trigger if horizontal swipe is significantly greater than vertical movement
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swiped Left -> Next Product
        goToNext();
      } else {
        // Swiped Right -> Previous Product
        goToPrev();
      }
    }
  };

  // Helper to generate pre-filled WhatsApp inquiry URL
  const getProductWhatsAppUrl = (product) => {
    const message = generateProductInquiryMessage({
      name: "International Buyer",
      product: `${product.name} (${product.grade})`,
    });
    return buildWhatsAppUrl(message);
  };

  const activeMobileProduct = products[currentIndex] || products[0];

  // Animation variants for mobile carousel
  const carouselVariants = {
    enter: (direction) => ({
      x: prefersReducedMotion ? 0 : direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      x: prefersReducedMotion ? 0 : direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="products"
      aria-label="Bahara International Product Showcase"
      className={`relative w-full bg-[#071712] text-[#F5F2EB] ${isPage ? "pt-36 pb-24 min-h-screen" : "py-24"
        } px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      {/* Background Ambient Lighting & Subtle Radial Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(27,74,57,0.4),rgba(7,23,18,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#05110C] to-transparent opacity-85"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          {/* Section Heading with subtle champagne gold accent lines */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <p className="text-[#C5A059] uppercase tracking-[5px] text-xs sm:text-sm font-semibold">
              OUR PRODUCTS
            </p>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          {/* Main Tagline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF8F5] tracking-tight leading-[1.15]">
            Premium Kerala Spices for the Global Market.
          </h2>

          {/* Luxury Editorial Subtitle */}
          <p className="mt-5 text-[#B6C2BA] text-base sm:text-lg leading-relaxed font-normal">
            Directly sourced from Kerala’s fertile plantations, meticulously machine-cleaned,
            and rigorously graded to meet the highest international export specifications.
          </p>

          {/* Trust Pillar Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-[#E2C37E]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E281F] border border-[#C5A059]/20">
              <FaLeaf className="text-[#68D391] text-xs" /> 100% Authentic Kerala Origin
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E281F] border border-[#C5A059]/20">
              <FaAward className="text-[#D4AF37] text-xs" /> Certified Export Grade
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E281F] border border-[#C5A059]/20">
              <FaGlobeAmericas className="text-[#90CDF4] text-xs" /> Global Port Delivery
            </span>
          </div>
        </header>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP / TABLET DISPLAY: SIMULTANEOUS BALANCED RESPONSIVE GRID */}
        {/* Visible on md screens (>= 768px). Shows ALL products at once.   */}
        {/* NO automatic slider or product rotation on desktop.           */}
        {/* ------------------------------------------------------------- */}
        <div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch"
          role="list"
          aria-label="Export products catalog"
        >
          {products.map((product) => (
            <article
              key={product.id || product.name}
              role="listitem"
              className="group flex flex-col bg-[#0B2119] rounded-[28px] overflow-hidden border border-[#C5A059]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(10,40,28,0.7)] hover:-translate-y-1.5"
            >
              {/* Product Photography Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-[#05110C]">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.grade}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B2119] via-transparent to-black/30 pointer-events-none"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#071711]/85 backdrop-blur-md text-[#E2C37E] border border-[#C5A059]/30 shadow-md">
                  {product.category}
                </span>

                {/* Origin Pin */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-[#0B2119]/85 backdrop-blur-md text-[#FAF8F5] border border-white/10 shadow-md">
                  {product.origin}
                </span>
              </div>

              {/* Product Editorial Details */}
              <div className="flex flex-col flex-grow p-6 sm:p-7">
                {/* Product Name */}
                <h3 className="text-2xl font-bold text-[#FAF8F5] group-hover:text-[#E2C37E] transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Product Grade / Export Quality */}
                <div className="mt-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#123126] px-3 py-1.5 rounded-lg border border-[#C5A059]/25 self-start">
                  <FaAward className="text-[#E2C37E] flex-shrink-0" />
                  <span>{product.grade}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-[#BAC7BF] text-sm leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Key Technical Specifications */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[#C5A059]/15 grid grid-cols-2 gap-2 text-xs">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="bg-[#071812]/70 rounded-md p-2 border border-white/5">
                        <span className="text-[#8E9F94] block text-[10px] uppercase tracking-wide">
                          {spec.label}
                        </span>
                        <span className="text-[#FAF8F5] font-medium truncate block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Luxury WhatsApp Trade Inquiry CTA */}
                <a
                  href={getProductWhatsAppUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] text-[#071711] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(197,160,89,0.25)] cursor-pointer"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Inquire Export Specifications</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE DISPLAY: AUTOMATIC SINGLE-PRODUCT CAROUSEL (ONE AT A TIME) */}
        {/* Visible ONLY on screens < 768px (md:hidden). NEVER a long gallery */}
        {/* ------------------------------------------------------------- */}
        <div
          className="block md:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Mobile Spice Collection Slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={pauseAutoplayTemporarily}
        >
          {/* Active Card Container with Swipe Navigation */}
          <div className="relative overflow-hidden rounded-[26px] bg-[#0B2119] border border-[#C5A059]/30 shadow-2xl">
            <AnimatePresence initial={false} custom={slideDirection} mode="wait">
              {activeMobileProduct && (
                <motion.article
                  key={activeMobileProduct.id || activeMobileProduct.name}
                  custom={slideDirection}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col w-full"
                  aria-live="polite"
                >
                  {/* Large Product Photography */}
                  <div className="relative aspect-[4/3] w-full bg-[#05110C] overflow-hidden">
                    <img
                      src={activeMobileProduct.image}
                      alt={`${activeMobileProduct.name} - ${activeMobileProduct.grade}`}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />

                    {/* Vignette Gradient Overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0B2119] via-transparent to-black/35 pointer-events-none"
                    />

                    {/* Badges on Image */}
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#071711]/85 backdrop-blur-md text-[#E2C37E] border border-[#C5A059]/30 shadow-md">
                      {activeMobileProduct.category}
                    </span>

                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide bg-[#0B2119]/85 backdrop-blur-md text-[#FAF8F5] border border-white/10 shadow-md">
                      {activeMobileProduct.origin}
                    </span>

                    {/* Navigation Arrows positioned on image sides */}
                    <button
                      type="button"
                      onClick={() => {
                        pauseAutoplayTemporarily();
                        goToPrev();
                      }}
                      aria-label={`Previous product: ${products[(currentIndex - 1 + totalProducts) % totalProducts]?.name
                        }`}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#071711]/80 backdrop-blur-md text-[#E2C37E] border border-[#C5A059]/40 flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer z-10"
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        pauseAutoplayTemporarily();
                        goToNext();
                      }}
                      aria-label={`Next product: ${products[(currentIndex + 1) % totalProducts]?.name
                        }`}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#071711]/80 backdrop-blur-md text-[#E2C37E] border border-[#C5A059]/40 flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer z-10"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                  </div>

                  {/* Product Editorial Details */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    {/* Product Name */}
                    <h3 className="text-2xl font-bold text-[#FAF8F5]">
                      {activeMobileProduct.name}
                    </h3>

                    {/* Export Grade Badge */}
                    <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#123126] px-3 py-1 rounded-md border border-[#C5A059]/25 self-start">
                      <FaAward className="text-[#E2C37E]" />
                      <span>{activeMobileProduct.grade}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-[#BAC7BF] text-sm leading-relaxed">
                      {activeMobileProduct.description}
                    </p>

                    {/* Specifications Micro-Table */}
                    {activeMobileProduct.specifications && (
                      <div className="mt-4 pt-3 border-t border-[#C5A059]/15 grid grid-cols-2 gap-2 text-xs">
                        {activeMobileProduct.specifications.slice(0, 4).map((spec, i) => (
                          <div key={i} className="bg-[#071812]/70 rounded p-1.5 border border-white/5">
                            <span className="text-[#8E9F94] block text-[9px] uppercase tracking-wide">
                              {spec.label}
                            </span>
                            <span className="text-[#FAF8F5] font-medium text-xs truncate block">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Trade Inquiry CTA */}
                    <a
                      href={getProductWhatsAppUrl(activeMobileProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={pauseAutoplayTemporarily}
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] text-[#071711] shadow-[0_4px_16px_rgba(197,160,89,0.25)] active:scale-95 transition-all cursor-pointer"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Inquire Export Specifications</span>
                    </a>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination Indicators & Slide Progress */}
          <div className="flex flex-col items-center justify-center gap-2.5 mt-5">
            <div
              className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap max-w-full px-2"
              role="tablist"
              aria-label="Product carousel pagination"
            >
              {products.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id || idx}
                    type="button"
                    role="tab"
                    onClick={() => {
                      pauseAutoplayTemporarily();
                      goToSlide(idx);
                    }}
                    aria-label={`Go to ${p.name} (Slide ${idx + 1} of ${totalProducts})`}
                    aria-selected={isActive}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? "w-7 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                        : "w-2 bg-white/25 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>
            <span className="text-[11px] font-semibold tracking-widest text-[#C5A059] bg-[#071711]/70 px-2.5 py-0.5 rounded-full border border-[#C5A059]/20">
              {String(currentIndex + 1).padStart(2, "0")} / {String(totalProducts).padStart(2, "0")}
            </span>
          </div>

          {/* Mobile Swipe Hint */}
          <p className="text-center text-[11px] text-[#8E9F94] mt-2.5 tracking-wide">
            Swipe left or right to explore spices
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
