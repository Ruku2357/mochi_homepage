import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Settings2, 
  LineChart, 
  Cpu, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock
} from 'lucide-react';

// --- Components ---

// 画像3枚目のロゴスタイルを再現
const Logo = () => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="w-12 h-12 bg-gradient-to-br from-[#54b095] to-[#3a8b75] rounded-[1.2rem] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
      <Sparkles size={24} fill="currentColor" />
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-[900] tracking-tight text-[#1a202c] leading-none">Mochi</span>
      <span className="text-[10px] text-[#4a9d86] font-black tracking-[0.45em] uppercase mt-1 leading-none">Management & Tech</span>
    </div>
  </div>
);

const Navbar = ({ currentPage, setCurrentPage, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'トップ' },
    { id: 'services', label: 'サービス' },
    { id: 'company', label: '会社概要' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setCurrentPage('home')}>
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-bold transition-colors hover:text-[#4a9d86] ${currentPage === item.id ? 'text-[#4a9d86]' : 'text-slate-500'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-2.5 bg-[#1a202c] text-white rounded-full text-sm font-bold hover:bg-[#4a9d86] transition-all"
          >
            ご相談
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-8 flex flex-col animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center mb-12">
            <Logo />
            <button onClick={() => setIsMenuOpen(false)}><X size={32} className="text-slate-400" /></button>
          </div>
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setIsMenuOpen(false); }}
                className="text-left text-4xl font-black text-slate-800"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
              className="text-left text-4xl font-black text-[#4a9d86]"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// 画像2枚目のバッジスタイルを再現
const HeroBadge = () => (
  <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#e0f2ed] bg-white shadow-sm mb-10 group transition-all hover:border-[#4a9d86]">
    <div className="text-[#4a9d86]">
      <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
    </div>
    <span className="text-[#4a9d86] text-xs md:text-sm font-black tracking-[0.15em] uppercase">
      Smooth Business Experience
    </span>
  </div>
);

const Hero = ({ onAction }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 bg-[#f8fbfa]">
    <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
      <HeroBadge />
      
      <h1 className="text-5xl md:text-[5.5rem] font-black text-[#1a202c] leading-[1.05] mb-10 tracking-tight">
        ビジネスを、もっと<br />
        <span className="text-[#4a9d86]">しなやかに。</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-500 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
        Mochi合同会社は、エネルギー・IT・バックオフィス業務を<br className="hidden md:block" />
        「仕組み」でつなぎ、企業の成長を柔らかくサポートします。
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button 
          onClick={() => onAction('services')}
          className="w-full sm:w-auto px-12 py-5 bg-[#4a9d86] text-white rounded-2xl font-black text-lg hover:bg-[#3d826f] shadow-lg shadow-[#4a9d86]/20 transition-all flex items-center justify-center space-x-3 group"
        >
          <span>サービスを見る</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
    {/* 装飾用背景 */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
  </section>
);

// 画像1枚目のアイコン+文字のカードを再現
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-start text-left">
    <div className="w-20 h-20 bg-[#f0f9f6] rounded-[1.5rem] flex items-center justify-center text-[#4a9d86] mb-10 group-hover:bg-[#4a9d86] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-[#1a202c] mb-6 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-base">
      {desc}
    </p>
  </div>
);

const Services = () => (
  <section className="py-32 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard 
          icon={<Zap size={36} />}
          title="再生可能エネルギー事業"
          desc="太陽光発電設備の販売・設置、およびコンサルティング。エネルギーの自給自足とコスト削減を、確かな技術で実現します。"
        />
        <ServiceCard 
          icon={<Settings2 size={36} />}
          title="経営・事務DX代行"
          desc="人事、総務、財務などのバックオフィス業務をシステム化。ミスを減らし、本来集中すべき業務への時間を創出します。"
        />
        <ServiceCard 
          icon={<Cpu size={36} />}
          title="ITソリューション開発"
          desc="業務フローに最適化されたソフトウェアやシステムの受託開発。企画から運用まで、スピード感を持って実装します。"
        />
        <ServiceCard 
          icon={<LineChart size={36} />}
          title="マーケティングリサーチ"
          desc="市場の動向を構造的に分析し、戦略的な意思決定をサポート。データに基づいた確度の高い成長戦略を描きます。"
        />
      </div>
    </div>
  </section>
);

const Company = () => {
  const info = [
    { label: "商号", value: "Mochi合同会社 (Mochi LLC)" },
    { label: "設立", value: "2021年 (令和3年) 2月15日" },
    { label: "本店所在地", value: "埼玉県蓮田市大字貝塚71番地" },
    { label: "代表社員", value: "山崎 啓太" },
    { label: "資本金", value: "1,000,000円" },
    { label: "法人番号", value: "0300-03-016708" }
  ];

  return (
    <section className="py-32 bg-[#f8fbfa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-[#4a9d86] text-sm font-black tracking-[0.4em] uppercase mb-6">Company</h2>
            <p className="text-4xl font-black text-[#1a202c] tracking-tight leading-tight">
              柔らかく、<br />粘り強く支える。
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {info.map((item, i) => (
              <div key={i} className="space-y-2">
                <p className="text-[10px] font-black text-[#4a9d86]/60 tracking-widest uppercase">{item.label}</p>
                <p className="text-lg font-bold text-slate-800 tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-32 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-black text-[#1a202c] mb-8 tracking-tight">ビジネスを一歩、先へ。</h2>
      <p className="text-slate-500 mb-14 font-medium text-lg">
        事務の効率化から新規事業のシステム構築まで、<br />
        お気軽にご相談ください。
      </p>
      <a 
        href="mailto:contact@mochi-llc.com"
        className="inline-flex items-center space-x-4 px-12 py-6 bg-[#1a202c] text-white rounded-2xl font-black text-xl hover:bg-[#4a9d86] hover:scale-105 transition-all shadow-xl shadow-slate-200"
      >
        <Mail size={24} />
        <span>お問い合わせ</span>
      </a>
    </div>
  </section>
);

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-[#f8fbfa] border-t border-slate-100 py-20 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <Logo />
      <div className="flex space-x-12 text-sm font-bold text-slate-500">
        <button onClick={() => setCurrentPage('home')} className="hover:text-[#4a9d86]">Home</button>
        <button onClick={() => setCurrentPage('services')} className="hover:text-[#4a9d86]">Services</button>
        <button onClick={() => setCurrentPage('company')} className="hover:text-[#4a9d86]">Company</button>
      </div>
      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2021 Mochi LLC. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero onAction={setCurrentPage} />
            <Services />
            <Company />
            <Contact />
          </>
        );
      case 'services':
        return (
          <div className="pt-20">
            <Services />
            <div className="bg-[#f0f9f6] py-32 px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-black text-[#1a202c] mb-12 tracking-tight">実務を「仕組み」で解決する。</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white p-8 rounded-3xl border border-white shadow-sm">
                    <div className="w-12 h-12 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[#4a9d86] mb-6">
                      <FileText />
                    </div>
                    <h4 className="text-xl font-black mb-4">事務作業の自動化</h4>
                    <p className="text-slate-500 text-sm font-medium">請求書発行やデータ管理など、繰り返されるルーチンワークをテンプレート化し、ヒューマンエラーをゼロにします。</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-white shadow-sm">
                    <div className="w-12 h-12 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[#4a9d86] mb-6">
                      <Clock />
                    </div>
                    <h4 className="text-xl font-black mb-4">リードタイムの短縮</h4>
                    <p className="text-slate-500 text-sm font-medium">業務フローのボトルネックを特定し、ITツールを活用することで、意思決定と実行のスピードを加速させます。</p>
                  </div>
                </div>
              </div>
            </div>
            <Contact />
          </div>
        );
      case 'company':
        return (
          <div className="pt-20">
            <Company />
            <div className="max-w-6xl mx-auto px-6 py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "再生可能エネルギー装置の販売・コンサル",
                  "経営に関する総合コンサルティング",
                  "マーケティングリサーチ業務",
                  "人事、総務、財務、経理の代行",
                  "運営管理受託業務",
                  "労働者派遣・有料職業紹介事業",
                  "人材リサーチ業務",
                  "人材育成・教育研修事業",
                  "営業代行及び事務代行業務",
                  "情報通信システム・ソフトの企画・開発",
                  "電気料金等のコスト削減事業",
                  "前各号に附帯する一切の事業"
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-[#4a9d86] transition-all">
                    <CheckCircle2 size={16} className="text-[#4a9d86] shrink-0" />
                    <span className="text-slate-700 text-sm font-bold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Contact />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-40 pb-20 min-h-[90vh] flex flex-col items-center justify-center bg-[#f8fbfa]">
            <HeroBadge />
            <Contact />
          </div>
        );
      default:
        return <Hero onAction={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen text-[#1a202c]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} scrolled={scrolled} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;