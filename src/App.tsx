import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductDetail } from './data/mockData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustMetricsSection } from './components/TrustMetricsSection';
import { ProductsSection } from './components/ProductsSection';
import { SupplyChainSection } from './components/SupplyChainSection';
import { CompetitiveEdgeSection } from './components/CompetitiveEdgeSection';
import { SafetySection } from './components/SafetySection';
import { SemiconBanner } from './components/SemiconBanner';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { CoAModal } from './components/modals/CoAModal';
import { SdsModal } from './components/modals/SdsModal';
import { SemiconModal } from './components/modals/SemiconModal';
import { LogisticsModal } from './components/modals/LogisticsModal';
import { CylinderSpecsModal } from './components/modals/CylinderSpecsModal';
import { InquirySuccessModal } from './components/modals/InquirySuccessModal';
import { InfoModal } from './components/modals/InfoModals';

export default function App() {
  const [activeSection, setActiveSection] = useState('products');
  const [selectedCoaProduct, setSelectedCoaProduct] = useState<ProductDetail | null>(null);
  const [selectedSdsProduct, setSelectedSdsProduct] = useState<ProductDetail | null>(null);
  const [isSemiconModalOpen, setIsSemiconModalOpen] = useState(false);
  const [isLogisticsModalOpen, setIsLogisticsModalOpen] = useState(false);
  const [isCylinderSpecsModalOpen, setIsCylinderSpecsModalOpen] = useState(false);
  const [inquiryReceipt, setInquiryReceipt] = useState<any | null>(null);

  // Preselection for form
  const [preselectedProduct, setPreselectedProduct] = useState<string>('');
  const [preselectedCylinder, setPreselectedCylinder] = useState<string>('');

  // Generic info modal
  const [infoModalData, setInfoModalData] = useState<{
    title: string;
    badge?: string;
    content: React.ReactNode;
  } | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    let targetEl: HTMLElement | null = null;
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else if (sectionId === 'products') {
      targetEl = document.getElementById('products');
    } else if (sectionId === 'supply-chain') {
      targetEl = document.getElementById('supply-chain');
    } else if (sectionId === 'quality-and-safety') {
      targetEl = document.getElementById('safety-tech');
    } else if (sectionId === 'technical-documentation') {
      targetEl = document.getElementById('safety-tech');
    } else if (sectionId === 'contact' || sectionId === 'sample-request') {
      targetEl = document.getElementById('quote-form');
    }

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForInquiry = (productName: string) => {
    setPreselectedProduct(productName);
    showToast(`'${productName}' 샘플 및 견적 요청서로 이동합니다.`);
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCylinderForInquiry = (cylinderType: string) => {
    setPreselectedCylinder(cylinderType);
    showToast(`'${cylinderType}' 규격이 양식에 자동 반영되었습니다.`);
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenHistoryModal = () => {
    setInfoModalData({
      title: '50년 특수가스 전문 엔지니어링 히스토리',
      badge: 'ESTABLISHED 1970s',
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            (주)MS가스는 1970년대 대한민국 중화학 및 전자 산업의 태동기와 함께 출범하여, 지난 반세기 동안 국내 최첨단 반도체, 디스플레이, 태양광 산업용 초고순도 특수가스를 전문 공급해온 전문 엔지니어링 기업입니다.
          </p>
          <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container">
            <h4 className="font-bold text-on-surface mb-1">핵심 연혁 요약</h4>
            <ul className="list-disc pl-5 space-y-1 text-on-surface-variant text-xs">
              <li><strong>1970년대:</strong> 산업용 고압가스 및 정밀 가스 공급 인프라 구축</li>
              <li><strong>1990년대:</strong> 반도체 초고순도 가스 정제 및 공급 설비 국산화 선도</li>
              <li><strong>2010년대:</strong> 일본 신에츠화학(Shin-Etsu) 공식 기술 협력 및 파트너십 체결</li>
              <li><strong>2020년대:</strong> 계열사 (주)MS머트리얼즈 충남 공주 클린룸 특수가스 소분 공장 준공</li>
              <li><strong>현재:</strong> 국내 유일의 초고순도 클로로실란 2차 재분석 및 안전재고 24시간 긴급 배송망 완성</li>
            </ul>
          </div>
        </div>
      ),
    });
  };

  const handleOpenQualityAuditModal = () => {
    setInfoModalData({
      title: 'KOSHA 18001 / ISO 14001 무결점 품질·안전 시스템',
      badge: 'QUALITY STANDARD',
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            MS가스 공주 소분 공장 및 전국 7개 데포는 한국산업안전보건공단(KOSHA) 안전보건경영시스템 및 국제 표준 환경경영시스템(ISO 14001) 인증을 획득하여 무재해 공정을 지속 실현하고 있습니다.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-surface-container-low rounded-lg border border-surface-container">
              <strong className="text-secondary block mb-1">초정밀 계측 인프라</strong>
              Agilent 8900 ICP-MS Triple Quad 2기, Shimadzu 가스크로마토그래피(GC) 4기 가동
            </div>
            <div className="p-3 bg-surface-container-low rounded-lg border border-surface-container">
              <strong className="text-secondary block mb-1">클린룸 등급 Class 100</strong>
              소분 충전 스테이션 헤파필터(HEPA) 양압 제어로 외기 파티클 원천 차단
            </div>
            <div className="p-3 bg-surface-container-low rounded-lg border border-surface-container">
              <strong className="text-secondary block mb-1">ERT 비상대응팀 상시 대기</strong>
              24시간 중앙관제실 및 화학사고 전문 화학구조장비 보유
            </div>
            <div className="p-3 bg-surface-container-low rounded-lg border border-surface-container">
              <strong className="text-secondary block mb-1">전 공정 Traceability</strong>
              원료 입고부터 고객사 Fab 체임버 장착까지 실린더 바코드 추적 관리
            </div>
          </div>
        </div>
      ),
    });
  };

  const handleOpenPrivacyModal = () => {
    setInfoModalData({
      title: '개인정보처리방침',
      badge: 'PRIVACY POLICY',
      content: (
        <div className="space-y-3 text-xs leading-relaxed text-on-surface-variant">
          <p>
            (주)MS가스는 고객의 개인정보를 소중하게 생각하며, 개인정보보호법 등 관련 법령을 철저히 준수하고 있습니다.
          </p>
          <p>
            <strong>1. 수집하는 개인정보 항목:</strong> 회사명, 신청자 성명, 직급, 업무용 이메일, 휴대전화번호, 사용 희망 규격.
          </p>
          <p>
            <strong>2. 수집 목적:</strong> 반도체 특수가스 샘플 제공, 맞춤 기술 견적서 발송, Fab 배관 인터페이스 기술 상담.
          </p>
          <p>
            <strong>3. 보유 및 이용 기간:</strong> 상담 및 샘플 공급 업무 완료 후 1년 간 보관 후 안전하게 파기합니다.
          </p>
        </div>
      ),
    });
  };

  const handleOpenTermsModal = () => {
    setInfoModalData({
      title: '이용약관 및 특수가스 취급 준수사항',
      badge: 'TERMS OF SERVICE',
      content: (
        <div className="space-y-3 text-xs leading-relaxed text-on-surface-variant">
          <p>
            본 웹사이트에서 제공되는 클로로실란(DCS, TCS, STC) 제품 정보, CoA 데이터 및 기술 사양은 (주)MS가스의 지적재산이자 관련 특수가스 안전 법규의 보호를 받습니다.
          </p>
          <p>
            <strong>위험물 취급 주의:</strong> 모든 특수가스 샘플 및 실린더의 수령과 현장 핸들링은 고압가스안전관리법 및 화학물질관리법에 의거하여 자격을 갖춘 안전관리자의 입회 하에 진행되어야 합니다.
          </p>
        </div>
      ),
    });
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-secondary/20 selection:text-primary-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-primary-container text-on-primary px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-secondary/40 animate-fade-in text-sm">
          <span className="material-symbols-outlined text-secondary text-[20px]">info</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuickInquiry={() => handleNavigate('contact')}
      />

      {/* Main Content */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <HeroSection
            onSampleRequest={() => handleNavigate('contact')}
            onOpenTechDocs={() => setSelectedCoaProduct(PRODUCTS_DATA[0])}
            onOpenLogisticsModal={() => setIsLogisticsModalOpen(true)}
            onOpenQualityModal={() => setSelectedCoaProduct(PRODUCTS_DATA[1])}
          />

          {/* 2. Trust Metrics */}
          <TrustMetricsSection
            onOpenHistoryModal={handleOpenHistoryModal}
            onOpenLogisticsModal={() => setIsLogisticsModalOpen(true)}
            onOpenQualityModal={handleOpenQualityAuditModal}
            onOpenSafetyModal={() => setSelectedSdsProduct(PRODUCTS_DATA[0])}
          />

          {/* 3. Products Section */}
          <ProductsSection
            onSelectProductForInquiry={handleSelectProductForInquiry}
            onOpenCoA={(p) => setSelectedCoaProduct(p)}
            onOpenSds={(p) => setSelectedSdsProduct(p)}
          />

          {/* 4. Supply Chain Section */}
          <SupplyChainSection
            onOpenLogisticsModal={() => setIsLogisticsModalOpen(true)}
            onOpenQualityModal={handleOpenQualityAuditModal}
          />

          {/* 5. Competitive Edge */}
          <CompetitiveEdgeSection
            onOpenCoA={() => setSelectedCoaProduct(PRODUCTS_DATA[0])}
            onOpenLogistics={() => setIsLogisticsModalOpen(true)}
            onOpenCylinderSpecs={() => setIsCylinderSpecsModalOpen(true)}
          />

          {/* 6. Safety Section */}
          <SafetySection
            onOpenSdsModal={(p) => setSelectedSdsProduct(p)}
            onOpenCylinderSpecsModal={() => setIsCylinderSpecsModalOpen(true)}
            onOpenLogisticsModal={() => setIsLogisticsModalOpen(true)}
          />

          {/* 7. Semicon Korea 2027 Banner */}
          <SemiconBanner
            onOpenReservationModal={() => setIsSemiconModalOpen(true)}
          />

          {/* 8. Lead Form Section */}
          <LeadFormSection
            preselectedProduct={preselectedProduct}
            preselectedCylinder={preselectedCylinder}
            onSuccessSubmit={(receipt) => setInquiryReceipt(receipt)}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenLogisticsModal={() => setIsLogisticsModalOpen(true)}
        onOpenSdsModal={() => setSelectedSdsProduct(PRODUCTS_DATA[0])}
        onOpenSafetyModal={handleOpenQualityAuditModal}
        onOpenTermsModal={handleOpenTermsModal}
        onOpenPrivacyModal={handleOpenPrivacyModal}
      />

      {/* Modals */}
      {selectedCoaProduct && (
        <CoAModal
          product={selectedCoaProduct}
          onClose={() => setSelectedCoaProduct(null)}
          onOpenSampleRequest={handleSelectProductForInquiry}
        />
      )}

      {selectedSdsProduct && (
        <SdsModal
          initialProduct={selectedSdsProduct}
          allProducts={PRODUCTS_DATA}
          onClose={() => setSelectedSdsProduct(null)}
        />
      )}

      {isSemiconModalOpen && (
        <SemiconModal onClose={() => setIsSemiconModalOpen(false)} />
      )}

      {isLogisticsModalOpen && (
        <LogisticsModal onClose={() => setIsLogisticsModalOpen(false)} />
      )}

      {isCylinderSpecsModalOpen && (
        <CylinderSpecsModal
          onClose={() => setIsCylinderSpecsModalOpen(false)}
          onOpenSampleRequest={handleSelectCylinderForInquiry}
        />
      )}

      {inquiryReceipt && (
        <InquirySuccessModal
          receipt={inquiryReceipt}
          onClose={() => setInquiryReceipt(null)}
        />
      )}

      {infoModalData && (
        <InfoModal
          title={infoModalData.title}
          badge={infoModalData.badge}
          onClose={() => setInfoModalData(null)}
        >
          {infoModalData.content}
        </InfoModal>
      )}
    </div>
  );
}
