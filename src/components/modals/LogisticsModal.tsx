import React from 'react';
import { LOGISTICS_HUBS } from '../../data/mockData';

interface LogisticsModalProps {
  onClose: () => void;
}

export const LogisticsModal: React.FC<LogisticsModalProps> = ({ onClose }) => {
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
            NATIONWIDE 7 LOGISTICS NETWORK
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-primary">
            전국 7개 사업장 공급 네트워크 및 충남 공주 클린룸
          </h2>
          <p className="text-primary-fixed-dim font-body-md text-sm mt-1 max-w-2xl">
            수도권 Fab(화성·평택·이천) 및 중부·영호남 반도체 팹 라인에 24시간 이내 비상 출하가 가능한 국내 유일의 다중 거점망을 구축하고 있습니다.
          </p>
        </div>

        {/* List of Hubs */}
        <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LOGISTICS_HUBS.map((hub, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  idx === 0 
                    ? 'bg-secondary/5 border-secondary/30 ring-1 ring-secondary/20' 
                    : 'bg-surface-container-lowest border-surface-container hover:border-secondary/30'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary font-data-mono-md text-xs flex items-center justify-center font-bold">
                      0{idx + 1}
                    </span>
                    <h4 className="font-title-md text-sm md:text-base text-on-surface font-bold">
                      {hub.name}
                    </h4>
                  </div>
                  {idx === 0 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary text-on-secondary shrink-0">
                      본공장
                    </span>
                  )}
                </div>

                <p className="text-xs text-secondary font-medium mb-2">{hub.role}</p>

                <div className="space-y-1 text-xs font-data-mono-md text-on-surface-variant pt-2 border-t border-surface-container">
                  <div className="flex justify-between">
                    <span>소재지:</span>
                    <span className="text-on-surface font-medium">{hub.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>주요 공급 대상:</span>
                    <span className="text-on-surface font-medium">{hub.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>긴급 대응 리드타임:</span>
                    <span className="text-secondary font-bold">{hub.leadTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plant Specification Highlight */}
          <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container text-xs text-on-surface-variant space-y-2">
            <h5 className="font-title-md text-on-surface font-bold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">clean_hands</span>
              충남 공주 클린룸 소분 및 정제 팹 인증 사양
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-data-mono-md">
              <div className="p-2 bg-surface-container-lowest rounded">
                <span className="text-on-surface-variant block">클린룸 등급:</span>
                <strong className="text-on-surface">Class 100 / 1000</strong>
              </div>
              <div className="p-2 bg-surface-container-lowest rounded">
                <span className="text-on-surface-variant block">분석 장비:</span>
                <strong className="text-on-surface">ICP-MS 2기, GC 4기</strong>
              </div>
              <div className="p-2 bg-surface-container-lowest rounded">
                <span className="text-on-surface-variant block">안전 인증:</span>
                <strong className="text-on-surface">KOSHA 18001 / ISO</strong>
              </div>
              <div className="p-2 bg-surface-container-lowest rounded">
                <span className="text-on-surface-variant block">연간 소분 Capa:</span>
                <strong className="text-secondary">DCS/TCS 3,000 Ton</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
          <span className="text-xs text-on-surface-variant font-data-mono-md">
            24시간 전국 특수가스 비상대응센터: 041-858-7100
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
