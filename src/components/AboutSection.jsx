import React from 'react';
import { Heart, ShieldCheck, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-[#F8F3E8]/50 border-y border-beige/30 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Asymmetrical Editorial Image Grid */}
        <ScrollReveal direction="left" duration={900} className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border border-beige/30">
              <img
                src="/images/797745255_122130244610847678_8852938679973283193_n.jpg"
                alt="Phòng ngủ ngập tràn ánh sáng tại 4Chan Homestay"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl bg-sage/20 p-5 border border-sage/40">
              <p className="font-serif italic text-charcoal text-sm leading-relaxed">
                "Một chốn dừng chân ấm cúng giữa lòng Hà Nội hối hả."
              </p>
            </div>
          </div>
          <div className="pt-8 space-y-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border border-beige/30">
              <img
                src="/images/761615280_122123735126847678_7916549110782683872_n.jpg"
                alt="Góc ban công thoáng mát 4Chan Homestay"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl bg-peach/15 p-4 text-center border border-peach/30">
              <span className="text-xs uppercase font-bold text-peach-dark tracking-wider flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-peach-dark" />
                <span>Hẹn hò tinh tế</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Story Content */}
        <ScrollReveal direction="right" duration={900} delay={150} className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display italic font-normal text-charcoal leading-tight">
            Ở cùng ai, quan trọng hơn đi đâu.
          </h2>
          <div className="space-y-4 text-charcoal-light leading-relaxed text-base">
            <p>
              Một không gian <strong className="text-charcoal font-semibold">đủ riêng tư</strong> để nghỉ ngơi, trò chuyện và trọn vẹn từng khoảnh khắc bên nhau.
            </p>
            <p>
              Tại <strong className="text-charcoal font-semibold">4Chan Homestay</strong>, từng góc nhỏ đều được sắp xếp tỉ mỉ: <strong className="text-charcoal font-semibold">ánh đèn vàng dịu</strong>, <strong className="text-charcoal font-semibold">drap giường thơm mùi nắng</strong>, <strong className="text-charcoal font-semibold">ban công đón gió Hà Nội</strong>. Không chỉ là chỗ nghỉ chân, mà là nơi lưu giữ những khoảnh khắc ngọt ngào của bạn.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-beige/40">
            <div>
              <div className="text-3xl font-serif font-bold text-charcoal">03</div>
              <p className="text-xs text-charcoal-light uppercase font-semibold mt-1">Cơ sở thuận tiện</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-charcoal">100%</div>
              <p className="text-xs text-charcoal-light uppercase font-semibold mt-1">Chủ động Check-in</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-charcoal">24/7</div>
              <p className="text-xs text-charcoal-light uppercase font-semibold mt-1">Hỗ trợ tận tâm</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
