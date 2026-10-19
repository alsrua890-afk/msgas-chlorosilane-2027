import React from 'react';

interface HeroSectionProps {
  onSampleRequest: () => void;
  onOpenTechDocs: () => void;
  onOpenLogisticsModal: () => void;
  onOpenQualityModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSampleRequest,
  onOpenTechDocs,
  onOpenLogisticsModal,
  onOpenQualityModal,
}) => {
  return (
    <section className="relative bg-primary-container text-on-primary overflow-hidden -mt-20 pt-28 pb-space-3xl">
      {/* Ambient wafer schematic background overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          fill="none"
          viewBox="0 0 1000 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="300" r="280" stroke="currentColor" strokeDasharray="6 6" strokeWidth="1.5" />
          <circle cx="500" cy="300" r="190" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="300" r="100" stroke="currentColor" strokeWidth="0.8" />
          <path d="M150 300H850M500 50V550M250 150L750 450M250 450L750 150" stroke="currentColor" strokeWidth="0.5" />
          <rect height="120" stroke="currentColor" strokeWidth="1" width="160" x="420" y="240" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl relative z-10 flex flex-col gap-space-xl">
        {/* Shin-Etsu Partner Tag */}
        <div className="inline-flex items-center gap-space-xs bg-surface/10 backdrop-blur-md px-space-md py-space-xs rounded-full self-start shadow-sm border border-white/10">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-wide font-bold">
            SHIN-ETSU OFFICIAL PARTNER
          </span>
          <span className="text-on-primary-container text-body-sm">|</span>
          <span className="font-body-sm text-body-sm text-on-primary font-medium">
            일본 신에츠화학(Shin-Etsu) 공식 파트너 · 국내 MS머트리얼즈 소분 공급
          </span>
        </div>

        {/* Hero Typography */}
        <div className="max-w-4xl flex flex-col gap-space-md">
          <h1 className="font-display text-display text-on-primary tracking-tight leading-none">
            신에츠의 품질 그대로,<br />
            <span className="text-secondary-fixed-dim">MS가스의 속도</span>로 공급합니다
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl leading-relaxed">
            반도체 팹 핵심 에피택시 원소재 클로로실란(DCS · TCS · STC).<br />
            신에츠 초고순도 원료를 직도입하여 충남 공주 클린룸에서 직접 소분·재분석하여 최단 리드타임으로 납품합니다.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-space-md">
          <button
            onClick={onSampleRequest}
            className="px-space-lg py-space-sm bg-secondary text-on-secondary rounded-lg font-title-md text-title-md hover:bg-on-secondary-fixed-variant transition-all shadow-[0_4px_16px_rgba(0,92,189,0.35)] flex items-center gap-space-xs cursor-pointer group"
          >
            <span>샘플 요청하기</span>
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
          
          <button
            onClick={onOpenTechDocs}
            className="px-space-lg py-space-sm bg-surface/10 text-on-primary rounded-lg font-title-md text-title-md hover:bg-surface/20 transition-all flex items-center gap-space-xs backdrop-blur-sm border border-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            <span>기술자료 및 CoA 받기</span>
          </button>
        </div>

        {/* Live Plant Operational Metrics Banner */}
        <div className="mt-space-lg grid grid-cols-1 md:grid-cols-3 gap-space-xs bg-surface-container-highest/15 rounded-xl p-space-xs backdrop-blur-md border border-white/10">
          <button
            onClick={onOpenLogisticsModal}
            className="flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container-highest/20 hover:bg-surface-container-highest/30 transition-colors rounded-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-secondary-container text-[24px]">factory</span>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase">Production Status</span>
              <span className="font-title-md text-title-md text-on-primary flex items-center gap-1">
                충남 공주 소분 공장 상시 가동 중
                <span className="material-symbols-outlined text-[16px] opacity-70">open_in_new</span>
              </span>
            </div>
          </button>

          <button
            onClick={onOpenQualityModal}
            className="flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container-highest/20 hover:bg-surface-container-highest/30 transition-colors rounded-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-secondary-container text-[24px]">verified</span>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase">Quality Standard</span>
              <span className="font-title-md text-title-md text-on-primary flex items-center gap-1">
                초고순도 5N ~ 11N 품질 보증
                <span className="material-symbols-outlined text-[16px] opacity-70">open_in_new</span>
              </span>
            </div>
          </button>

          <button
            onClick={onOpenLogisticsModal}
            className="flex items-center gap-space-sm px-space-md py-space-sm bg-surface-container-highest/20 hover:bg-surface-container-highest/30 transition-colors rounded-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-secondary-container text-[24px]">local_shipping</span>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase">Lead Time Guarantee</span>
              <span className="font-title-md text-title-md text-on-primary flex items-center gap-1">
                국내 안전재고 24시간 긴급 출하
                <span className="material-symbols-outlined text-[16px] opacity-70">open_in_new</span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
