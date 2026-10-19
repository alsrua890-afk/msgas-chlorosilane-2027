import React, { useState } from 'react';
import { ProductDetail } from '../../data/mockData';

interface SdsModalProps {
  initialProduct: ProductDetail;
  allProducts: ProductDetail[];
  onClose: () => void;
}

export const SdsModal: React.FC<SdsModalProps> = ({ initialProduct, allProducts, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail>(initialProduct);

  const getSdsDetails = (id: string) => {
    switch (id) {
      case 'dcs':
        return {
          title: 'DCS (디클로로실란) 물질안전보건자료 [K-REACH / 산업안전보건법 준수]',
          ghsCodes: 'H220 (극인화성 가스), H280 (고압가스), H314 (중증 피부화상/안구 손상), H330 (흡입 시 치명적)',
          precautions: 'P210 (열·스파크·화염 금지), P260 (가스·미스트 흡입 금지), P280 (보호장갑·보호의·보안경 착용), P304+P340 (신선한 공기 흡입 후 호흡 용이 자세 유지)',
          exposureLimit: 'TWA: 0.5 ppm (노동부 고시 제2024-11호 준수)',
          reactivity: '수분과 격렬히 반응하여 염화수소(HCl) 가스를 급격히 분출함. 공기 중에서 자연발화(Pyrophoric) 위험 상존.',
          ppe: '양압식 공기호흡기(SCBA), 내화학 전신보호복(Level A/B), 부틸고무 장갑, 네오프렌 안전화',
          fireExtinguish: '물 사용 절대 금지(반응 가속). 무수 건조 분말소화기, 이산화탄소, 전용 드라이 모래 사용.',
        };
      case 'tcs':
        return {
          title: 'TCS (트리클로로실란) 물질안전보건자료 [K-REACH / 화학물질관리법 유독물질 준수]',
          ghsCodes: 'H224 (극인화성 액체 및 증기), H250 (공기 노출 시 자연발화), H314 (중증 피부화상), H331 (흡입 시 유독)',
          precautions: 'P210 (스파크 금지), P222 (공기에 노출 금지), P231+P232 (불활성 가스 하에서 취급), P280 (보호장구 착용)',
          exposureLimit: 'TLV-Ceiling: 0.5 ppm (ACGIH 규격)',
          reactivity: '물 및 대기 중 습기와 반응하여 부식성 연무(HCl)와 실리카 침전물 형성. 수소 가스 발생 가능.',
          ppe: '공기호흡기(SCBA), 내화학 장갑, 보안면, 방폭형 환기 설비',
          fireExtinguish: '물 직접 살수 금지. CO2, 건조사(Dry Sand) 피복 질식 소화.',
        };
      case 'stc':
      default:
        return {
          title: 'STC (사염화규소) 물질안전보건자료 [화학물질관리법 사고대비물질 준수]',
          ghsCodes: 'H314 (피부에 심각한 화상 및 눈 손상), H330 (흡입 시 치명적), H335 (호흡기 자극 유발)',
          precautions: 'P260 (분진·흄·가스 흡입 금지), P280 (전면형 방독마스크 착용), P301+P330+P331 (삼켰을 경우 토하게 하지 마시오)',
          exposureLimit: 'TWA: 1.0 ppm',
          reactivity: '비인화성이나 물과 닿으면 심한 발열 반응을 일으켜 자극성/부식성 HCl 가스를 다량 생성.',
          ppe: '산성가스용 복합 카트리지 전면형 방독마스크, 내화학 앞치마 및 장갑',
          fireExtinguish: '주변 화재에 따른 소화 시 분말 또는 이산화탄소 사용. 약제 잔류물 산성화 방지 배수조 연계.',
        };
    }
  };

  const details = getSdsDetails(selectedProduct.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* SDS Header */}
        <div className="bg-[#ba1a1a] text-white p-6 md:p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            title="닫기"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-black/30 font-label-caps text-label-caps font-bold">
              K-REACH & OSHA COMPLIANT SDS
            </span>
            <span className="px-2.5 py-0.5 rounded bg-white/20 font-data-mono-md text-data-mono-md">
              CAS #{selectedProduct.casNo} · UN #{selectedProduct.unNo}
            </span>
          </div>

          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold mb-2">
            {details.title}
          </h2>
          <p className="text-white/80 font-body-md text-sm">
            반도체 Fab 안전관리자 및 공정 취급 엔지니어를 위한 16개 표준 항목 요약 데이터시트
          </p>

          {/* Product Selector Tabs */}
          <div className="flex gap-2 mt-4 pt-3 border-t border-white/20 overflow-x-auto">
            {allProducts.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-title-md transition-colors whitespace-nowrap ${
                  selectedProduct.id === p.id 
                    ? 'bg-white text-[#ba1a1a] font-bold shadow' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {p.name} ({p.formula})
              </button>
            ))}
          </div>
        </div>

        {/* SDS Content */}
        <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto space-y-6">
          {/* GHS Hazard Box */}
          <div className="p-4 bg-error-container rounded-xl text-on-error-container border border-red-200 space-y-2">
            <div className="flex items-center gap-2 text-error font-bold font-title-md">
              <span className="material-symbols-outlined text-[22px]">warning</span>
              GHS 유해·위험성 문구 및 경고
            </div>
            <p className="font-data-mono-md text-sm leading-relaxed">
              {details.ghsCodes}
            </p>
          </div>

          {/* Precautions */}
          <div className="space-y-1.5">
            <h4 className="font-title-md text-on-surface flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[20px]">shield</span>
              예방조치 문구 (P-Codes)
            </h4>
            <div className="p-3.5 bg-surface-container-low rounded-lg text-sm text-on-surface-variant font-data-mono-md border border-surface-container">
              {details.precautions}
            </div>
          </div>

          {/* Grid of Key Safety Measures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-lowest border border-surface-container rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-secondary font-semibold font-title-md">
                <span className="material-symbols-outlined text-[20px]">masks</span>
                개인보호구(PPE) 착용 지침
              </div>
              <p className="text-body-sm text-on-surface leading-relaxed">
                {details.ppe}
              </p>
            </div>

            <div className="p-4 bg-surface-container-lowest border border-surface-container rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-secondary font-semibold font-title-md">
                <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                소화 방법 및 금기 사항
              </div>
              <p className="text-body-sm text-on-surface leading-relaxed">
                {details.fireExtinguish}
              </p>
            </div>

            <div className="p-4 bg-surface-container-lowest border border-surface-container rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-secondary font-semibold font-title-md">
                <span className="material-symbols-outlined text-[20px]">crisis_alert</span>
                화학적 반응성 및 안정성
              </div>
              <p className="text-body-sm text-on-surface leading-relaxed">
                {details.reactivity}
              </p>
            </div>

            <div className="p-4 bg-surface-container-lowest border border-surface-container rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-secondary font-semibold font-title-md">
                <span className="material-symbols-outlined text-[20px]">timer</span>
                작업장 노출 기준 (TWA)
              </div>
              <p className="text-body-sm text-on-surface leading-relaxed">
                {details.exposureLimit}
              </p>
            </div>
          </div>

          {/* Physical & Chemical Constants Table */}
          <div>
            <h4 className="font-title-md text-on-surface mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[20px]">device_thermostat</span>
              주요 물리·화학적 특성 상수
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-data-mono-md">
              <div className="p-2.5 bg-surface-container-low rounded border border-surface-container">
                <span className="text-on-surface-variant block">끓는점 (bp)</span>
                <span className="font-bold text-on-surface text-sm">{selectedProduct.boilingPoint}</span>
              </div>
              <div className="p-2.5 bg-surface-container-low rounded border border-surface-container">
                <span className="text-on-surface-variant block">녹는점 (mp)</span>
                <span className="font-bold text-on-surface text-sm">{selectedProduct.meltingPoint}</span>
              </div>
              <div className="p-2.5 bg-surface-container-low rounded border border-surface-container">
                <span className="text-on-surface-variant block">밀도 (Density)</span>
                <span className="font-bold text-on-surface text-sm">{selectedProduct.density}</span>
              </div>
              <div className="p-2.5 bg-surface-container-low rounded border border-surface-container">
                <span className="text-on-surface-variant block">증기압 (vp)</span>
                <span className="font-bold text-on-surface text-sm">{selectedProduct.vaporPressure}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
          <div className="text-xs text-on-surface-variant font-data-mono-md">
            개정번호: Rev. 2026.04 | (주)MS가스 환경안전팀
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                alert(`[${selectedProduct.name}] 공식 PDF SDS 파일 다운로드가 시작되었습니다.`);
              }}
              className="px-4 py-2 bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant rounded-lg font-title-md text-sm transition-colors flex items-center gap-1.5 shadow"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              전체 PDF 다운로드
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-surface-container-highest text-on-surface hover:bg-surface-container-high rounded-lg font-title-md text-sm transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
