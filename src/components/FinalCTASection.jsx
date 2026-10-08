import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FinalCTASection() {
  return (
    <section className="w-full relative overflow-hidden bg-sage-deep text-ivory py-24 md:py-32">
      {/* Background Image on the Left with Gradient Fade to Right */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/a4d8b9c4.avif"
          alt="Không gian 4Chan Homestay"
          className="w-full h-full object-cover object-left"
          loading="lazy"
        />
        {/* Horizontal gradient overlay fading from clear on left to solid sage-deep on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-deep/30 via-sage-deep/75 to-sage-deep"></div>
        {/* Top and Bottom soft blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-deep/40 via-transparent to-sage-deep/40"></div>
      </div>

      {/* Ambient glow in background */}
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-peach/15 blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <ScrollReveal direction="up" duration={850} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal italic leading-tight text-ivory drop-shadow-md">
            Một cuộc hẹn đáng nhớ bắt đầu từ một không gian phù hợp.
          </h2>

          <p className="text-ivory/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-light">
            Hãy để 4Chan Homestay đồng hành cùng khoảnh khắc ấm áp và riêng tư của bạn tại Hà Nội.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#booking"
              className="px-10 py-4 rounded-full bg-peach hover:bg-peach-dark text-ivory font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-peach/30 hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Đặt phòng ngay hôm nay</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 rounded-full border border-ivory/40 hover:border-ivory text-ivory font-medium text-sm transition-all hover:bg-ivory/10 backdrop-blur-sm"
            >
              Xem lại bảng giá
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
