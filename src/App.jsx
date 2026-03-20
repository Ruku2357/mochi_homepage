import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  LineChart, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  Rocket, 
  Layers, 
  Activity,
  ShieldCheck,
  Building2,
  Scale,
  History
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const companyInfo = {
    name: "Ruku合同会社",
    nameEn: "Ruku LLC",
    number: "6190003004759",
    founded: "2024年7月29日",
    capital: "5,000,000円",
    address: "三重県四日市市あかつき台1丁目3番地20",
    representative: "東川 宗嗣",
    domain: "ruku2357.com",
    announcement: "官報に掲載する方法により行う",
    purposes: [
      "各種コンサルティング業務",
      "システムの企画、開発、運用、保守、販売",
      "各種アプリケーションソフトの企画、開発、制作",
      "インターネットによる広告業務及び番組配信",
      "不動産の売買、賃貸、開発、仲介及び管理業",
      "有価証券の取得、売却、保有及び運用"
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-700"></div>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl">R</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-black tracking-[0.25em] uppercase leading-none">Ruku</span>
              <span className="text-[10px] text-blue-500 font-mono tracking-[0.4em] mt-1.5 opacity-80">STRUCTURE & LOGIC</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] font-bold tracking-[0.25em] uppercase">
            {['Vision', 'Expertise', 'Identity', 'Legal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href={`mailto:contact@${companyInfo.domain}`} className="px-8 py-3 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              Inquire
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-3xl pt-32 px-10 md:hidden">
          <div className="flex flex-col space-y-10 text-5xl font-black tracking-tighter">
            {['Vision', 'Expertise', 'Identity', 'Legal'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between group">
                <span>{item}</span>
                <ChevronRight size={40} className="text-blue-500" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="vision" className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-32">
        <div className="relative z-10 w-full max-w-7xl">
          <div className="flex flex-col items-start mb-24">
            <div className="inline-flex items-center space-x-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-12">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase">Architecture of Systems</span>
            </div>
            
            <h1 className="text-7xl md:text-[11rem] font-black tracking-[ -0.05em] text-left leading-[0.85] mb-20">
              STRUCTURING<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">THE LOGIC</span>
            </h1>

            {/* 01-03 Section: Redesigned and Enlarged */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
              {[
                { num: "01", label: "CONCEPT", text: "複雑な事象を抽象化し、ビジネスの本質的な「構造」を設計します" },
                { num: "02", label: "IMPLEMENT", text: "Pythonを基軸に、堅牢かつ柔軟なシステムとして実体化します" },
                { num: "03", label: "PROVE", text: "データと実績に基づき、設計の正しさを市場で証明します" }
              ].map((item, idx) => (
                <div key={idx} className="group relative pt-12 border-t border-white/10 hover:border-blue-500/50 transition-colors duration-500">
                  <span className="absolute top-4 left-0 text-5xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors font-mono">{item.num}</span>
                  <h3 className="text-2xl font-black tracking-widest mb-6">{item.label}</h3>
                  <p className="text-xl text-slate-400 leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Expertise Section */}
      <section id="expertise" className="py-56 relative px-8 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-left">
            <h2 className="text-[11px] font-black text-blue-500 tracking-[0.6em] uppercase mb-6">Service Matrix</h2>
            <p className="text-6xl md:text-7xl font-black tracking-tighter">事業領域の実装</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[280px]">
            {/* Bento Cell 1: System Dev */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#111] to-[#050505] border border-white/5 p-16 flex flex-col justify-between text-left">
              <div className="relative z-10">
                <Terminal className="w-16 h-16 text-blue-500 mb-10" />
                <h3 className="text-5xl font-black mb-8">Systems Development</h3>
                <p className="text-slate-400 max-w-lg text-xl leading-relaxed">
                  業務自動化、金融データ解析、新規事業のMVP開発。Pythonを用いた高精度なスクリプトから、スケーラブルなバックエンド構築まで、一気通貫でサポートします
                </p>
              </div>
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-10 right-10">
                <div className="flex items-center space-x-3 text-xs font-mono text-blue-500/60 font-bold tracking-widest">
                  <Activity className="w-5 h-5" />
                  <span>READY FOR DEPLOYMENT</span>
                </div>
              </div>
            </div>

            {/* Bento Cell 2: Consulting (Arrows Removed) */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-12 flex flex-col justify-between hover:bg-white/[0.04] transition-all text-left">
              <div>
                <Layers className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl font-black tracking-tight">Strategic Consulting</h3>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">大企業での新規事業立案経験に基づき、技術とビジネスの交差点を最適化します</p>
            </div>

            {/* Bento Cell 3: Asset Analysis (Arrows Removed) */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-12 flex flex-col justify-between hover:bg-white/[0.04] transition-all text-left">
              <div>
                <LineChart className="w-10 h-10 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-black tracking-tight">Structural Asset Analysis</h3>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">有価証券や不動産市場を「構造」として捉え、データドリブンな評価分析を提供します</p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section (JAXA Context) */}
      <section id="identity" className="py-56 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="text-left">
              <h2 className="text-[11px] font-black text-blue-500 tracking-[0.6em] uppercase mb-10">Professional Identity</h2>
              <p className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-14">
                宇宙の精密さと、<br />ビジネスの速度。
              </p>
              <div className="space-y-16">
                <div className="relative pl-10 border-l-2 border-blue-600/40">
                  <h4 className="font-black text-2xl mb-5">Structural Research at JAXA</h4>
                  <p className="text-slate-400 text-lg leading-relaxed italic">
                    国立研究開発法人（JAXA）での宇宙太陽光発電・薄膜構造物研究。極限環境下で求められる「究極の論理的整合性」が、私の実装の土台です
                  </p>
                </div>
                <div className="relative pl-10 border-l-2 border-blue-600/40">
                  <h4 className="font-black text-2xl mb-5">Corporate R&D Strategy</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    国内最大手メーカーでの環境・金融・ITを横断した新規事業開発。組織のダイナミズムを理解した上で、技術の社会実装を加速させます
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600/10 rounded-full blur-[120px] absolute inset-0 animate-pulse"></div>
              <div className="relative aspect-square border border-white/5 rounded-[4rem] bg-[#050505]/50 backdrop-blur-3xl p-12 flex flex-col justify-center items-center text-center">
                 <Rocket size={120} className="text-white opacity-10 mb-8" />
                 <p className="text-xs font-mono text-blue-500/60 tracking-[0.5em] uppercase">Structural Engineering Heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Info / Company Info - Substantially Updated */}
      <section id="legal" className="py-56 px-8 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 text-left">
            <div className="lg:col-span-4">
              <h2 className="text-[11px] font-black text-blue-500 tracking-[0.6em] uppercase mb-8">Corporate Profile</h2>
              <p className="text-6xl font-black mb-10 tracking-tighter">実態証明</p>
              <div className="space-y-6 text-slate-500">
                <div className="flex items-center space-x-3">
                  <ShieldCheck size={20} className="text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest">Verified Entity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Scale size={20} className="text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest tracking-tighter">Compliance First</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 italic">
                  <History size={20} />
                  <span className="text-xs">令和6年12月4日時点の公表情報に基づく</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {[
                  { label: "商号", value: companyInfo.name, sub: companyInfo.nameEn },
                  { label: "法人番号 / 会社法人等番号", value: companyInfo.number, sub: "1900-03-004759" },
                  { label: "本店所在地", value: companyInfo.address, icon: <MapPin size={16} className="text-blue-500" /> },
                  { label: "代表社員", value: companyInfo.representative },
                  { label: "設立年月日", value: companyInfo.founded },
                  { label: "資本金の額", value: companyInfo.capital },
                  { label: "公告をする方法", value: companyInfo.announcement },
                  { label: "会社成立の年月日", value: "令和6年7月29日" }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-6">
                    <p className="text-[10px] text-blue-500 font-black tracking-[0.3em] uppercase mb-3">{item.label}</p>
                    <p className="text-xl font-bold tracking-tight text-white flex items-center">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.value}
                    </p>
                    {item.sub && <p className="text-xs text-slate-600 mt-1 font-mono tracking-widest uppercase">{item.sub}</p>}
                  </div>
                ))}
                
                {/* Business Purpose Section Added */}
                <div className="md:col-span-2 pt-8">
                  <p className="text-[10px] text-blue-500 font-black tracking-[0.3em] uppercase mb-6 flex items-center">
                    <Building2 size={14} className="mr-2" /> 目的
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {companyInfo.purposes.map((purpose, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-sm text-slate-400">
                        <span className="text-blue-500 font-mono text-[10px] mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                        <span className="leading-relaxed">{purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="relative py-40 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black tracking-[ -0.05em] mb-12 text-center">
              READY TO<br />
              <span className="text-blue-600">STRUCTURE?</span>
            </h2>
            <p className="text-slate-500 text-center max-w-xl text-lg mb-16 leading-relaxed">
              論理的な課題解決と、構造的な価値創造が必要な時、<br />
              Rukuが貴方のパートナーとして伴走します。
            </p>
            <a 
              href={`mailto:contact@${companyInfo.domain}`} 
              className="group flex items-center space-x-6 px-12 py-6 bg-white text-black rounded-full font-black text-lg hover:bg-blue-600 hover:text-white transition-all duration-500"
            >
              <span>Contact via Email</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 space-y-8 md:space-y-0 text-[11px] font-black tracking-[0.4em] text-slate-600 uppercase">
            <div className="flex items-center space-x-12">
              <span>© 2024 RUKU LLC.</span>
              <span>{companyInfo.domain}</span>
            </div>
            <div className="flex items-center space-x-12">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;