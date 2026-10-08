import React from 'react';
import { MapPin } from 'lucide-react';
import { locationsData } from '../data/locations';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-12 px-6 border-t border-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand Description */}
          <ScrollReveal direction="left" duration={800} delay={0} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="4Chan Homestay Logo"
                className="w-10 h-10 rounded-full object-cover shadow-sm border border-ivory/20 shrink-0"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                4Chan Homestay
              </span>
            </div>
            <p className="text-xs text-ivory/70 leading-relaxed max-w-sm">
              Hệ thống homestay riêng tư, kín đáo và tiện nghi tại Hà Nội. Trải nghiệm tự check-in linh hoạt, chăn ga sạch sẽ chuẩn khách sạn, dành trọn vẹn cho những cuộc hẹn ngọt ngào.
            </p>
            <div className="text-xs text-sage font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-peach shrink-0" />
              <span>Hà Nội · Khâm Thiên · Thanh Xuân · Long Biên</span>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" duration={800} delay={120}>
            <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider mb-4">
              Loại phòng & Giá
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#rooms" className="hover:text-peach transition-colors">
                  Phòng Cửa Sổ Thoáng
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-peach transition-colors">
                  Phòng Ban Công Chill
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-peach transition-colors">
                  Gói theo giờ (3H)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-peach transition-colors">
                  Combo Trưa (5H)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-peach transition-colors">
                  Gói Qua Đêm & 24H
                </a>
              </li>
            </ul>
          </ScrollReveal>

          {/* 3 Facilities Details */}
          <ScrollReveal direction="right" duration={800} delay={240}>
            <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider mb-4">
              Cơ sở Hà Nội
            </h4>
            <ul className="space-y-3 text-xs text-ivory/70">
              {locationsData.map((loc) => (
                <li key={loc.id}>
                  <strong className="text-ivory block">{loc.code} ({loc.district}):</strong>
                  <span className="text-[11px] text-ivory/60">{loc.address}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/50 gap-4">
          <p>© {new Date().getFullYear()} 4Chan Homestay Hà Nội. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-ivory transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#faq" className="hover:text-ivory transition-colors">
              Quy định lưu trú
            </a>
            <a href="#checkin" className="hover:text-ivory transition-colors">
              Hướng dẫn Tự Check-in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
