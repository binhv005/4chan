import React, { useState } from 'react';
import { locationsData } from '../data/locations';
import { MapPin, ExternalLink, Check, Navigation, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function LocationsSection({ onSelectLocation }) {
  const [activeLocationId, setActiveLocationId] = useState(locationsData[0].id);

  const handleSelect = (locId) => {
    setActiveLocationId(locId);
    if (onSelectLocation) {
      onSelectLocation(locId);
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="locations">
      <ScrollReveal direction="up" duration={800} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3 text-charcoal">
          Ba vị trí, một trải nghiệm riêng tư.
        </h2>
        <p className="text-charcoal-light text-sm">
          Dễ dàng lựa chọn cơ sở gần bạn nhất với vị trí thuận tiện di chuyển, ngõ yên tĩnh và an toàn.
        </p>
      </ScrollReveal>

      {/* 3 Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {locationsData.map((loc, index) => {
          const isActive = activeLocationId === loc.id;
          return (
            <ScrollReveal
              key={loc.id}
              direction={['left', 'up', 'right'][index % 3]}
              delay={index * 150}
              duration={800}
              className={`rounded-3xl bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 group ${isActive
                  ? 'border-2 border-peach shadow-xl ring-2 ring-peach/20'
                  : 'border border-beige/40 hover:shadow-lg hover:-translate-y-1'
                }`}
            >
              <div>
                <div className="w-full overflow-hidden relative">
                  <img
                    src={loc.image}
                    alt={`Cơ sở ${loc.name} 4Chan Homestay`}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-sage-deep/90 backdrop-blur-sm text-ivory text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {loc.code} · {loc.district}
                  </div>
                </div>

                <div className="space-y-3 p-6 pb-0">
                  <h3 className="font-serif text-2xl font-bold text-charcoal flex items-center justify-between">
                    <span>{loc.name}</span>
                    <MapPin className="w-5 h-5 text-peach" />
                  </h3>

                  <p className="text-xs font-semibold text-charcoal bg-beige-light/70 p-2.5 rounded-xl border border-beige/30">
                    {loc.address}
                  </p>

                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {loc.description}
                  </p>

                  {/* Amenities */}
                  <div className="space-y-1.5 pt-2">
                    {loc.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-light">
                        <Check className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mx-6 mb-6 mt-6 pt-4 border-t border-beige/30 flex items-center justify-between gap-2">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-peach hover:text-peach-dark transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Xem bản đồ</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    handleSelect(loc.id);
                    const bookingEl = document.getElementById('booking');
                    if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-beige-light hover:bg-peach hover:text-ivory text-charcoal text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Chọn cơ sở này</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
