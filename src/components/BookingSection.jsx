import React, { useState, useEffect } from 'react';
import { locationsData } from '../data/locations';
import { pricingPackages } from '../data/prices';
import { roomsData } from '../data/rooms';
import { ShieldCheck, Sparkles, Check, PhoneCall, Calendar, Clock, MapPin, Home } from 'lucide-react';
import BookingSuccessModal from './BookingSuccessModal';
import ScrollReveal from './ScrollReveal';

export default function BookingSection({ prefilledData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    branch: locationsData[0].id,
    roomType: roomsData[0].id,
    packageId: pricingPackages[0].id,
    checkinTime: '',
    notes: ''
  });

  const [submittedBooking, setSubmittedBooking] = useState(null);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        ...prefilledData
      }));
    }
  }, [prefilledData]);

  // Compute estimate
  const currentPkg = pricingPackages.find((p) => p.id === formData.packageId) || pricingPackages[0];
  const isBalcony = formData.roomType === 'balcony-room';
  const basePrice = isBalcony ? currentPkg.prices.balcony.price : currentPkg.prices.window.price;

  // Check if checkin date is Friday (5) or Saturday (6)
  let isWeekend = false;
  if (formData.checkinTime) {
    const dateObj = new Date(formData.checkinTime);
    const day = dateObj.getDay();
    if (day === 5 || day === 6) {
      isWeekend = true;
    }
  }

  const finalTotal = basePrice + (isWeekend ? 50000 : 0);
  const formattedTotal = finalTotal.toLocaleString('vi-VN') + 'đ';

  const handleSubmit = (e) => {
    e.preventDefault();
    const branchObj = locationsData.find((l) => l.id === formData.branch);
    const roomObj = roomsData.find((r) => r.id === formData.roomType);

    setSubmittedBooking({
      ...formData,
      branchName: `${branchObj?.code}: ${branchObj?.name} (${branchObj?.district})`,
      roomName: roomObj?.name,
      packageName: currentPkg.name,
      totalEstimate: formattedTotal
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="booking">
      <ScrollReveal direction="up" duration={850} className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-beige/60 shadow-xl overflow-hidden rounded-none items-stretch">
        {/* Left Column: Full-bleed image with no rounded corners, no gap */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
          <img
            src="/images/w3990h6298x0y0-0bac9cff.avif"
            alt="4Chan Homestay Đặt Phòng"
            className="w-full h-full object-cover object-center rounded-none block"
            loading="lazy"
          />
        </div>

        {/* Right Column: The Booking Form - snug fit with brown italic quote */}
        <div className="lg:col-span-7 px-6 py-6 sm:px-10 sm:py-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-center">
          {/* Warm Brown Bold Italic Quote - 3 lines aligned to the right */}
          <div className="mb-4 pb-3 border-b border-beige/35 flex justify-end">
            <blockquote className="font-serif italic font-bold text-[#79523C] text-base sm:text-lg md:text-xl leading-snug sm:leading-normal text-right">
              <span className="block">“Một không gian đủ riêng tư,</span>
              <span className="block">để tận hưởng trọn vẹn</span>
              <span className="block">từng khoảnh khắc.”</span>
            </blockquote>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Step 1: Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Họ và tên của bạn <span className="text-peach">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Minh Quân"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Số điện thoại / Zalo <span className="text-peach">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
                />
              </div>
            </div>

            {/* Step 2: Branch & Room */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Chọn Cơ sở tại Hà Nội
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none cursor-pointer"
                >
                  {locationsData.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.code}: {loc.name} ({loc.district})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Loại Phòng
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none cursor-pointer"
                >
                  {roomsData.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Package & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Gói thời gian
                </label>
                <select
                  value={formData.packageId}
                  onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none cursor-pointer"
                >
                  {pricingPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} ({pkg.timeSlot})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Ngày & Giờ nhận phòng <span className="text-peach">*</span>
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.checkinTime}
                  onChange={(e) => setFormData({ ...formData, checkinTime: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
                />
              </div>
            </div>

            {/* Step 4: Notes */}
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                Ghi chú thêm (nếu có)
              </label>
              <textarea
                rows={2}
                placeholder="Yêu cầu set up đặc biệt, check-in muộn,..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
              ></textarea>
            </div>

            {/* Live Price Estimation Bar */}
            <div className="p-4 rounded-2xl bg-[#F6EFE6] border border-beige/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <p className="text-xs text-charcoal-light">Tạm tính giá phòng dự kiến:</p>
                <p className="font-serif font-bold text-xl text-peach-dark">
                  {formattedTotal}
                </p>
              </div>
              {isWeekend && (
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-peach/20 text-peach-dark font-semibold">
                  Đã gồm +50k phụ thu cuối tuần
                </span>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-peach hover:bg-peach-dark text-ivory font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg uppercase"
              >
                Xác nhận đặt phòng ngay
              </button>
              <p className="text-center text-[11px] text-charcoal-light mt-2">
                * Không yêu cầu thanh toán thẻ tín dụng trước. Hỗ trợ tư vấn và xác nhận sau 5 phút.
              </p>
            </div>
          </form>
        </div>
      </ScrollReveal>

      {/* Success Modal */}
      {submittedBooking && (
        <BookingSuccessModal
          bookingData={submittedBooking}
          onClose={() => setSubmittedBooking(null)}
        />
      )}
    </section>
  );
}
