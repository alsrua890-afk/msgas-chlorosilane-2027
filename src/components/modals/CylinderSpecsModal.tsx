import React from 'react';
import { CYLINDER_SPECS } from '../../data/mockData';

interface CylinderSpecsModalProps {
  onClose: () => void;
  onOpenSampleRequest: (cylinderType: string) => void;
}

export const CylinderSpecsModal: React.FC<CylinderSpecsModalProps> = ({ onClose, onOpenSampleRequest }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary-container text-on-primary p-6 md:p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 flex items-center justify-center text-on-primary transition-colors"
            title="닫기"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <span className="font-label-caps text-label-caps text-secondary-fixed bg-surface-container-highest/20 px-2.5 py-1 rounded inline-block mb-2">
            CYLINDER & BULK SPECIFICATIONS
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-primary">
            특수가스 전용 용기(Cylinder) 규격 및 피팅 가이드
          </h2>
          <p className="text-primary-fixed-dim font-body-md text-sm mt-1 max-w-2xl">
            고객사 Fab 가스 캐비닛 인터페이스(CGA, DISS, DIN) 및 공정 사용량에 최적화된 맞춤 패키지 사양을 제공합니다.
          </p>
        </div>

        {/* Specs Table */}
        <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto space-y-6">
          <div className="overflow-x-auto rounded-xl border border-surface-container">
            <table className="w-full text-left text-body-sm font-data-mono-md">
              <thead className="bg-surface-container-high text-on-surface text-xs font-semibold">
                <tr>
                  <th className="py-3 px-4">용기 타입</th>
                  <th className="py-3 px-4">내용적 (Water Capa)</th>
                  <th className="py-3 px-4">DCS 충전량</th>
                  <th className="py-3 px-4">TCS 충전량</th>
                  <th className="py-3 px-4">밸브 피팅 (Fitting)</th>
                  <th className="py-3 px-4">내면 처리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {CYLINDER_SPECS.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-3.5 px-4 font-bold text-on-surface font-body-md">
                      {spec.type}
                    </td>
                    <td className="py-3.5 px-4 text-secondary font-semibold">{spec.waterCapacity}</td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{spec.fillWeightDCS}</td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{spec.fillWeightTCS}</td>
                    <td className="py-3.5 px-4 text-on-surface font-semibold">{spec.valveFitting}</td>
                    <td className="py-3.5 px-4 text-xs text-on-surface-variant">{spec.internalTreatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for each cylinder usage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CYLINDER_SPECS.map((spec, idx) => (
              <div key={idx} className="p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-title-md text-on-surface font-bold">{spec.type}</h4>
                    <span className="text-xs font-data-mono-md bg-secondary/10 text-secondary px-2 py-0.5 rounded">
                      {spec.valveFitting}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-body-md mb-3">
                    <strong>추천 용도:</strong> {spec.targetUse}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenSampleRequest(`${spec.type} (${spec.valveFitting})`);
                  }}
                  className="w-full py-1.5 bg-surface-container-lowest hover:bg-secondary hover:text-white text-secondary border border-secondary/30 rounded-lg text-xs font-title-md transition-colors text-center"
                >
                  이 규격으로 샘플/견적 문의하기
                </button>
              </div>
            ))}
          </div>

          {/* Safety & Leak Proofing */}
          <div className="p-4 bg-surface-container-highest/50 rounded-xl text-xs space-y-1.5 border border-surface-container">
            <h5 className="font-title-md text-on-surface font-bold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
              실린더 무결점 품질 보증 시스템
            </h5>
            <p className="text-on-surface-variant">
              모든 출하 실린더는 진공 베이킹(Baking at 120°C, 24hr), 고순도 N2 Purging 5회 이상, 헬륨 질량분석 리크 디텍션(He leak &lt; 1×10⁻⁹ mbar·l/s) 전수 검사를 필수로 거칩니다.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
          <span className="text-xs text-on-surface-variant font-data-mono-md">
            고객사 전용 밸브 어댑터 및 맞춤 가스캐비닛 피팅 지원 가능
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant rounded-lg font-title-md text-sm transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
