import React from 'react';
import { PRODUCTS_DATA, ProductDetail } from '../data/mockData';

interface ProductsSectionProps {
  onSelectProductForInquiry: (productName: string) => void;
  onOpenCoA: (product: ProductDetail) => void;
  onOpenSds: (product: ProductDetail) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForInquiry,
  onOpenCoA,
  onOpenSds,
}) => {
  return (
    <section className="py-space-3xl bg-surface" id="products">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-2xl">
        {/* Section Title Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 bg-secondary rounded-sm"></span>
              <span className="font-label-caps text-label-caps text-secondary uppercase font-bold">
                Specialty Electronic Materials
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              초고순도 클로로실란 3종 라인업
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              일본 Shin-Etsu 화학 제조 원료와 충남 공주 MS머트리얼즈의 맞춤형 소분·정제 결합
            </p>
          </div>
          <div className="font-data-mono-md text-data-mono-md text-on-surface-variant bg-surface-container px-space-md py-space-xs rounded-lg self-start border border-surface-container-high font-semibold">
            PURITY SPEC: UP TO 99.999999999%
          </div>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all border border-surface-container group"
            >
              <div className="flex flex-col gap-space-md">
                {/* Header Badges */}
                <div className="flex items-start justify-between">
                  <span className={`${product.badgeClass} font-label-caps text-label-caps px-space-xs py-space-2xs rounded font-bold`}>
                    {product.code}
                  </span>
                  <span className="font-data-mono-lg text-data-mono-lg font-bold text-on-surface">
                    {product.formula}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {product.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {product.subtitle}
                  </p>
                </div>

                {/* Purity Bar */}
                <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-2xs border border-surface-container">
                  <div className="flex justify-between items-center text-body-sm font-medium">
                    <span className="text-on-surface-variant">보증 순도 (Grade)</span>
                    <span className={`font-data-mono-md text-data-mono-md ${product.colorClass} font-bold`}>
                      {product.purityGrade}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div
                      className={`${product.barColor} h-full rounded-full transition-all duration-1000`}
                      style={{ width: product.purityBarWidth }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-left font-data-mono-md text-[11px] text-secondary font-medium">
                      Shin-Etsu 1차 + MS 2차 검증
                    </span>
                    <span className="text-right font-data-mono-md text-label-caps text-on-surface-variant font-semibold">
                      {product.impurityHighlight}
                    </span>
                  </div>
                </div>

                {/* Application & Feature */}
                <div className="space-y-space-xs text-body-md font-body-md text-on-surface-variant">
                  <div>
                    <strong className="text-on-surface block font-title-md">주요 공정 및 용도:</strong>
                    <span className="leading-relaxed">{product.applications}</span>
                  </div>
                  <div>
                    <strong className="text-on-surface block font-title-md">소분 및 공급 특징:</strong>
                    <span className="leading-relaxed">{product.supplyFeatures}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-space-lg flex flex-col gap-space-xs mt-space-md">
                <button
                  onClick={() => onSelectProductForInquiry(product.name)}
                  className={`w-full py-space-xs ${product.btnClass} rounded-lg font-title-md text-title-md text-center transition-colors cursor-pointer shadow-sm`}
                >
                  {product.name.split(' ')[0]} 규격서 및 샘플 요청
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onOpenCoA(product)}
                    className="py-1 px-2 rounded text-xs font-title-md bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center gap-1 border border-surface-container"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                    CoA 성적서 열람
                  </button>
                  <button
                    onClick={() => onOpenSds(product)}
                    className="py-1 px-2 rounded text-xs font-title-md bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center gap-1 border border-surface-container"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#ba1a1a]">policy</span>
                    MSDS 안전자료
                  </button>
                </div>

                <div className="flex items-center justify-between text-label-caps font-data-mono-md text-on-surface-variant px-space-2xs pt-1 border-t border-surface-container">
                  <span>CAS No. {product.casNo}</span>
                  <span>UN {product.unNo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
