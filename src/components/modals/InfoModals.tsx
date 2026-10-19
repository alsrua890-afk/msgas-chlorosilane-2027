import React from 'react';

interface InfoModalProps {
  title: string;
  badge?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const InfoModal: React.FC<InfoModalProps> = ({ title, badge, onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-surface-container my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary-container text-on-primary p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 flex items-center justify-center text-on-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          {badge && (
            <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-caps text-xs font-bold inline-block mb-1.5">
              {badge}
            </span>
          )}
          <h3 className="font-headline-md text-xl md:text-2xl text-on-primary font-bold">
            {title}
          </h3>
        </div>
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4 text-body-md text-on-surface">
          {children}
        </div>
        <div className="p-4 bg-surface-container-low border-t border-surface-container flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-secondary text-on-secondary rounded-lg font-title-md text-xs hover:bg-on-secondary-fixed-variant transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
