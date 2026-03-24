import React, { useState, useEffect } from 'react';

// --- Icons (Inline SVGs: 外部ライブラリエラーを物理的に回避) ---
const IconWrapper = ({ children, size = 24, className = "", fill = "none" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill} 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

const SparklesIcon = (props) => (
  <IconWrapper {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
  </IconWrapper>
);

const ZapIcon = (props) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

const SettingsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

const CpuIcon = (props) => (
  <IconWrapper {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
  </IconWrapper>
);

const ShieldCheckIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </IconWrapper>
);

const FileTextIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </IconWrapper>
);

const ClockIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconWrapper>
);

const XIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </IconWrapper>
);

const MenuIcon = (props) => (
  <IconWrapper {...props}>
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </IconWrapper>
);

const ArrowRightIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </IconWrapper>
);

const CheckCircleIcon = (props) => (
  <IconWrapper {...props}>
    <polyline points="20 6 9 17 4 12" />
  </IconWrapper>
);

// --- Constants ---
const NAV_ITEMS = [
  { id: 'home', label: 'トップ' },
  { id: 'services', label: 'サービス' },
  { id: 'company', label: '会社概要' },
];

// --- UI Components ---

const Logo = () => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="w-12 h-12 bg-gradient-to-br from-[#54b095] to-[#3a8b75] rounded-[1.2rem] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
      <SparklesIcon size={24} fill="currentColor" />
    </div>
    <div className="flex flex-col text-left">
      <span className="text-2xl font-[900] tracking-tight text-[#1a202c] leading-none">Mochi</span>
      <span className="text-[10px] text-[#4a9d86] font-black tracking-[0.45em] uppercase mt-1 leading-none">Management & Tech</span>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-start text-left h-full">
    <div className="w-20 h-20 bg-[#f0f9f6] rounded-[1.5rem] flex items-center justify-center text-[#4a9d86] mb-10 group-hover:bg-[#4a9d86] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-[#1a202c] mb-6 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-base">
      {desc}
    </p>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 bg-[#f8fbfa] overflow-hidden">
              <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#e0f2ed] bg-white shadow-sm mb-10 group transition-all hover:border-[#4a9d86]">
                  <SparklesIcon size={20} className="text-[#4a9d86] group-hover:rotate-12 transition-transform" />
                  <span className="text-[#4a9d86] text-xs md:text-sm font-black tracking-[0.15em] uppercase leading-none text-left">
                    Professional Service Standard
                  </span>
                </div>
                <h1 className="text-5xl md:text-[5.5rem] font-black text-[#1a202c] leading-[1.05] mb-10 tracking-tight">ビジネスを、もっと<br /><span className="text-[#4a9d86]">プロフェッショナル</span>に。</h1>
                <p className="text-lg md:text-xl text-slate-500 mb-14 leading-relaxed max-w-2xl mx-auto font-medium text-center">
                  Mochi合同会社は、サブリリースに向けた高品質なサービス体制を提供します。<br className="hidden md:block" />
                  「個人」を超えた「仕組み」による信頼で、貴方のビジネスを加速させます。
                </p>
                <button onClick={() => setCurrentPage('services')} className="px-12 py-5 bg-[#4a9d86] text-white rounded-2xl font-black text-lg hover:bg-[#3d826f] shadow-lg shadow-[#4a9d86]/20 transition-all flex items-center justify-center space-x-3 group">
                  <span>サービスを見る</span>
                  <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </section>

            <section className="py-24 bg-white px-6">
              <div className="max-w-6xl mx-auto">
                <div className="bg-[#1a202c] rounded-[3.5rem] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl">
                  <div className="relative z-10 max-w-2xl text-left">
                    <h2 className="text-[#4a9d86] text-sm font-black tracking-[0.4em] uppercase mb-8 text-left">Our Mission</h2>
                    <p className="text-3xl md:text-5xl font-[900] mb-10 leading-tight text-left">「形」を整え、<br />「実務」をシステム化する。</p>
                    <div className="space-y-12">
                      <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-[#4a9d86] rounded-2xl flex items-center justify-center shrink-0"><ShieldCheckIcon size={24} /></div>
                        <div className="text-left">
                          <h4 className="text-xl font-bold mb-2">サブリリース向けのサービス体裁</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">単なる個人間のやり取りではなく、しっかりとした「サービス」としての形式を整えることで、取引の信頼性を100%担保します。</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-[#4a9d86] rounded-2xl flex items-center justify-center shrink-0"><FileTextIcon size={24} /></div>
                        <div className="text-left">
                          <h4 className="text-xl font-bold mb-2">事務作業のシステム化・効率化</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">月末の請求書発行（ホテル関連など）といったルーチンワークをテンプレート化。短時間でミスなく遂行できる仕組みを提供します。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <ServiceCard icon={<ZapIcon size={36} />} title="再生可能エネルギー事業" desc="太陽光発電設備の販売・設置、およびコンサルティング。エネルギーの自給自足とコスト削減を実現します。" />
                  <ServiceCard icon={<SettingsIcon size={36} />} title="経営・事務DX代行" desc="人事、財務、経理などのバックオフィス業務をシステム化。ミスを減らし、本来集中すべき時間を創出します。" />
                </div>
              </div>
            </section>
          </>
        );
      case 'services':
        return (
          <div className="pt-20">
            <section className="bg-[#f0f9f6] py-32 px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-black text-[#1a202c] mb-12 tracking-tight">実務を「仕組み」で解決する。</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white p-8 rounded-3xl border border-white shadow-sm">
                    <div className="w-12 h-12 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[#4a9d86] mb-6"><FileTextIcon /></div>
                    <h4 className="text-xl font-black mb-4 text-left">請求書発行の自動化</h4>
                    <p className="text-slate-500 text-sm font-medium">ホテル関連業務などの月末の請求書発行をテンプレート化。短時間でミスなく遂行できる体制を構築します。</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-white shadow-sm">
                    <div className="w-12 h-12 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[#4a9d86] mb-6"><ClockIcon /></div>
                    <h4 className="text-xl font-black mb-4 text-left">業務プロセスの効率化</h4>
                    <p className="text-slate-500 text-sm font-medium">煩雑な事務作業を特定し、ITツールを活用して最適化。本来集中すべきコア業務への時間を最大化します。</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'company':
        return (
          <div className="pt-20">
            <section className="py-32 bg-[#f8fbfa] px-6">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-sm border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {[
                    { label: "商号", value: "Mochi合同会社 (Mochi LLC)" },
                    { label: "設立", value: "2021年2月15日" },
                    { label: "所在地", value: "埼玉県蓮田市大字貝塚71番地" },
                    { label: "代表社員", value: "山崎 啓太" },
                    { label: "資本金", value: "1,000,000円" },
                    { label: "法人番号", value: "0300-03-016708" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2 text-left">
                      <p className="text-[10px] font-black text-[#4a9d86]/60 tracking-widest uppercase">{item.label}</p>
                      <p className="text-lg font-bold text-slate-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-[#1a202c] bg-white text-left selection:bg-emerald-100 selection:text-emerald-900">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div onClick={() => setCurrentPage('home')}><Logo /></div>
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`text-sm font-bold transition-colors hover:text-[#4a9d86] ${currentPage === item.id ? 'text-[#4a9d86]' : 'text-slate-500'}`}>{item.label}</button>
            ))}
            <button className="px-6 py-2.5 bg-[#1a202c] text-white rounded-full text-sm font-bold hover:bg-[#4a9d86] transition-all">ご相談</button>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}</button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[60] p-8 flex flex-col text-left animate-in fade-in slide-in-from-top duration-300">
            <div className="flex justify-between items-center mb-12"><Logo /><button onClick={() => setIsMenuOpen(false)}><XIcon size={32} className="text-slate-400" /></button></div>
            <div className="flex flex-col space-y-8">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => { setCurrentPage(item.id); setIsMenuOpen(false); }} className="text-left text-4xl font-black text-slate-800">{item.label}</button>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="text-left">{renderContent()}</main>
      <footer className="bg-[#f8fbfa] border-t border-slate-100 py-20 px-6 text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-left md:text-center text-left">
          <Logo /><p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2021 Mochi LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;