import React, { useState } from 'react';

interface SemiconModalProps {
  onClose: () => void;
}

export const SemiconModal: React.FC<SemiconModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    department: '',
    email: '',
    phone: '',
    date: '2027-02-17',
    time: '14:00',
    topic: '클로로실란(DCS/TCS) 국내 소분 품질 및 리드타임 협의',
    attendees: '2명',
  });
  const [isBooked, setIsBooked] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `SEMI27-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-container via-secondary to-primary-container text-on-primary p-6 md:p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 flex items-center justify-center text-on-primary transition-colors"
            title="닫기"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/20 text-secondary-fixed font-label-caps text-label-caps mb-2 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            SEMICON KOREA 2027 BOOTH D-420
          </div>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-primary">
            SEMICON Korea 2027 현장 기술상담 사전 예약
          </h2>
          <p className="text-primary-fixed-dim font-body-md text-sm mt-1">
            2027.02.17(수) ~ 19(금) · 서울 COEX 3층 Hall D · 부스 No. D-420
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-surface-container-low rounded-xl text-xs text-on-surface-variant flex items-center gap-2 border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                사전 예약 고객께는 Shin-Etsu 클로로실란 실물 샘플 키트 및 특수가스 테크니컬 브로셔를 현장 증정합니다.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    신청자 성함 <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동 수석연구원"
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    소속 기업명 / 기관 <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="(주)삼성전자 / SK하이닉스 등"
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    회사 이메일 <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="engineer@company.com"
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    연락처 (휴대전화) <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-1234-5678"
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    희망 방문 일자 <span className="text-secondary">*</span>
                  </label>
                  <select
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  >
                    <option value="2027-02-17">2027-02-17 (수)</option>
                    <option value="2027-02-18">2027-02-18 (목)</option>
                    <option value="2027-02-19">2027-02-19 (금)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    희망 시간대 <span className="text-secondary">*</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  >
                    <option value="10:30">10:30 (오전 세션)</option>
                    <option value="11:30">11:30 (오전 세션)</option>
                    <option value="13:30">13:30 (오후 세션)</option>
                    <option value="14:30">14:30 (오후 세션)</option>
                    <option value="15:30">15:30 (오후 세션)</option>
                    <option value="16:30">16:30 (오후 세션)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    예상 동행 인원
                  </label>
                  <select
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                  >
                    <option value="1명">1명 (단독)</option>
                    <option value="2명">2명</option>
                    <option value="3~4명">3~4명 (팀 단위)</option>
                    <option value="5명 이상">5명 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  주요 상담 희망 안건
                </label>
                <input
                  type="text"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  placeholder="예: DCS 5N 초고순도 장기 공급 계약 및 공주 클린룸 실사 일정 협의"
                  className="w-full h-10 px-3 bg-surface-container-low rounded-lg text-sm text-on-surface border border-surface-container focus:outline-none focus:border-secondary"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-11 bg-secondary text-on-secondary rounded-lg font-title-md text-base hover:bg-on-secondary-fixed-variant transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <span>SEMICON 2027 사전 상담 예약 확정하기</span>
                  <span className="material-symbols-outlined text-[18px]">event_available</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[36px]">check</span>
              </div>
              <div>
                <h3 className="font-headline-md text-2xl text-on-surface font-bold">
                  상담 예약이 정상 접수되었습니다!
                </h3>
                <p className="text-body-md text-on-surface-variant mt-1">
                  입력하신 이메일({formData.email})로 현장 부스 방문 확인증 및 모바일 패스가 발송되었습니다.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-5 bg-surface-container-low rounded-2xl border-2 border-dashed border-secondary/40 text-left space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-between border-b border-surface-container pb-2">
                  <span className="font-label-caps text-xs text-secondary font-bold">SEMICON KOREA 2027 VIP PASS</span>
                  <span className="font-data-mono-md text-xs bg-surface-container-highest px-2 py-0.5 rounded font-bold">
                    {ticketId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-data-mono-md">
                  <div>
                    <span className="text-on-surface-variant block">예약자:</span>
                    <strong className="text-on-surface">{formData.name} ({formData.company})</strong>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">예약 일시:</span>
                    <strong className="text-secondary">{formData.date} {formData.time}</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-on-surface-variant block">부스 위치:</span>
                    <strong className="text-on-surface">서울 삼성동 COEX Hall D · No. D-420 ((주)MS가스)</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-secondary text-on-secondary rounded-lg font-title-md text-sm hover:bg-on-secondary-fixed-variant transition-colors"
                >
                  확인 완료
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
