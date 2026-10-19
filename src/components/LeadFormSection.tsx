import React, { useState, useEffect } from 'react';

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

interface LeadFormSectionProps {
  preselectedProduct?: string;
  preselectedCylinder?: string;
  onSuccessSubmit: (receipt: InquiryReceiptData) => void;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  preselectedProduct,
  preselectedCylinder,
  onSuccessSubmit,
}) => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['DCS']);
  const [volume, setVolume] = useState('');
  const [details, setDetails] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Handle preselection
  useEffect(() => {
    if (preselectedProduct) {
      if (preselectedProduct.includes('DCS') && !selectedProducts.includes('DCS')) {
        setSelectedProducts((prev) => Array.from(new Set([...prev, 'DCS'])));
      } else if (preselectedProduct.includes('TCS') && !selectedProducts.includes('TCS')) {
        setSelectedProducts((prev) => Array.from(new Set([...prev, 'TCS'])));
      } else if (preselectedProduct.includes('STC') && !selectedProducts.includes('STC')) {
        setSelectedProducts((prev) => Array.from(new Set([...prev, 'STC'])));
      }
    }
  }, [preselectedProduct]);

  useEffect(() => {
    if (preselectedCylinder) {
      setVolume((prev) => (prev ? `${prev} / ${preselectedCylinder}` : preselectedCylinder));
    }
  }, [preselectedCylinder]);

  const handleProductToggle = (prod: string) => {
    if (selectedProducts.includes(prod)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== prod));
    } else {
      setSelectedProducts([...selectedProducts, prod]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (selectedProducts.length === 0) {
      setValidationError('최소 1개 이상의 관심 제품(DCS, TCS, STC)을 선택해주세요.');
      return;
    }

    if (!privacyAgreed) {
      setValidationError('개인정보 수집 및 기술 상담 이용 약관에 동의해주세요.');
      return;
    }

    const ticketNumber = `REQ-2026-MSG-${Math.floor(1000 + Math.random() * 9000)}`;
    const receiptData: InquiryReceiptData = {
      ticketNumber,
      company,
      name,
      email,
      phone,
      products: selectedProducts.map((p) => {
        if (p === 'DCS') return 'DCS (디클로로실란)';
        if (p === 'TCS') return 'TCS (트리클로로실란)';
        if (p === 'STC') return 'STC (사염화규소)';
        return p;
      }),
      volume,
      details,
      timestamp: new Date().toLocaleString('ko-KR'),
    };

    onSuccessSubmit(receiptData);

    // Reset form
    setCompany('');
    setName('');
    setEmail('');
    setPhone('');
    setVolume('');
    setDetails('');
    setPrivacyAgreed(false);
  };

  return (
    <section className="py-space-3xl bg-surface-container-low" id="quote-form">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-2xl shadow-sm border border-surface-container">
          {/* Left Column: Guide & Hotline */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs">
                <span className="w-3 h-3 bg-secondary rounded-sm"></span>
                <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
                  Engineering Inquiry
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                공정 엔지니어 및 구매 담당자를 위한 기술 상담 &amp; 샘플 지원
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                소재의 순도 등급 협의, 테스트용 실린더 샘플 공급, Fab 직결 설비 인터페이스 기술 지원까지 반도체 특수가스 전문 영업 엔지니어가 24시간 이내에 직접 회신드립니다.
              </p>
              <div className="flex flex-col gap-space-sm pt-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">phone_in_talk</span>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    기술영업본부 핫라인: 041-858-7100
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">mail</span>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    이메일 문의: semiconductor@msgas.co.kr
                  </span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">verified_user</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    접수 후 24시간 내 전문 기술영업 회신 보증
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container p-space-md rounded-xl border border-surface-container-high">
              <span className="font-label-caps text-label-caps text-on-surface font-semibold block mb-1">
                MS MATERIALS CO., LTD.
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                계열사 (주)MS머트리얼즈 공주 생산 공장 인프라와 결합하여 전 공정 추적성(Traceability)을 보증합니다.
              </p>
            </div>
          </div>

          {/* Right Column: Form Inputs */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-md" id="leadForm">
              {validationError && (
                <div className="p-3 rounded-lg bg-error-container text-on-error-container text-xs font-semibold flex items-center gap-2 border border-red-300">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span>{validationError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/* Company */}
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-title-md text-title-md text-on-surface flex items-center gap-1 font-semibold">
                    <span>회사명</span>
                    <span className="text-secondary font-bold">*</span>
                  </label>
                  <input
                    className="h-11 px-space-sm bg-surface-container-low rounded text-body-md text-on-surface border border-surface-container focus:outline-none focus:bg-surface-container focus:border-secondary transition-colors"
                    placeholder="예: (주)한국반도체"
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                {/* Name & Title */}
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-title-md text-title-md text-on-surface flex items-center gap-1 font-semibold">
                    <span>담당자명 / 직급</span>
                    <span className="text-secondary font-bold">*</span>
                  </label>
                  <input
                    className="h-11 px-space-sm bg-surface-container-low rounded text-body-md text-on-surface border border-surface-container focus:outline-none focus:bg-surface-container focus:border-secondary transition-colors"
                    placeholder="예: 김엔지니어 수석"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/* Email */}
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-title-md text-title-md text-on-surface flex items-center gap-1 font-semibold">
                    <span>업무용 이메일</span>
                    <span className="text-secondary font-bold">*</span>
                  </label>
                  <input
                    className="h-11 px-space-sm bg-surface-container-low rounded text-body-md text-on-surface border border-surface-container focus:outline-none focus:bg-surface-container focus:border-secondary transition-colors"
                    placeholder="name@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-title-md text-title-md text-on-surface flex items-center gap-1 font-semibold">
                    <span>연락처</span>
                    <span className="text-secondary font-bold">*</span>
                  </label>
                  <input
                    className="h-11 px-space-sm bg-surface-container-low rounded text-body-md text-on-surface border border-surface-container focus:outline-none focus:bg-surface-container focus:border-secondary transition-colors"
                    placeholder="010-0000-0000"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Interested Products Checkbox */}
              <div className="flex flex-col gap-space-2xs">
                <label className="font-title-md text-title-md text-on-surface flex items-center gap-1 font-semibold">
                  <span>관심 제품 (복수 선택 가능)</span>
                  <span className="text-secondary font-bold">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs pt-1">
                  <label className={`flex items-center gap-space-xs p-space-xs rounded cursor-pointer border transition-colors ${
                    selectedProducts.includes('DCS')
                      ? 'bg-secondary/10 border-secondary'
                      : 'bg-surface-container-low border-surface-container hover:bg-surface-container'
                  }`}>
                    <input
                      className="w-4 h-4 text-secondary rounded focus:ring-secondary"
                      name="product"
                      type="checkbox"
                      value="DCS"
                      checked={selectedProducts.includes('DCS')}
                      onChange={() => handleProductToggle('DCS')}
                    />
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      DCS (디클로로실란)
                    </span>
                  </label>

                  <label className={`flex items-center gap-space-xs p-space-xs rounded cursor-pointer border transition-colors ${
                    selectedProducts.includes('TCS')
                      ? 'bg-secondary/10 border-secondary'
                      : 'bg-surface-container-low border-surface-container hover:bg-surface-container'
                  }`}>
                    <input
                      className="w-4 h-4 text-secondary rounded focus:ring-secondary"
                      name="product"
                      type="checkbox"
                      value="TCS"
                      checked={selectedProducts.includes('TCS')}
                      onChange={() => handleProductToggle('TCS')}
                    />
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      TCS (트리클로로실란)
                    </span>
                  </label>

                  <label className={`flex items-center gap-space-xs p-space-xs rounded cursor-pointer border transition-colors ${
                    selectedProducts.includes('STC')
                      ? 'bg-secondary/10 border-secondary'
                      : 'bg-surface-container-low border-surface-container hover:bg-surface-container'
                  }`}>
                    <input
                      className="w-4 h-4 text-secondary rounded focus:ring-secondary"
                      name="product"
                      type="checkbox"
                      value="STC"
                      checked={selectedProducts.includes('STC')}
                      onChange={() => handleProductToggle('STC')}
                    />
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      STC (사염화규소)
                    </span>
                  </label>
                </div>
              </div>

              {/* Volume & Cylinder Spec */}
              <div className="flex flex-col gap-space-2xs">
                <label className="font-title-md text-title-md text-on-surface font-semibold">
                  <span>월 예상 사용량 및 희망 용기 규격</span>
                </label>
                <input
                  className="h-11 px-space-sm bg-surface-container-low rounded text-body-md text-on-surface border border-surface-container focus:outline-none focus:bg-surface-container focus:border-secondary transition-colors"
                  placeholder="예: 월 200kg / 440L Y-Cylinder 희망 (CGA 678 피팅)"
                  type="text"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </div>

              {/* Inquiries details */}
              <div className="flex flex-col gap-space-2xs">
                <label className="font-title-md text-title-md text-on-surface font-semibold">
                  <span>적용 공정 및 문의 상세 내용</span>
                </label>
                <textarea
                  className="p-space-sm bg-surface-container-low rounded text-body-md text-on-surface border border-surface-container focus:outline-none focus:bg-surface-container focus:border-secondary transition-colors resize-none"
                  placeholder="예: 신규 질화막 증착 라인 평가를 위한 5N 등급 DCS 샘플 실린더 공급 일정 및 입고 CoA 세부 불순물 한계치 문의드립니다."
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>

              {/* Privacy Policy Agreement */}
              <div className="flex items-start gap-space-xs pt-space-xs">
                <input
                  className="w-4 h-4 text-secondary rounded mt-1 cursor-pointer focus:ring-secondary"
                  id="privacyAgree"
                  required
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                />
                <label
                  className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none leading-relaxed"
                  htmlFor="privacyAgree"
                >
                  [필수] 개인정보 수집 및 기술 상담을 위한 이용에 동의합니다. (수집 항목: 회사명, 성명, 연락처, 이메일 / 보유 기간: 문의 처리 완료 후 1년)
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-space-xs">
                <button
                  className="w-full h-12 bg-secondary text-on-secondary rounded-lg font-title-lg text-title-lg hover:bg-on-secondary-fixed-variant transition-colors shadow-md flex items-center justify-center gap-space-xs cursor-pointer"
                  type="submit"
                >
                  <span>샘플 및 맞춤 견적 요청하기</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
