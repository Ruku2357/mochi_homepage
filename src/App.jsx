import React, { useState, useEffect } from 'react';

// --- Icons (Inline SVGs for total stability) ---
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

const ChartIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </IconWrapper>
);

const ArrowRightIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </IconWrapper>
);

const MenuIcon = (props) => (
  <IconWrapper {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </IconWrapper>
);

const XIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </IconWrapper>
);

const CheckCircleIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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

const ShieldCheckIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </IconWrapper>
);

const MailIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconWrapper>
);

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

const HeroBadge = () => (
  <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#e0f2ed] bg-white shadow-sm mb-10 group transition-all hover:border-[#4a9d86]">
    <div className="text-[#4a9d86]">
      <SparklesIcon size={20} className="group-hover:rotate-12 transition-transform" />
    </div>
    <span className="text-[#4a9d86] text-xs md:text-sm font-black tracking-[0.15em] uppercase leading-none text-left">
      Professional Service Standard
    </span>
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navItems = [
    { id: 'home', label: 'トップ' },
    { id: 'services', label: 'サービス' },
    { id: 'company', label: '会社概要' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 bg-[#f8fbfa] overflow-hidden text-left">
              <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <HeroBadge />
                <h1 className="text-5xl md:text-[5.5rem] font-black text-[#1a202c] leading-[1.05] mb-10 tracking-tight text-center">
                  ビジネスを、もっと<br />
                  <span className="text-[#4a9d86]">プロフェッショナル</span>に。
                </h1>
                <p className="text-lg md:text-xl text-slate-500 mb-14 leading-relaxed max-w-2xl mx-auto font-medium text-center">
                  Mochi合同会社は、サブリリースに向けた高品質なサービス体制を提供します。<br className="hidden md:block" />
                  「個人」を超えた「仕組み」による信頼で、貴方のビジネスを加速させます。
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => setCurrentPage('services')}
                    className="px-12 py-5 bg-[#4a9d86] text-white rounded-2xl font-black text-lg hover:bg-[#3d826f] shadow-lg shadow-[#4a9d86]/20 transition-all flex items-center justify-center space-x-3 group"
                  >
                    <span>提供サービスを見る</span>
                    <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
            </section>
            
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <ServiceCard icon={<ShieldCheckIcon size={36} />} title="サブリリース支援" desc="単なる個人間のやり取りに留まらない、公的な信頼性を担保するサービス体裁の構築。対外的なプレゼンスを「形」にすることから始まります。" />
                  <ServiceCard icon={<SettingsIcon size={36} />} title="事務代行・システム化" desc="月末の請求書発行（ホテル関連等）などのルーチンワークを徹底的にテンプレート化。ミスなく、短時間で遂行できる拠点を構築します。" />
                  <ServiceCard icon={<CpuIcon size={36} />} title="ITソリューション開発" desc="業務フローに最適化されたソフトウェアやシステムの受託開発。企画から運用まで、スピード感を持って実装します。" />
                  <ServiceCard icon={<ZapIcon size={36} />} title="エネルギー事業" desc="太陽光発電設備の販売・設置、およびコンサルティング。エネルギーの自給自足とコスト削減を実現します。" />
                </div>
              </div>
            </section>

            <section className="py-20 bg-[#f8fbfa]">
              <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-16 items-start">
                  <div className="md:w-1/3 text-left">
                    <h2 className="text-[#4a9d86] text-sm font-black tracking-[0.4em] uppercase mb-6">Service Positioning</h2>
                    <p className="text-4xl font-black text-[#1a202c] tracking-tight leading-tight text-left">「形」が、<br />信頼を生む。</p>
                  </div>
                  <div className="md:w-2/3 text-left">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                      Mochiは、ビジネスの初期フェーズにおいて最も重要な「信頼」をデザインします。しっかりとしたサービス体裁を整えることで、取引の確実性を担保し、事務作業をシステム化することでヒューマンエラーを排除します。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-[#f8fbfa] rounded-2xl border border-emerald-50">
                        <span className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-2 block">Efficiency</span>
                        <p className="font-bold text-slate-800">ルーチンワークのテンプレート化</p>
                      </div>
                      <div className="p-6 bg-[#f8fbfa] rounded-2xl border border-emerald-50">
                        <span className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-2 block">Reliability</span>
                        <p className="font-bold text-slate-800">対外的な信頼性の獲得</p>
                      </div>
                    </div>
                  </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-left">
                  <div className="bg-white p-8 rounded-3xl border border-white shadow-sm">
                    <div className="w-12 h-12 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[#4a9d86] mb-6"><FileTextIcon /></div>
                    <h4 className="text-xl font-black mb-4">請求書発行の自動化</h4>
                    <p className="text-slate-500 text-sm font-medium">ホテル関連業務などの月末の請求書発行をテンプレート化。誰が担当してもミスなく短時間で遂行できる体制を構築します。</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-white shadow-sm">
                    <div className="w-12 h-12 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[#4a9d86] mb-6"><ClockIcon /></div>
                    <h4 className="text-xl font-black mb-4">業務プロセスの効率化</h4>
                    <p className="text-slate-500 text-sm font-medium">ボトルネックとなっている事務作業を特定し、ITツールを活用して最適化。本来集中すべき業務への時間を最大化します。</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'company':
        return (
          <div className="pt-20">
            <section className="py-32 bg-[#f8fbfa] px-6 text-left">
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
                    <div key={i} className="space-y-2 text-left text-left">
                      <p className="text-[10px] font-black text-[#4a9d86]/60 tracking-widest uppercase">{item.label}</p>
                      <p className="text-lg font-bold text-slate-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="max-w-6xl mx-auto px-6 py-24 text-left">
              <h3 className="text-2xl font-black mb-12 flex items-center space-x-3 text-left">
                <div className="w-1.5 h-6 bg-[#4a9d86] rounded-full text-left"></div>
                <span>主な事業目的</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  "再生可能エネルギー装置の販売・コンサル",
                  "経営に関する総合コンサルティング",
                  "マーケティングリサーチ業務",
                  "人事、総務、財務、経理の代行",
                  "営業代行及び事務代行業務",
                  "ITシステムの企画・開発・運用",
                  "ホテル関連等の事務フロー構築",
                  "前各号に附帯する一切の事業"
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-[#4a9d86] transition-all text-left">
                    <CheckCircleIcon size={16} className="text-[#4a9d86] shrink-0" />
                    <span className="text-slate-700 text-sm font-bold text-left">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-[#1a202c] bg-white text-left">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div onClick={() => setCurrentPage('home')}><Logo /></div>
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`text-sm font-bold transition-colors hover:text-[#4a9d86] ${currentPage === item.id ? 'text-[#4a9d86]' : 'text-slate-500'}`}>{item.label}</button>
            ))}
            <button onClick={() => setCurrentPage('contact')} className="px-6 py-2.5 bg-[#1a202c] text-white rounded-full text-sm font-bold hover:bg-[#4a9d86] transition-all">ご相談</button>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}</button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[60] p-8 flex flex-col text-left animate-in fade-in slide-in-from-top duration-300 text-left">
            <div className="flex justify-between items-center mb-12"><Logo /><button onClick={() => setIsMenuOpen(false)}><XIcon size={32} className="text-slate-400" /></button></div>
            <div className="flex flex-col space-y-8 text-left text-left">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { setCurrentPage(item.id); setIsMenuOpen(false); }} className="text-left text-4xl font-black text-slate-800">{item.label}</button>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="text-left">{renderPage()}</main>
      <footer className="bg-[#f8fbfa] border-t border-slate-100 py-20 px-6 text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 text-left md:text-center text-left">
          <Logo /><p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2021 Mochi LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;