import React from 'react';

interface TrustMetricsSectionProps {
  onOpenLogisticsModal: () => void;
  onOpenQualityModal: () => void;
  onOpenSafetyModal: () => void;
  onOpenHistoryModal: () => void;
}

export const TrustMetricsSection: React.FC<TrustMetricsSectionProps> = ({
  onOpenLogisticsModal,
  onOpenQualityModal,
  onOpenSafetyModal,
  onOpenHistoryModal,
}) => {
  return (
    <section className="py-space-2xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Metric 1 */}
          <div 
            onClick={onOpenHistoryModal}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-secondary/20"
          >
            <div className="h-1 bg-secondary absolute top-0 left-0 right-0"></div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                ESTABLISHED 1970s
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">50년 가스 전문 기업</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                반세기 동안 축적된 고압·특수가스 핸들링 엔지니어링 기술력과 반도체 산업군 맞춤 공급 인프라.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-secondary font-data-mono-md text-data-mono-md group-hover:translate-x-1 transition-transform">
              <span>MS GAS TRACK RECORD</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div 
            onClick={onOpenLogisticsModal}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-secondary/20"
          >
            <div className="h-1 bg-secondary absolute top-0 left-0 right-0"></div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                NATIONWIDE NETWORK
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">전국 7개 사업장</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                수도권 Fab부터 영호남 거점까지 연중무휴(24/7) 가스 배송 체계 및 긴급 엔지니어링 출동망 완비.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-secondary font-data-mono-md text-data-mono-md group-hover:translate-x-1 transition-transform">
              <span>7 SITES LOGISTICS</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div 
            onClick={onOpenQualityModal}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-secondary/20"
          >
            <div className="h-1 bg-secondary absolute top-0 left-0 right-0"></div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                LOCAL REPACKAGING
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">국내 소분 · 안전재고</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                해외 직도입 시 발생하는 공급 리스크 차단. 고객사 라인별 3개월 분량 버퍼 재고 상시 운영.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-secondary font-data-mono-md text-data-mono-md group-hover:translate-x-1 transition-transform">
              <span>ZERO BOTTLENECK</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>

          {/* Metric 4 */}
          <div 
            onClick={onOpenSafetyModal}
            className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-secondary/20"
          >
            <div className="h-1 bg-secondary absolute top-0 left-0 right-0"></div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                SAFETY PROTOCOL
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">위험물 안전관리 체계</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                고압가스안전관리법 및 화학물질관리법 완전 준수. 전문 비상대응팀(ERT) 상시 운용.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-secondary font-data-mono-md text-data-mono-md group-hover:translate-x-1 transition-transform">
              <span>KOSHA VERIFIED</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
