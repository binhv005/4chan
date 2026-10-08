import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PrivacyMoodSection() {
  const keywords = ['PRIVATE', 'CLEAN', 'COZY', 'DISCREET'];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-24 px-6 text-sage-deep text-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/images/background-green-rotated.png)" }}
    >
      <div className="w-full max-w-4xl mx-auto relative z-10 space-y-8">
        <ScrollReveal direction="left" duration={900}>
        <blockquote className="text-2xl sm:text-3xl md:text-5xl font-display font-normal leading-tight italic text-sage-deep">
          “Một không gian đủ riêng tư để tận hưởng trọn vẹn từng khoảnh khắc.”
        </blockquote>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={900} delay={150}>
        <p className="text-sage-deep/80 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
          Nơi bạn gác lại mọi ồn ào của phố thị, chỉ còn lại sự ấm áp và bình yên cùng người thương.
        </p>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={900} delay={300}>
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-widest uppercase">
          {keywords.map((word, idx) => (
            <div
              key={word}
              className="flex items-center gap-2 text-sage-deep hover:text-peach-dark transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-peach"></span>
              <span>{word}</span>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
