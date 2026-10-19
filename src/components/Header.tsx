import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuickInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenQuickInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navItems = [
    { id: 'products', label: '제품' },
    { id: 'supply-chain', label: '공급 구조' },
    { id: 'quality-and-safety', label: '품질·안전' },
    { id: 'technical-documentation', label: '기술자료' },
    { id: 'contact', label: '문의' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,31,58,0.04)] transition-all">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-space-xl flex items-center justify-between gap-space-md">
        {/* Brand Logo & Title */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-space-sm text-left group"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFtFro_OrfZ12qwi1fRFrQiv2HYF5HoWjVj-QMbKz-kk2lPppOw6SN_opP42S8cMSb0WvntdJUwbO4fSUD-M8VXx4X-sqSZagtwedKz1D05MjsZeMcVBaY6JVv4Czi5bz_W2iC3v4ttisUmbe_Eta8nDySINPId8NmvC0rsUM6zLBFZ5k2-YQw6wc6MqQZcV90HyoEJfX6xwsWg4RPKgPMd5SsqRbc80RIvwUgu9vRxJ3CQwx_2kTtKQ" 
            alt="MS GAS Logo" 
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-title-md text-title-md tracking-tight text-primary-container leading-none font-bold">
              (주)MS가스
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase mt-1">
              SEMICONDUCTOR SPECIAL GAS
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-space-sm py-space-xs transition-colors rounded-lg ${
                  isActive
                    ? 'bg-surface-container-high text-on-surface font-title-md'
                    : 'font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-space-sm">
          <button
            onClick={onOpenQuickInquiry}
            className="px-space-md py-space-xs bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors rounded-lg font-title-md text-title-md shadow-[0_2px_8px_rgba(0,92,189,0.25)] flex items-center justify-center cursor-pointer"
          >
            샘플 요청
          </button>

          {/* User Profile quick toggle */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container transition-colors flex items-center justify-center cursor-pointer"
              title="회원 / 인증 문의"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 p-3 bg-surface-container-lowest rounded-xl shadow-xl border border-surface-container text-xs space-y-2 z-50">
                <div className="font-bold text-on-surface border-b border-surface-container pb-1.5 flex items-center justify-between">
                  <span>엔지니어 포털 지원</span>
                  <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded font-mono">B2B Portal</span>
                </div>
                <p className="text-on-surface-variant">
                  반도체 Fab 인증 고객사 전용 입고 성적서(CoA) 및 로트별 실시간 분석 데이터 조회
                </p>
                <div className="pt-1 border-t border-surface-container flex flex-col gap-1">
                  <div className="text-[11px] text-on-surface font-medium">핫라인: 041-858-7100</div>
                  <div className="text-[11px] text-on-surface-variant">semiconductor@msgas.co.kr</div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-on-surface hover:bg-surface-container"
            title="메뉴 열기"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-surface-container px-4 py-3 space-y-1 shadow-lg animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-title-md text-on-surface hover:bg-surface-container transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-surface-container">
            <button
              onClick={() => {
                onOpenQuickInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-secondary text-on-secondary rounded-lg font-title-md text-sm text-center"
            >
              샘플 및 맞춤 견적 요청하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
