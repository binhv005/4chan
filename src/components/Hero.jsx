import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-ivory px-6 overflow-hidden">
      {/* Background Image with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ad9205b9.avif"
          alt="4Chan Homestay Hà Nội"
          className="w-full h-full object-cover object-center animate-heroZoom"
          loading="eager"
        />
        {/* Multi-layered smooth gradient overlays for optimal text contrast */}
        <div className="absolute inset-0 bg-sage-deep/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/60"></div>
      </div>

      {/* Hero Centered Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center py-24 sm:py-32 space-y-8">
        <div className="space-y-8">
          {/* The single H1 of the entire page - Italic, 2 lines, entrance staggered line by line */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display italic font-normal leading-[1.35] md:leading-[1.4] text-ivory/95 tracking-normal drop-shadow-lg max-w-4xl mx-auto">
            <ScrollReveal as="span" direction="up" duration={900} delay={200} className="block">
              Có những khoảng thời gian đáng giá,
            </ScrollReveal>
            <ScrollReveal as="span" direction="up" duration={900} delay={400} className="block mt-1 sm:mt-2 text-ivory">
              không phải vì đi đâu, mà vì ở cùng ai.
            </ScrollReveal>
          </h1>

          {/* Centered CTA button */}
          <ScrollReveal direction="up" duration={900} delay={650} className="pt-2 flex justify-center">
            <a
              href="#booking"
              className="px-9 py-4 rounded-full bg-peach hover:bg-peach-dark text-ivory font-semibold text-base sm:text-lg transition-all shadow-xl hover:shadow-peach/40 transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 group"
            >
              <span>Đặt phòng ngay</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
