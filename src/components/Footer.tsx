import React from 'react';

interface FooterProps {
  onOpenLogisticsModal: () => void;
  onOpenSdsModal: () => void;
  onOpenSafetyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLogisticsModal,
  onOpenSdsModal,
  onOpenSafetyModal,
  onOpenTermsModal,
  onOpenPrivacyModal,
}) => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant py-space-2xl border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-title-lg text-title-lg text-primary-container font-semibold">
                (주)MS가스
              </span>
              <span className="font-label-caps text-label-caps bg-surface-container-high px-space-xs py-space-2xs rounded text-on-surface-variant font-bold">
                SPECIAL GAS CO.
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              글로벌 반도체 팹의 초고순도 클로로실란(DCS · TCS · STC) 공급 안정성을 책임지는 정밀 특수가스 엔지니어링 파트너입니다.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <button
                onClick={onOpenLogisticsModal}
                className="font-label-caps text-label-caps text-secondary font-semibold hover:underline"
              >
                전국 7개 사업장 네트워크
              </button>
              <span className="text-outline-variant">•</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                클린룸 소분 및 정제 팹
              </span>
            </div>
          </div>

          {/* Plant & Headquarters */}
          <div className="md:col-span-4 flex flex-col gap-space-2xs text-body-sm font-body-sm">
            <span className="font-title-md text-title-md text-on-surface font-semibold mb-space-2xs">
              생산공장 및 본사 정보
            </span>
            <div className="flex flex-col gap-space-2xs">
              <p>
                <strong className="text-on-surface">제조사업장:</strong> 충남 공주시 탄천면 산업단지 계열사 (주)MS머트리얼즈 생산공장
              </p>
              <p>
                <strong className="text-on-surface">대표전화:</strong> 041-858-7100 / 고객기술지원센터
              </p>
              <p>
                <strong className="text-on-surface">사업자등록번호:</strong> 305-81-42991
              </p>
            </div>
          </div>

          {/* Compliance & Legal */}
          <div className="md:col-span-3 flex flex-col gap-space-2xs text-body-sm font-body-sm">
            <span className="font-title-md text-title-md text-on-surface font-semibold mb-space-2xs">
              품질 &amp; 규정 준수
            </span>
            <button
              onClick={onOpenSdsModal}
              className="text-left text-on-surface-variant hover:text-on-surface transition-colors"
            >
              MSDS / SDS 다운로드
            </button>
            <button
              onClick={onOpenSafetyModal}
              className="text-left text-on-surface-variant hover:text-on-surface transition-colors"
            >
              KOSHA 18001 / ISO 14001 인증
            </button>
            <button
              onClick={onOpenPrivacyModal}
              className="text-left text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            >
              개인정보처리방침
            </button>
            <button
              onClick={onOpenTermsModal}
              className="text-left text-on-surface-variant hover:text-on-surface transition-colors"
            >
              이용약관
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md border-t border-surface-container">
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 (주)MS가스. All Rights Reserved. 본 사이트의 특수가스 사양 및 인증 정보는 관련 법규의 보호를 받습니다.
          </div>
          <div className="flex items-center gap-space-md font-label-caps text-label-caps text-on-surface-variant font-bold">
            <span>DCS · TCS · STC SPECIALTY GAS</span>
            <span>PURITY UP TO 99.999%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
