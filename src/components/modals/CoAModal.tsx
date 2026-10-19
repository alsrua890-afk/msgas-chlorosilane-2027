import React from 'react';
import { ProductDetail } from '../../data/mockData';

interface CoAModalProps {
  product: ProductDetail | null;
  onClose: () => void;
  onOpenSampleRequest: (productName: string) => void;
}

export const CoAModal: React.FC<CoAModalProps> = ({ product, onClose, onOpenSampleRequest }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Header Banner */}
        <div className="bg-primary-container text-on-primary p-6 md:p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 flex items-center justify-center text-on-primary transition-colors"
            title="닫기"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-caps text-label-caps font-bold">
              OFFICIAL CERTIFICATE OF ANALYSIS
            </span>
            <span className="px-2.5 py-1 rounded bg-surface/10 text-primary-fixed font-data-mono-md text-data-mono-md">
              LOT #{product.coAData.lotNumber}
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-300 font-data-mono-md text-data-mono-md ml-auto">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              2차 재분석 적격 (PASSED)
            </span>
          </div>

          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-primary mb-2">
            시험분석 성적서 (CoA) — {product.name}
          </h2>
          <p className="text-primary-fixed-dim font-body-md text-sm md:text-base max-w-2xl">
            원료 제조원: 일본 신에츠화학(Shin-Etsu Chemical) 입고 분석 + MS머트리얼즈 공주 클린룸 충전 2차 ICP-MS/GC 정밀 재검사 결과표
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Key Product Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-surface-container-low rounded-xl text-body-sm font-data-mono-md border border-surface-container">
            <div>
              <span className="text-on-surface-variant block text-xs">화학식 (Formula)</span>
              <strong className="text-on-surface text-base">{product.formula}</strong>
            </div>
            <div>
              <span className="text-on-surface-variant block text-xs">CAS 번호</span>
              <strong className="text-on-surface text-base">{product.casNo}</strong>
            </div>
            <div>
              <span className="text-on-surface-variant block text-xs">제조일자</span>
              <span className="text-on-surface font-semibold">{product.coAData.manufacturingDate}</span>
            </div>
            <div>
              <span className="text-on-surface-variant block text-xs">분석 시험 완료일</span>
              <span className="text-secondary font-bold">{product.coAData.testDate}</span>
            </div>
          </div>

          {/* Assay Result */}
          <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-between">
            <div>
              <span className="font-label-caps text-secondary text-xs uppercase block">Assay / Total Purity</span>
              <h4 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">
                실제 측정 순도: <span className="text-secondary font-data-mono-lg">{product.coAData.assay}</span>
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-on-surface-variant block">보증 규격 등급</span>
              <span className="font-data-mono-md text-sm font-semibold text-on-surface bg-surface-container-highest px-2.5 py-1 rounded">
                {product.purityGrade}
              </span>
            </div>
          </div>

          {/* Trace Metal Impurities by ICP-MS Table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-title-md text-title-md text-on-surface flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[20px]">science</span>
                미량 금속 불순물 정밀 분석치 (ICP-MS)
              </h4>
              <span className="text-xs font-data-mono-md text-on-surface-variant">장비: Agilent 8900 ICP-MS Triple Quad</span>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-surface-container">
              <table className="w-full text-left text-body-sm font-data-mono-md">
                <thead className="bg-surface-container-high text-on-surface text-xs font-semibold">
                  <tr>
                    <th className="py-2.5 px-4">분석 원소 (Element)</th>
                    <th className="py-2.5 px-4">원소 기호</th>
                    <th className="py-2.5 px-4">고객사 보증 규격 (Spec)</th>
                    <th className="py-2.5 px-4">실측치 (Measured)</th>
                    <th className="py-2.5 px-4 text-center">판정 (Result)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {product.coAData.metals.map((item, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="py-2.5 px-4 font-body-md text-on-surface">{item.element}</td>
                      <td className="py-2.5 px-4 text-secondary font-bold">{item.symbol}</td>
                      <td className="py-2.5 px-4 text-on-surface-variant">{item.spec}</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-600">{item.measured}</td>
                      <td className="py-2.5 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                          PASS
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gas Phase Impurities (GC) Table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-title-md text-title-md text-on-surface flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[20px]">equalizer</span>
                기상 불순물 및 할로겐 성분 (GC-TCD/FID)
              </h4>
              <span className="text-xs font-data-mono-md text-on-surface-variant">장비: Shimadzu GC-2030</span>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-surface-container">
              <table className="w-full text-left text-body-sm font-data-mono-md">
                <thead className="bg-surface-container-high text-on-surface text-xs font-semibold">
                  <tr>
                    <th className="py-2.5 px-4">검출 항목 (Component)</th>
                    <th className="py-2.5 px-4">허용 한계 (Spec)</th>
                    <th className="py-2.5 px-4">실측 농도 (Measured)</th>
                    <th className="py-2.5 px-4 text-center">판정 (Result)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {product.coAData.gases.map((gas, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="py-2.5 px-4 font-body-md text-on-surface">{gas.component}</td>
                      <td className="py-2.5 px-4 text-on-surface-variant">{gas.spec}</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-600">{gas.measured}</td>
                      <td className="py-2.5 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                          PASS
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Signoff / Traceability Footer Note */}
          <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container text-xs text-on-surface-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-on-surface">분석책임자: (주)MS머트리얼즈 특수가스 품질보증실장</p>
              <p>충남 공주시 탄천산단길 120 / 시험장비 교정주기 KOLAS 준수</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded bg-surface-container-highest text-on-surface font-data-mono-md">
                ISO 9001 / ISO 14001
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 md:p-6 bg-surface-container-low border-t border-surface-container flex flex-wrap items-center justify-between gap-3">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-surface-container-highest hover:bg-surface-container-high text-on-surface rounded-lg font-title-md text-sm flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            성적서 인쇄 / PDF 저장
          </button>

          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-on-surface-variant hover:text-on-surface rounded-lg font-title-md text-sm transition-colors"
            >
              닫기
            </button>
            <button 
              onClick={() => {
                onClose();
                onOpenSampleRequest(product.name);
              }}
              className="px-5 py-2 bg-secondary text-on-secondary rounded-lg font-title-md text-sm hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-1.5 shadow"
            >
              <span>이 규격으로 샘플 요청하기</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
