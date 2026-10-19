import React from 'react';

interface SemiconBannerProps {
  onOpenReservationModal: () => void;
}

export const SemiconBanner: React.FC<SemiconBannerProps> = ({ onOpenReservationModal }) => {
  return (
    <section className="py-space-2xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl">
        <div className="bg-gradient-to-r from-primary-container via-secondary to-primary-container text-on-primary p-space-xl md:p-space-2xl rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl relative overflow-hidden border border-white/10">
          {/* Subtle background graphics */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full object-cover">
              <polygon points="100,10 190,60 190,160 100,210 10,160 10,60" stroke="currentColor" fill="none" strokeWidth="2" />
              <polygon points="100,30 170,70 170,150 100,190 30,150 30,70" stroke="currentColor" fill="none" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex flex-col gap-space-sm max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-space-xs bg-surface/20 px-space-sm py-space-2xs rounded-full self-start backdrop-blur-sm border border-white/20">
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">event</span>
              <span className="font-label-caps text-label-caps text-on-primary font-bold">
                EXHIBITION PREVIEW
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-primary font-bold">
              SEMICON Korea 2027에서 만나요
            </h3>
            <p className="font-title-md text-title-md text-primary-fixed">
              2027년 2월 17일(수) ~ 19일(금) · 서울 코엑스(COEX) Hall D · 부스 No. D-420
            </p>
            <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
              전시 현장에서 Shin-Etsu 클로로실란 소분 실린더 샘플 실물 및 분석 데이터(CoA) 원본을 직접 확인하실 수 있으며, 특수가스 전문 엔지니어와 1:1 맞춤 기술 상담이 진행됩니다.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenReservationModal}
              className="px-space-xl py-space-md bg-surface text-primary-container hover:bg-surface-container rounded-lg font-title-lg text-title-lg transition-all shadow-md flex items-center gap-space-xs font-semibold cursor-pointer group"
            >
              <span>SEMICON 현장 상담 사전 예약하기</span>
              <span className="material-symbols-outlined text-[20px] text-secondary transition-transform group-hover:scale-110">
                calendar_month
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
