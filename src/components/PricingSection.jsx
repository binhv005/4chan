import React, { useState } from 'react';
import { pricingPackages, pricingPolicies } from '../data/prices';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `/images/anh${n}.jpg`);

// Fisher–Yates shuffle
const shuffle = (list) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Each room-type tab gets its own random order, picked once per page load.
const imageOrder = { window: shuffle(IMAGES), balcony: shuffle(IMAGES) };

export default function PricingSection({ onSelectPackage }) {
  const [roomType, setRoomType] = useState('window'); // 'window' | 'balcony'

  const handleSelectPackage = (pkgId, roomPreference) => {
    if (onSelectPackage) {
      onSelectPackage(pkgId, roomPreference);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isBalcony = roomType === 'balcony';
  const roomLabel = isBalcony ? 'Ban công' : 'Cửa sổ';

  return (
    <section className="py-20 px-6 bg-[#D9BFA9]" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={800} className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3 text-charcoal">
            Đặt phòng theo thời gian bạn cần.
          </h2>
          <p className="text-charcoal-light text-base">
            Chọn khoảng thời gian phù hợp với lịch trình của bạn.
          </p>

          {/* Room type switch: Cửa sổ | Ban công */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-white border border-beige/50 shadow-sm">
            <button
              onClick={() => setRoomType('window')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                !isBalcony ? 'bg-sage-deep text-ivory shadow-sm' : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              Cửa sổ
            </button>
            <button
              onClick={() => setRoomType('balcony')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isBalcony ? 'bg-peach text-ivory shadow-sm' : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              Ban công
            </button>
          </div>
        </ScrollReveal>

        {/* Pricing Cards: large price, duration, time, room type, CTA */}
        <div
          data-reveal-row className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pt-2 pb-6 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pricingPackages.map((pkg, index) => (
            <ScrollReveal
              key={pkg.id}
              direction={index % 2 === 0 ? 'up' : 'down'}
              delay={index * 90}
              triggerClosest="[data-reveal-row]"
              duration={800}
              className="font-roboto flex-shrink-0 snap-start flex w-[88vw] max-w-[480px] sm:w-[480px] bg-white border border-beige/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-peach/50 transition-all duration-300"
            >
              {/* Image flush to the card edges, left side */}
              <img
                src={imageOrder[roomType][index % IMAGES.length]}
                alt={`${pkg.name} - Phòng ${roomLabel}`}
                loading="lazy"
                draggable="false"
                className="w-[38%] shrink-0 object-cover"
              />

              {/* Text, right side */}
              <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal leading-snug">{pkg.name}</h3>
                  <p className="text-sm text-charcoal-light mt-1">{pkg.timeSlot}</p>

                  <div className="mt-4 mb-5">
                    <div className={`text-4xl sm:text-5xl font-bold ${isBalcony ? 'text-peach' : 'text-charcoal'}`}>
                      {pkg.prices[roomType].display}
                    </div>
                    <p className="text-sm text-charcoal-light mt-1">Phòng {roomLabel}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.id, isBalcony ? 'balcony-room' : 'window-room')}
                  className="w-full py-3 font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 bg-ivory border border-charcoal/20 text-charcoal hover:bg-peach hover:text-ivory hover:border-peach"
                >
                  <span>Đặt phòng</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Extra hour + weekend notice */}
        <ScrollReveal direction="up" delay={200} duration={800} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-5 py-4 rounded-3xl bg-white border border-beige/50 shadow-sm">
            <p className="text-sm text-charcoal-light">
              <span className="font-bold text-charcoal">
                {pricingPolicies.extraHour.title}: {pricingPolicies.extraHour.amount}
              </span>
              {' — '}
              {pricingPolicies.extraHour.note}
            </p>
          </div>
          <div className="px-5 py-4 rounded-3xl bg-[#FBF7F0] border border-peach/40 shadow-sm">
            <p className="text-sm font-bold text-peach-dark">
              {pricingPolicies.weekendSurcharge.title}: {pricingPolicies.weekendSurcharge.note}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
