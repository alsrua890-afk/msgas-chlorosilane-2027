import React from 'react';

interface CompetitiveEdgeSectionProps {
  onOpenCoA: () => void;
  onOpenLogistics: () => void;
  onOpenCylinderSpecs: () => void;
}

export const CompetitiveEdgeSection: React.FC<CompetitiveEdgeSectionProps> = ({
  onOpenCoA,
  onOpenLogistics,
  onOpenCylinderSpecs,
}) => {
  return (
    <section className="py-space-3xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
            Competitive Edge
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            왜 MS가스의 클로로실란인가
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Diff 1 */}
          <div 
            onClick={onOpenCoA}
            className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all cursor-pointer border border-surface-container group"
          >
            <div className="flex flex-col gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">analytics</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                완벽한 품질 유지: 소분 후 엄격한 2차 재분석 CoA 발행
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Shin-Etsu 입고 검사(1차)에 그치지 않고, 충남 공주 클린룸 소분 과정 전후로 ICP-MS(유도결합플라즈마 질량분석기) 및 GC(가스크로마토그래피)를 가동하여 미량 금속 및 수분 농도를 철저히 재측정하여 성적서를 고객사에 인도합니다.
              </p>
            </div>
            <div className="pt-space-md font-data-mono-md text-label-caps text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>DOUBLE ANALYSIS PROTOCOL</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>

          {/* Diff 2 */}
          <div 
            onClick={onOpenLogistics}
            className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all cursor-pointer border border-surface-container group"
          >
            <div className="flex flex-col gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">inventory_2</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                신속하고 안정적인 납기: 국내 안전재고로 수급 리스크 해소
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                글로벌 공급망 쇼크, 해상 운임 폭등, 수입 통관 지연 등 예기치 못한 돌발 상황에도 고객사 생산 라인이 중단되지 않도록 국내 전용 저장 시설 내 항시 안전재고를 비축하여 긴급 발주시 즉각 출하합니다.
              </p>
            </div>
            <div className="pt-space-md font-data-mono-md text-label-caps text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>BUFFER STOCK STRATEGY</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>

          {/* Diff 3 */}
          <div 
            onClick={onOpenCylinderSpecs}
            className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all cursor-pointer border border-surface-container group"
          >
            <div className="flex flex-col gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">tune</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                유연한 맞춤 패키지: 연구용 47L부터 대형 톤실린더까지
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                신규 R&amp;D 라인용 소형 실린더(47L), 대규모 양산 팹용 440L Y-실린더, 벌크 ISO 탱크까지 고객사의 배관 인터페이스, 밸브 규격(CGA, DISS, DIN), 공정 조건에 맞추어 커스텀 충전 사양을 제공합니다.
              </p>
            </div>
            <div className="pt-space-md font-data-mono-md text-label-caps text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>FLEXIBLE CYLINDER SPECS</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
