import React from 'react';
import { Asterisk } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import WaveBand from './WaveBand';

const steps = [
  {
    step: '01',
    title: 'Đặt phòng',
    description: 'Lựa chọn cơ sở, khung giờ và loại phòng bạn mong muốn qua website hoặc tin nhắn trực tiếp.'
  },
  {
    step: '02',
    title: 'Nhận hướng dẫn',
    description: 'Nhận thông tin mã mở khóa số thông minh, định vị chi tiết và các tiện ích nội khu qua tin nhắn bí mật.'
  },
  {
    step: '03',
    title: 'Tự check-in / check-out',
    description: 'Tự mở cửa bước vào không gian của bạn, tận hưởng trọn vẹn và rời đi đúng giờ mà không gặp phiền toái.'
  }
];

export default function SelfCheckinSection() {
  return (
    <section className="relative z-10 -mb-16 py-32 px-6 overflow-x-clip" id="checkin">
      <WaveBand color="#B2836A" />

      <div className="relative z-10 max-w-6xl mx-auto text-ivory">
        <ScrollReveal direction="up" duration={800} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3">
            Chủ động từ lúc nhận phòng đến khi rời đi.
          </h2>
          <p className="text-sm text-ivory/80">
            Quy trình tự nhận và trả phòng hoàn toàn tự động, văn minh và bảo mật tối đa.
          </p>
        </ScrollReveal>

        {/* 3 steps in columns, no cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((item, index) => (
            <ScrollReveal
              key={item.step}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 150}
              duration={800}
              className="text-center max-w-xs mx-auto"
            >
              <Asterisk className="w-14 h-14 mx-auto mb-5 text-ivory/80" strokeWidth={2.5} />
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-ivory/70 mb-1">
                Bước {item.step}
              </span>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ivory/85">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={300} duration={800} className="mt-14 flex justify-center">
          <a
            href="#booking"
            className="px-8 py-3 rounded-full bg-ivory text-peach-dark text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-200"
          >
            Đặt phòng ngay
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
