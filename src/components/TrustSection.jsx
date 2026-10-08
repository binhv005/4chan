import React from 'react';
import ScrollReveal from './ScrollReveal';
import WaveBand from './WaveBand';

const trustItems = [
  {
    number: '01',
    image: '/images/anh1.jpg',
    title: 'Riêng tư',
    description: 'Không gian dành cho những khoảng thời gian riêng, tĩnh lặng và không lo bị làm phiền.',
  },
  {
    number: '02',
    image: '/images/anh2.jpg',
    title: 'Kín đáo',
    description: 'Tự check-in chủ động, bảo mật thông tin khách hàng tuyệt đối.',
  },
  {
    number: '03',
    image: '/images/anh3.jpg',
    title: 'Sạch sẽ',
    description: 'Phòng chuẩn bị chỉn chu, chăn ga thơm tho, khử khuẩn kỹ trước mỗi lượt đón khách.',
  },
  {
    number: '04',
    image: '/images/anh4.jpg',
    title: 'Linh hoạt',
    description: 'Đặt phòng theo giờ, combo trưa, qua đêm hoặc trọn gói 24h tùy nhu cầu.',
  }
];

export default function TrustSection() {
  return (
    <section className="relative -mt-16 py-24 px-6 overflow-x-clip">
      <WaveBand color="#B2836A" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-ivory">
        {/* Text side */}
        <ScrollReveal direction="left" duration={900} className="lg:col-span-12 text-center lg:text-left">
          <p className="font-display italic text-2xl text-ivory/80 mb-3">4Chan Homestay</p>
          <h2 className="font-bold uppercase tracking-wide text-2xl sm:text-3xl leading-snug max-w-xl mx-auto lg:mx-0">
            Một không gian riêng cho những khoảnh khắc đáng nhớ.
          </h2>
        </ScrollReveal>

        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {trustItems.map((item, index) => (
            <ScrollReveal
              key={item.number}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={Math.floor(index / 2) * 120}
              duration={800}
              className="relative flex items-stretch h-48 sm:h-52 rounded-3xl overflow-hidden bg-[#FBF7F0] border border-[#E5DAC8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <img
                src="/images/leaf.png"
                alt=""
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 sm:w-28 h-auto opacity-20 pointer-events-none select-none"
              />
              <div className="w-2/5 shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-6 py-4 text-charcoal">
                <span className="font-display italic text-3xl text-peach/90 leading-none mb-2">{item.number}</span>
                <h3 className="font-bold uppercase tracking-wider text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
