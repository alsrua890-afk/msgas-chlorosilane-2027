import React from 'react';
import { PRODUCTS_DATA, ProductDetail } from '../data/mockData';

interface SafetySectionProps {
  onOpenSdsModal: (product: ProductDetail) => void;
  onOpenCylinderSpecsModal: () => void;
  onOpenLogisticsModal: () => void;
}

export const SafetySection: React.FC<SafetySectionProps> = ({
  onOpenSdsModal,
  onOpenCylinderSpecsModal,
  onOpenLogisticsModal,
}) => {
  return (
    <section className="py-space-3xl bg-surface-container-low" id="safety-tech">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
            Hazard Control &amp; Compliance
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            무결점 품질 &amp; 특수가스 안전 관리
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            반도체 반응성 가스를 다루는 가장 엄격한 안전 프로토콜과 공학적 신뢰성
          </p>
        </div>

        {/* Critical Hazard Warning Box */}
        <div className="bg-error-container text-on-error-container p-space-lg rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md border border-red-200">
          <div className="flex items-start gap-space-md">
            <span className="material-symbols-outlined text-[32px] text-error shrink-0 mt-1">
              warning
            </span>
            <div className="flex flex-col gap-space-2xs">
              <h4 className="font-title-lg text-title-lg text-error font-bold">
                주의: 반응성 클로로실란계 위험물 취급 지침
              </h4>
              <p className="font-body-md text-body-md text-on-error-container">
                클로로실란 화합물(DCS, TCS, STC)은 대기 중 수분 및 습기와 격렬히 반응하여 부식성 염화수소(HCl) 가스를 급격히 방출합니다. 전용 퍼지 시스템, 내식성 SUS316L 배관 및 적정 배기 스크러버 설비 연결이 필수적입니다.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest/80 px-space-md py-space-xs rounded-lg text-body-sm font-data-mono-md text-error font-semibold shrink-0 border border-red-300">
            GHS HAZARD: H314 / H250 / H330
          </div>
        </div>

        {/* Detail Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Maintenance */}
          <div 
            onClick={onOpenCylinderSpecsModal}
            className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[24px]">build_circle</span>
                <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                  전문 용기 유지관리
                </h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                실린더 내면 전해연마(EP 처리) 및 헬륨 리크 디텍터를 이용한 밸브 기밀 테스트를 충전 전 전수 실시하여 초미세 파티클 발생을 근원적으로 차단합니다.
              </p>
            </div>
            <div className="pt-space-md text-label-caps font-data-mono-md text-on-surface-variant flex items-center justify-between border-t border-surface-container mt-4">
              <span>HE LEAK TEST &lt; 1×10⁻⁹ mbar·l/s</span>
              <span className="material-symbols-outlined text-[16px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
            </div>
          </div>

          {/* Specialized Transport */}
          <div 
            onClick={onOpenLogisticsModal}
            className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[24px]">fmd_good</span>
                <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                  특수 전용 운송 체계
                </h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                실시간 GPS 위치 추적, 내부 온도 모니터링 및 유독가스 누출 감지 센서가 탑재된 특수가스 전용 차량으로 전담 엔지니어가 고객사 팹까지 직접 수송합니다.
              </p>
            </div>
            <div className="pt-space-md text-label-caps font-data-mono-md text-on-surface-variant flex items-center justify-between border-t border-surface-container mt-4">
              <span>24/7 SATELLITE TRACKING</span>
              <span className="material-symbols-outlined text-[16px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
            </div>
          </div>

          {/* Technical Documents Download */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[24px]">assignment</span>
                <h4 className="font-title-lg text-title-lg text-on-surface font-bold">
                  MSDS / SDS 다운로드
                </h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                공정 안전성 평가 및 규정 승인을 위한 최신 국문/영문 물질안전보건자료를 즉시 열람하실 수 있습니다.
              </p>
            </div>
            <div className="pt-space-md flex flex-col gap-space-2xs mt-4">
              {PRODUCTS_DATA.map((product) => {
                const sizeMap: Record<string, string> = {
                  dcs: 'PDF 1.2MB',
                  tcs: 'PDF 1.4MB',
                  stc: 'PDF 1.1MB',
                };
                return (
                  <button
                    key={product.id}
                    onClick={() => onOpenSdsModal(product)}
                    className="px-space-sm py-space-2xs bg-surface-container-high rounded text-body-sm font-data-mono-md text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between text-left cursor-pointer group"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">picture_as_pdf</span>
                      [SDS] {product.name}
                    </span>
                    <span className="text-label-caps text-on-surface-variant group-hover:text-secondary font-semibold">
                      {sizeMap[product.id] || 'PDF 1.0MB'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
