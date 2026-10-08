import React from 'react';
import { CheckCircle, X, Calendar, MapPin, Clock, Home, Phone, User } from 'lucide-react';

export default function BookingSuccessModal({ bookingData, onClose }) {
  if (!bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-beige/40">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal/60 hover:text-charcoal hover:bg-beige-light transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-sage/20 text-sage-dark flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal">
            Đã nhận yêu cầu đặt phòng!
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
            Cảm ơn <strong className="text-charcoal">{bookingData.fullName}</strong>. Tư vấn viên của 4Chan sẽ liên hệ qua Zalo / SĐT <strong className="text-peach-dark">{bookingData.phone}</strong> trong vòng 5 phút để xác nhận và gửi mã khóa phòng.
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-beige-light/60 p-4 rounded-2xl border border-beige/40 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center justify-between py-1 border-b border-beige/30">
            <span className="text-charcoal-light flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-peach" />
              <span>Cơ sở:</span>
            </span>
            <span className="font-semibold text-charcoal">{bookingData.branchName}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-beige/30">
            <span className="text-charcoal-light flex items-center gap-1.5">
              <Home className="w-4 h-4 text-peach" />
              <span>Loại phòng:</span>
            </span>
            <span className="font-semibold text-charcoal">{bookingData.roomName}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-beige/30">
            <span className="text-charcoal-light flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-peach" />
              <span>Gói thời gian:</span>
            </span>
            <span className="font-semibold text-charcoal">{bookingData.packageName}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-beige/30">
            <span className="text-charcoal-light flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-peach" />
              <span>Thời gian nhận:</span>
            </span>
            <span className="font-semibold text-charcoal">{bookingData.checkinTime}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-bold text-charcoal">Tạm tính:</span>
            <span className="font-serif font-bold text-lg text-peach">{bookingData.totalEstimate}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-peach hover:bg-peach-dark text-ivory font-bold text-sm tracking-wide transition-all shadow-md"
          >
            Đóng & Tiếp tục duyệt website
          </button>
        </div>
      </div>
    </div>
  );
}
