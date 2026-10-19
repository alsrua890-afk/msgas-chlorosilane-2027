import React, { useState } from 'react';

interface SupplyChainSectionProps {
  onOpenLogisticsModal: () => void;
  onOpenQualityModal: () => void;
}

export const SupplyChainSection: React.FC<SupplyChainSectionProps> = ({
  onOpenLogisticsModal,
  onOpenQualityModal,
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      code: 'ORIGIN: JAPAN',
      title: '신에츠화학 (제조)',
      desc: '글로벌 최고 수준의 클로로실란 초고순도 원료 생산 및 Shin-Etsu 1차 성적서 발급.',
      tag: '• 원료 분석 데이터 완비',
      isHighlight: false,
    },
    {
      num: '02',
      code: 'IMPORT & CLEARANCE',
      title: 'MS가스 (직도입)',
      desc: '특수가스 전용 선적 및 보세창고 인프라를 활용하여 원스톱 통관 및 안전 운송 보장.',
      tag: '• 특수가스 전용 위험물 통관',
      isHighlight: false,
    },
    {
      num: '03',
      code: 'CORE FACILITY',
      title: '(주)MS머트리얼즈',
      desc: '충남 공주 클린룸에서 고객사 사양 맞춤 소분·충전, GC 및 ICP-MS 2차 정밀 재분석 후 최종 CoA 발행.',
      tag: '★ 클린룸 소분 & 2차 CoA',
      isHighlight: true,
    },
    {
      num: '04',
      code: 'FAB DELIVERY',
      title: '고객사 라인 납품',
      desc: '반도체 Fab, 광섬유 제조 라인에 안전재고 기반으로 중단 없는 JIT(Just-in-Time) 정시 투입.',
      tag: '• 고객 라인 직결 투입',
      isHighlight: false,
    },
  ];

  return (
    <section className="py-space-3xl bg-surface-container-low" id="supply-chain">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
            Verified Logistics Network
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            신뢰할 수 있는 단축 공급망: 일본 직수입에서 국내 소분까지
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            원재료 제조원(신에츠)의 무결성부터 국내 팹 도착 직전까지 2중 정밀 분석으로 리드타임과 품질 리스크를 극적으로 단축합니다.
          </p>
        </div>

        {/* Process Diagram Flow (4 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => {
                setActiveStep(idx);
                if (step.isHighlight) {
                  onOpenQualityModal();
                } else if (idx === 1 || idx === 3) {
                  onOpenLogisticsModal();
                }
              }}
              className={`p-space-lg rounded-xl flex flex-col justify-between shadow-sm relative transition-all cursor-pointer ${
                step.isHighlight
                  ? 'bg-primary-container text-on-primary shadow-xl md:scale-105 z-10 border-2 border-secondary'
                  : 'bg-surface-container-lowest text-on-surface hover:shadow-md border border-surface-container'
              } ${activeStep === idx ? 'ring-2 ring-secondary' : ''}`}
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span
                    className={`w-7 h-7 rounded-full font-data-mono-md text-data-mono-md flex items-center justify-center font-bold ${
                      step.isHighlight
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-surface-container text-on-surface'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`font-label-caps text-label-caps ${
                      step.isHighlight
                        ? 'text-secondary-fixed bg-surface-container-highest/20 px-space-2xs rounded'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {step.code}
                  </span>
                </div>

                <h4
                  className={`font-title-lg text-title-lg mt-space-xs ${
                    step.isHighlight ? 'text-on-primary' : 'text-on-surface'
                  }`}
                >
                  {step.title}
                </h4>

                <p
                  className={`font-body-sm text-body-sm leading-relaxed ${
                    step.isHighlight ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                  }`}
                >
                  {step.desc}
                </p>
              </div>

              <div
                className={`pt-space-md text-body-sm font-data-mono-md ${
                  step.isHighlight ? 'text-secondary-fixed-dim font-bold' : 'text-on-surface-variant'
                }`}
              >
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Lead-time Reduction Comparison Banner */}
        <div 
          onClick={onOpenLogisticsModal}
          className="bg-surface-container-highest p-space-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md border border-surface-container-high shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow">
              <span className="material-symbols-outlined text-[28px]">speed</span>
            </div>
            <div>
              <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-1.5">
                해외 수입 직납 대비 납기 최대 60% 단축 실현
                <span className="material-symbols-outlined text-[18px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                해외 컨테이너 통관 지연 및 글로벌 선박 물류 불안정을 완벽히 배제하는 국내 소분형 버퍼 공급망
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <div className="text-right">
              <span className="font-label-caps text-label-caps text-on-surface-variant block font-bold">
                LEAD TIME
              </span>
              <span className="font-headline-md text-headline-md text-secondary font-bold">
                8~12주 → 24~48시간
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
