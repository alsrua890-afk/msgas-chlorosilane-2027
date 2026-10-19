import React from 'react';

interface InquiryReceiptData {
  ticketNumber: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  products: string[];
  volume: string;
  details: string;
  timestamp: string;
}

interface InquirySuccessModalProps {
  receipt: InquiryReceiptData | null;
  onClose: () => void;
}

export const InquirySuccessModal: React.FC<InquirySuccessModalProps> = ({ receipt, onClose }) => {
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-secondary text-on-secondary p-6 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            title="닫기"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          
          <div className="w-14 h-14 rounded-full bg-white text-secondary flex items-center justify-center mx-auto mb-3 shadow">
            <span className="material-symbols-outlined text-[32px]">check_circle</span>
          </div>

          <h3 className="font-headline-md text-2xl font-bold">
            샘플 및 기술 상담 요청이 접수되었습니다
          </h3>
          <p className="text-secondary-fixed text-sm mt-1">
            (주)MS가스 반도체 특수가스 사업본부로 정상 전달되었습니다.
          </p>
        </div>

        {/* Ticket Details */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container space-y-3">
            <div className="flex items-center justify-between border-b border-surface-container pb-2">
              <span className="text-xs text-on-surface-variant">접수 번호 (Ticket ID)</span>
              <span className="font-data-mono-md text-sm font-bold text-secondary">
                {receipt.ticketNumber}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-data-mono-md">
              <div>
                <span className="text-on-surface-variant block">신청 기업:</span>
                <strong className="text-on-surface">{receipt.company}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">담당자:</span>
                <strong className="text-on-surface">{receipt.name}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">이메일:</span>
                <strong className="text-on-surface">{receipt.email}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">연락처:</span>
                <strong className="text-on-surface">{receipt.phone}</strong>
              </div>
              <div className="col-span-2">
                <span className="text-on-surface-variant block">선택 품목:</span>
                <span className="inline-block mt-0.5 text-secondary font-bold">
                  {receipt.products.join(', ') || '지정 없음'}
                </span>
              </div>
              {receipt.volume && (
                <div className="col-span-2">
                  <span className="text-on-surface-variant block">희망 용기 및 사용량:</span>
                  <span className="text-on-surface">{receipt.volume}</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl text-xs flex items-start gap-2 border border-emerald-200">
            <span className="material-symbols-outlined text-emerald-600 text-[20px] shrink-0 mt-0.5">timer</span>
            <div>
              <p className="font-bold">24시간 이내 전문 기술영업 엔지니어 배정 회신</p>
              <p className="text-emerald-700 mt-0.5">
                신에츠 초고순도 클로로실란(DCS/TCS/STC) 규격서(CoA) 및 평가용 실린더 납기 일정을 신속히 전달해 드리겠습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-surface-container-low border-t border-surface-container flex items-center justify-end gap-2">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg font-title-md text-xs hover:bg-surface-container-high transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            접수증 인쇄
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-secondary text-on-secondary rounded-lg font-title-md text-xs hover:bg-on-secondary-fixed-variant transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
