export const pricingPackages = [
  {
    id: '3h',
    name: '3 Giờ',
    badge: 'Linh Hoạt',
    timeSlot: 'Từ lúc nhận phòng',
    prices: {
      window: { price: 249000, display: '249k' },
      balcony: { price: 279000, display: '279k' }
    }
  },
  {
    id: 'combo-lunch',
    name: 'Combo Trưa — 5 Giờ',
    badge: 'Combo Trưa',
    timeSlot: '10:00 – 15:00',
    prices: {
      window: { price: 279000, display: '279k' },
      balcony: { price: 309000, display: '309k' }
    }
  },
  {
    id: 'day-12h',
    name: 'Trong Ngày — 12 Giờ',
    badge: 'Trong Ngày',
    timeSlot: 'Từ lúc nhận phòng',
    prices: {
      window: { price: 409000, display: '409k' },
      balcony: { price: 479000, display: '479k' }
    }
  },
  {
    id: 'overnight',
    name: 'Qua Đêm — 12 Giờ',
    badge: 'Qua Đêm',
    timeSlot: '21:00 – 09:00 hôm sau',
    prices: {
      window: { price: 449000, display: '449k' },
      balcony: { price: 539000, display: '539k' }
    }
  },
  {
    id: '2d1n',
    name: '2 Ngày 1 Đêm',
    badge: 'Lưu Trú Dài',
    timeSlot: '15:00 – 11:00 hôm sau',
    prices: {
      window: { price: 479000, display: '479k' },
      balcony: { price: 549000, display: '549k' }
    }
  },
  {
    id: '24h',
    name: 'Một Ngày — 24 Giờ',
    badge: 'Trọn Vẹn 24H',
    timeSlot: '10:00 – 10:00 hôm sau',
    prices: {
      window: { price: 549000, display: '549k' },
      balcony: { price: 609000, display: '609k' }
    },
  }
];

export const pricingPolicies = {
  extraHour: {
    title: 'Thêm giờ',
    amount: '+60k/giờ',
    note: 'Ngoài thời gian của gói.'
  },
  weekendSurcharge: {
    title: 'Thứ 6, Thứ 7',
    amount: '+50k',
    note: 'Giá phòng được điều chỉnh +50k.'
  }
};
