'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Instagram, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  BarChart3, 
  Camera, 
  Target, 
  TrendingUp, 
  Zap, 
  Users,
  Award,
  Smartphone
} from 'lucide-react';

// --- CONFIGURAÇÃO E DADOS ---

const COLORS = {
  primary: "from-indigo-600 to-violet-600",
  primarySolid: "bg-indigo-600",
  primaryHover: "hover:bg-indigo-700",
  dark: "bg-slate-950",
  light: "bg-slate-50",
  textMain: "text-slate-900",
  textMuted: "text-slate-500",
};

const PLANS = [
  {
    name: "Marketing Essencial",
    price: "R$ 2.500",
    period: "/mês",
    description: "Ideal para marcas que precisam iniciar sua presença digital com qualidade profissional.",
    features: [
      "Gestão de Instagram (12 posts/mês)",
      "Edição básica de vídeos (Reels)",
      "Legendas estratégicas",
      "Relatório mensal de alcance"
    ],
    highlight: false,
    delay: 0.1
  },
  {
    name: "Marketing Estratégico",
    price: "R$ 4.800",
    period: "/mês",
    description: "O equilíbrio perfeito entre branding e performance para empresas em crescimento.",
    features: [
      "Tudo do plano Essencial",
      "Planejamento de Linha Editorial",
      "Captação de imagens (1 visita/mês)",
      "Gestão de Tráfego Pago (Setup)",
      "Análise de concorrência"
    ],
    highlight: true, // Destaque visual
    delay: 0.2
  },
  {
    name: "CMO as a Service",
    price: "Sob Consulta",
    period: "",
    description: "Ter uma CMO liderando o crescimento da sua empresa sem o custo de um executivo full-time.",
    features: [
      "Direção Criativa completa",
      "Liderança de times de marketing",
      "Estratégia Omnichannel",
      "Posicionamento de marca premium",
      "Reuniões quinzenais de board"
    ],
    highlight: false,
    delay: 0.3
  }
];

const SERVICES = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Direção Visual",
    desc: "Captação e edição de fotos/vídeos que elevam a percepção de valor da marca."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Estratégia de Marca",
    desc: "Definição de tom de voz, arquétipos e posicionamento único no mercado."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Marketing",
    desc: "Ações táticas focadas em aquisição de clientes e aumento de receita."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consultoria CMO",
    desc: "Visão executiva para estruturar departamentos e processos de marketing."
  }
];

const STEPS = [
  { number: "01", title: "Diagnóstico", desc: "Imersão profunda no momento atual da sua marca e identificação de gargalos." },
  { number: "02", title: "Planejamento", desc: "Desenvolvimento do plano tático: conteúdo, tráfego e posicionamento." },
  { number: "03", title: "Execução", desc: "Mão na massa: produção de alto nível e implementação das campanhas." },
  { number: "04", title: "Otimização", desc: "Análise de dados e ajustes finos para maximizar o ROI." }
];

// --- COMPONENTES UI ---

const Button = ({ children, variant = "primary", className = "", onClick, icon }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg";
  const variants = {
    primary: `${COLORS.primarySolid} text-white ${COLORS.primaryHover} shadow-indigo-500/30`,
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-indigo-900"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"} max-w-4xl mx-auto px-4`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mb-6 mx-auto"
    />
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-slate-600 leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

// --- APP PRINCIPAL ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito de scroll para a navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              Luisa Seus
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Método', 'Serviços', 'Planos', 'Sobre'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className={`font-medium hover:text-indigo-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {item}
              </button>
            ))}
            <Button variant={scrolled ? "primary" : "secondary"} onClick={() => scrollTo('contato')}>
              Falar Comigo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Método', 'Serviços', 'Planos', 'Sobre'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-2xl font-semibold text-slate-800"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollTo('contato')}>Falar Comigo</Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-75"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-indigo-300 mb-6 border border-white/10">
              <Zap className="w-4 h-4" /> Marketing que gera valor real
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transforme sua marca em <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Autoridade.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Estratégia, posicionamento e estética premium. Como CMO da Syngoo, ajudo marcas a saírem do "mais do mesmo" para se tornarem líderes de mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo('planos')} icon={<ArrowRight className="w-4 h-4" />}>
                Quero crescer minha marca
              </Button>
              <Button variant="outline" onClick={() => scrollTo('sobre')}>
                Conhecer a Luisa
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2"><Check className="text-indigo-400 w-5 h-5"/> Estratégia</div>
              <div className="flex items-center gap-2"><Check className="text-indigo-400 w-5 h-5"/> Conteúdo</div>
              <div className="flex items-center gap-2"><Check className="text-indigo-400 w-5 h-5"/> Performance</div>
            </div>
          </motion.div>

          {/* Hero Image / Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] md:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20 md:hidden"></div>
            {/* NOTA: Esta é a área onde a imagem 1apagar.jpg será exibida. 
                Estou usando um placeholder que simula a imagem renderizada no design.
                Para produção, substitua o src pela url real da imagem carregada.
            */}
            <img 
              src="1apagar.jpg" // Referência direta à imagem do usuário
              alt="Luisa Seus - CMO" 
              className="object-cover object-top w-full h-full rounded-2xl shadow-2xl border border-white/10 mask-image-gradient"
              onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }}
            />
            
            {/* Floating Card - Social Proof Style */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-xl shadow-xl z-30 max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Crescimento Médio</p>
                  <p className="text-lg font-bold text-slate-900">+145% engajamento</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[85%]"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METODOLOGIA (HOW IT WORKS) */}
      <section id="metodo" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Como funciona trabalhar comigo" 
            subtitle="Não é sorte, é método. Um processo validado para transformar seguidores em clientes e marca em legado."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-slate-200 group-hover:text-indigo-100 mb-4 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                
                {/* Connector Line (Desktop only, except last item) */}
                {idx !== STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-slate-200 z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS (WHAT I DO) */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Expertise Estratégica" 
            subtitle="Muito além de posts bonitos. Uma abordagem 360º para o seu negócio."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow items-start"
              >
                <div className="bg-indigo-50 text-indigo-600 p-4 rounded-xl shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-2xl relative z-10">
                 {/* Reusing image or secondary image */}
                 <img 
                  src="1apagar.jpg"
                  className="w-full h-full object-cover"
                  alt="Luisa Seus Portrait"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  }}
                 />
                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative graphic elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full z-0"></div>
              <div className="absolute -top-10 -left-10 w-24 h-24 border-4 border-violet-100 rounded-full z-0"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h4 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">Sobre Mim</h4>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Luisa Seus</h2>
              <h3 className="text-xl font-medium text-slate-700 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-500" />
                CMO na Syngoo
              </h3>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
                <p>
                  Sou especialista em Marketing com foco em unir <strong>estratégia e execução</strong>. Acredito que uma marca forte não se constrói apenas com estética, mas com posicionamento intencional.
                </p>
                <p>
                  Atuando em Balneário Camboriú - SC, um dos mercados mais competitivos do Brasil, desenvolvi um olhar clínico para o que realmente gera desejo e conversão.
                </p>
                <p>
                  Minha entrega vai do "chão de fábrica" (captação e edição) à visão de águia (estratégia de crescimento e branding).
                </p>
              </div>

              <div className="flex gap-4">
                <a href="https://instagram.com/luisaseus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-indigo-600 transition-colors">
                  <Instagram className="w-5 h-5" /> @luisaseus
                </a>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-2 text-slate-600">
                  <Smartphone className="w-5 h-5" /> Balneário Camboriú - SC
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLANOS E PREÇOS */}
      <section id="planos" className="py-24 bg-slate-900 text-white relative overflow-hidden">
         {/* Abstract BG */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Investimento Estratégico</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Escolha o nível de aceleração que sua empresa precisa hoje.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: plan.delay }}
                className={`relative p-8 rounded-3xl border flex flex-col h-full ${
                  plan.highlight 
                    ? 'bg-slate-800 border-indigo-500 shadow-2xl shadow-indigo-900/30 scale-105 z-10' 
                    : 'bg-slate-900/50 border-slate-700 hover:bg-slate-800 transition-colors'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Mais Escolhido
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className={`mt-0.5 p-1 rounded-full ${plan.highlight ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-700 text-slate-400'}`}>
                        <Check size={12} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.highlight ? "primary" : "outline"} 
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/5547999999999?text=Olá, Luisa! Gostaria de saber mais sobre o plano ${plan.name}`, '_blank')}
                >
                  Solicitar Proposta
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É (FILTER) */}
      <section className="py-24 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-lg text-green-600"><Check size={20}/></div>
                Para quem é meu trabalho
              </h3>
              <ul className="space-y-3">
                {["Empresas que querem deixar de ser commodities", "Profissionais liberais buscando autoridade", "Marcas que valorizam estética e dados", "Quem entende que marketing é investimento"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="p-2 bg-red-100 rounded-lg text-red-600"><X size={20}/></div>
                Para quem NÃO é
              </h3>
              <ul className="space-y-3">
                {["Quem busca 'milagres' do dia para a noite", "Quem quer apenas 'postar por postar'", "Quem não está disposto a investir em imagem", "Empresas sem estrutura para atender a demanda"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL & FOOTER */}
      <footer id="contato" className="bg-slate-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronta para o próximo nível?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Vamos agendar uma reunião rápida para entender se fazemos sentido juntos. Sem compromisso, apenas estratégia.
            </p>
            <Button 
              variant="primary" 
              className="px-10 py-4 text-lg"
              onClick={() => window.open('https://wa.me/5547999999999', '_blank')}
            >
              Iniciar Conversa no WhatsApp
            </Button>
          </motion.div>

          <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <p className="text-2xl font-bold text-white mb-1">Luisa Seus</p>
              <p className="text-slate-500 text-sm">CMO @ Syngoo</p>
            </div>

            <div className="flex gap-6">
              <a href="https://instagram.com/luisaseus" className="text-slate-400 hover:text-indigo-400 transition-colors"><Instagram /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors"><Linkedin /></a>
              <a href="mailto:contato@luisaseus.com" className="text-slate-400 hover:text-indigo-400 transition-colors"><Mail /></a>
            </div>

            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Luisa Seus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}