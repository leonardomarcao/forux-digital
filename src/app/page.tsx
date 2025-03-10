"use client";

import React, { useState, useEffect } from "react";
import {
    AlertCircle,
    ArrowUp,
    ArrowRight,
    Building,
    CheckCircle,
    Cpu,
    Database,
    Facebook,
    FileText,
    Instagram,
    Linkedin,
    MessageCircle,
    Phone,
    Rocket,
    Settings,
    ShieldCheck,
    Users,
    Zap,
    Menu,
    X,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { motion, AnimatePresence } from "framer-motion";

const ForuxLogo = ({ className = "h-16 w-16", textColor = "text-white" }) => (
    <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
    >
        <div className="relative h-16 w-16">
            <img
                src="/forux.svg"
                alt="Forux Digital Logo"
                className="relative h-16 w-16"
            />
        </div>
    </motion.div>
);

const Page = () => {
    const [activeTab, setActiveTab] = useState("receptivo");
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Navigation items
    const navItems = [
        { label: "Como Funciona", href: "#como-funciona" },
        { label: "Integrações", href: "#integracoes" },
        { label: "Soluções", href: "#solucoes" },
        { label: "Preços", href: "#precos" },
        { label: "FAQ", href: "#faq" },
        { label: "Contato", href: "#contato" },
    ];

    // Detect client-side
    useEffect(() => {
        setMounted(true);
    }, []);

    // Change header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolledToTop(window.scrollY < 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on navigation click
    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    // Animation Variants - Softer with reduced values
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const fadeInStagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const fadeUpItem = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    // Mobile menu animation
    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 40,
            },
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 40,
                staggerChildren: 0.07,
            },
        },
    };

    const mobileNavItemVariants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0 },
    };

    // Reduced number of particles for cleaner look
    const particles = Array.from({ length: 12 }).map((_, i) => ({
        top: `${(i * 8) % 100}%`,
        left: `${(i * 9) % 100}%`,
        delay: i * 0.3,
        duration: 6 + (i % 4),
    }));

    // If not client-mounted yet, show cleaner loader
    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#080a18] flex items-center justify-center">
                <div className="w-12 h-12 border-3 border-[#4c0bd1] border-t-[#e43397] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#050714] to-[#050815] text-gray-200">
            {/* Back to top button - smoother animation */}
            <AnimatePresence>
                {!scrolledToTop && (
                    <motion.div
                        className="fixed bottom-8 right-8 z-50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button
                            className="w-10 h-10 rounded-full bg-[#4c0bd1] hover:bg-[#3a09a0] shadow-lg shadow-[#4c0bd1]/20"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <ArrowUp className="h-4 w-4" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header - updated with menu */}
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                    scrolledToTop
                        ? "bg-transparent border-transparent backdrop-blur-none py-6"
                        : "border-b border-[#4c0bd1]/10 bg-[#050714]/90 backdrop-blur-md py-4"
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <ForuxLogo />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <nav className="flex items-center space-x-6 mr-6">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
                            >
                                <a
                                    href="https://wa.me/5582998385111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white font-medium hover:shadow-md hover:shadow-[#4c0bd1]/20 transition-all duration-200"
                                >
                                    <Phone className="w-4 h-4" />
                                    Fale Conosco
                                </a>
                            </motion.div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <a
                                    href="https://wa.me/5582998385111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center mr-4 gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white text-sm font-medium"
                                >
                                    <Phone className="w-3.5 h-3.5" />
                                    Fale Conosco
                                </a>
                            </motion.div>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-md text-white focus:outline-none"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="fixed inset-x-0 top-[72px] z-50 md:hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                        >
                            <div className="bg-[#050714] shadow-lg border-b border-[#4c0bd1]/20 py-4">
                                <div className="container mx-auto px-4">
                                    <nav className="flex flex-col space-y-3">
                                        {navItems.map((item, index) => (
                                            <motion.a
                                                key={index}
                                                href={item.href}
                                                className="text-gray-300 hover:text-white py-2 border-b border-[#4c0bd1]/10 transition-colors flex items-center"
                                                onClick={handleNavClick}
                                                variants={mobileNavItemVariants}
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#e43397] mr-3"></div>
                                                {item.label}
                                            </motion.a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero Section - cleaner, darker, with softer animations */}
            <section className="pt-24 pb-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#050714] z-0">
                    {/* Reduced intensity of background gradients */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#4c0bd1] opacity-5 blur-[100px]"
                        animate={{
                            x: [0, 20, 0],
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full bg-[#e43397] opacity-5 blur-[100px]"
                        animate={{
                            x: [0, -15, 0],
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInStagger}
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeUpItem} className="mb-5">
                                <Badge className="bg-[#4c0bd1]/20 text-[#e43397] hover:bg-[#4c0bd1]/30 border-[#4c0bd1]/50">
                                    Inovação em IA
                                </Badge>
                            </motion.div>
                            <motion.h1
                                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
                                variants={fadeUpItem}
                            >
                                Agentes de IA e{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4c0bd1] to-[#e43397]">
                  Automações
                </span>
                            </motion.h1>
                            <motion.p
                                className="text-lg text-gray-300 mb-8 leading-relaxed"
                                variants={fadeUpItem}
                            >
                                Escale sua receita enquanto reduz custos operacionais com nossos
                                agentes de IA que funcionam 24/7 sem custos trabalhistas.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={fadeUpItem}
                            >
                                <a
                                    href="https://wa.me/5582998385111?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-md hover:shadow-[#4c0bd1]/20 border-0 text-white transition-all duration-200 transform hover:scale-[1.02]">
                                        Agendar Demonstração
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href="#como-funciona"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto border-[#4c0bd1]/60 text-[#e43397] hover:bg-[#4c0bd1]/5 hover:text-white transition-all duration-200"
                                    >
                                        Saiba Mais
                                    </Button>
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={slideInRight}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4c0bd1]/10 to-[#e43397]/10 rounded-2xl blur-md transform -rotate-1 scale-105" />
                            <motion.div
                                className="bg-[#070920]/90 p-6 rounded-xl shadow-lg border border-[#4c0bd1]/20 backdrop-blur-sm relative"
                                animate={{
                                    boxShadow: [
                                        "0 0 0 rgba(76, 11, 209, 0.2)",
                                        "0 0 15px rgba(76, 11, 209, 0.3)",
                                        "0 0 0 rgba(76, 11, 209, 0.2)",
                                    ],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            >
                                <motion.div
                                    className="bg-[#080a20]/60 p-5 rounded-lg border border-[#4c0bd1]/20 flex items-start gap-4"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#4c0bd1] flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-medium text-gray-300">Cliente</p>
                                        <div className="bg-[#050714]/80 p-3 rounded-lg border border-[#4c0bd1]/10">
                                            Olá, gostaria de informações sobre seus serviços de automação.
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="my-4 border-l-2 border-dashed border-[#4c0bd1]/30 ml-10 pl-8 py-2 flex items-center"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <motion.div
                                        className="w-5 h-5 bg-[#080a20] rounded-full flex items-center justify-center"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                    >
                                        <Cpu className="w-3 h-3 text-[#e43397]" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="bg-[#080a20]/60 p-5 rounded-lg border border-[#4c0bd1]/20 flex items-start gap-4"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#e43397] flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-medium text-gray-300">Agente de IA</p>
                                        <div className="bg-[#050714]/80 p-3 rounded-lg border border-[#e43397]/10">
                                            Olá! Sou o assistente virtual da Forux Digital. Temos soluções de
                                            automação com IA para atendimento, vendas e CRM. Como posso ajudar
                                            sua empresa hoje?
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Typing indicator - smoother animation */}
                                <motion.div
                                    className="flex space-x-1.5 justify-end mt-4 pr-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.4 }}
                                >
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-[#e43397]"
                                            animate={{
                                                y: [0, -3, 0],
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                delay: i * 0.15,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Reduced decorative elements */}
                <div className="hidden md:block">
                    <motion.div
                        className="absolute bottom-10 left-10 w-20 h-20 border border-[#4c0bd1]/20 rounded-full"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                    <motion.div
                        className="absolute top-20 right-20 w-12 h-12 border border-[#e43397]/20 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                </div>
            </section>

            {/* How It Works - cleaner layout */}
            <section className="py-20 bg-[#040613]" id="como-funciona">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <Badge className="mb-5 bg-[#4c0bd1]/20 text-[#e43397] hover:bg-[#4c0bd1]/30 border-[#4c0bd1]/40">
                            Como Funciona
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Implantação em 3 Etapas Simples
                        </h2>
                        <p className="text-lg text-gray-300">
                            Nosso processo de implementação foi desenhado para ser eficiente e
                            não-intrusivo, permitindo que você veja resultados rapidamente.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInStagger}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {[
                            {
                                step: 1,
                                title: "Diagnóstico e Planejamento",
                                description:
                                    "Nossa equipe realiza uma análise detalhada dos processos atuais da sua empresa para identificar oportunidades de automação.",
                                icon: <Settings className="w-6 h-6 text-[#e43397]" />,
                                items: [
                                    "Mapeamento de processos atuais",
                                    "Identificação de gargalos operacionais",
                                    "Definição de KPIs e métricas de sucesso",
                                    "Elaboração de cronograma de implementação",
                                ],
                            },
                            {
                                step: 2,
                                title: "Desenvolvimento e Personalização",
                                description:
                                    "Configuramos e treinamos os agentes de IA com base nas necessidades específicas e na identidade da sua empresa.",
                                icon: <Cpu className="w-6 h-6 text-[#e43397]" />,
                                items: [
                                    "Treinamento personalizado dos agentes",
                                    "Integração com sistemas existentes",
                                    "Configuração de fluxos e automações",
                                    "Testes e validação de cenários",
                                ],
                            },
                            {
                                step: 3,
                                title: "Implantação e Monitoramento",
                                description:
                                    "Implementamos a solução com acompanhamento contínuo para garantir que os resultados esperados sejam alcançados.",
                                icon: <Rocket className="w-6 h-6 text-[#e43397]" />,
                                items: [
                                    "Lançamento controlado",
                                    "Acompanhamento de métricas em tempo real",
                                    "Ajustes e otimizações contínuas",
                                    "Relatórios periódicos de desempenho",
                                ],
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                variants={fadeUpItem}
                            >
                                {/* Step indicator */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] flex items-center justify-center border-4 border-[#040613]"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                    <span className="text-base font-bold text-white">
                      {step.step}
                    </span>
                                    </motion.div>
                                </div>
                                {index < 2 && (
                                    <div className="absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-[#4c0bd1] to-[#e43397] opacity-30 hidden md:block"></div>
                                )}

                                <Card className="bg-[#070920] border-[#4c0bd1]/20 shadow-md h-full mt-6 overflow-hidden hover:border-[#e43397]/40 transition-all duration-300 hover:shadow-[#4c0bd1]/10 hover:shadow-lg">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col items-center text-center mb-3">
                                            <motion.div
                                                className="p-2.5 rounded-lg bg-[#4c0bd1]/10 mb-3"
                                                whileHover={{ rotate: 3, scale: 1.05 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 10,
                                                }}
                                            >
                                                {step.icon}
                                            </motion.div>
                                            <CardTitle className="text-lg font-semibold text-white">
                                                {step.title}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="text-gray-400 text-center text-sm">
                                            {step.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2.5 mt-3">
                                            {step.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                    initial={{ opacity: 0, x: -5 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircle className="w-4 h-4 text-[#e43397] flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300 text-sm">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats - cleaner with reduced particle count */}
            <section className="py-20 bg-[#050714] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#4c0bd1]/3 z-0" />

                {/* Reduced animated particles */}
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-[#e43397]/20"
                        style={{
                            top: particle.top,
                            left: particle.left,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: particle.delay,
                        }}
                    />
                ))}

                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#040613] to-transparent z-0" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <Badge className="mb-5 bg-[#4c0bd1]/20 text-[#e43397] hover:bg-[#4c0bd1]/30 border-[#4c0bd1]/40">
                            Resultados
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Impacto Mensurável para Seu Negócio
                        </h2>
                        <p className="text-lg text-gray-300">
                            Nossos clientes têm obtido resultados expressivos com nossas
                            soluções de automação inteligente.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInStagger}
                    >
                        {[
                            {
                                value: "70%",
                                label: "Redução de custos operacionais",
                                icon: <Zap className="w-5 h-5 text-[#e43397]" />,
                            },
                            {
                                value: "24/7",
                                label: "Disponibilidade para atendimento",
                                icon: <Cpu className="w-5 h-5 text-[#4c0bd1]" />,
                            },
                            {
                                value: "95%",
                                label: "Taxa de resolução sem intervenção humana",
                                icon: <CheckCircle className="w-5 h-5 text-[#e43397]" />,
                            },
                            {
                                value: "10x",
                                label: "Mais clientes atendidos simultaneamente",
                                icon: <Users className="w-5 h-5 text-[#4c0bd1]" />,
                            },
                        ].map((stat, index) => (
                            <motion.div key={index} variants={fadeUpItem}>
                                <Card className="bg-[#070920]/70 backdrop-blur-sm border-[#4c0bd1]/20 shadow-md overflow-hidden hover:border-[#e43397]/30 transition-all duration-300 transform hover:scale-[1.02]">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col items-center text-center">
                                            <motion.div
                                                className="p-2.5 rounded-full bg-[#050714]/80 mb-4 border border-[#4c0bd1]/20"
                                                whileHover={{ rotate: 5, scale: 1.05 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 10,
                                                }}
                                            >
                                                {stat.icon}
                                            </motion.div>
                                            <motion.div
                                                className="text-3xl font-bold text-white mb-2"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: index * 0.1,
                                                    type: "spring",
                                                    stiffness: 100,
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                {stat.value}
                                            </motion.div>
                                            <p className="text-gray-300 text-sm">{stat.label}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partners & Integrations - simplified */}
            <section className="py-20 bg-[#040613]" id="integracoes">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <Badge className="mb-5 bg-[#4c0bd1]/20 text-[#e43397] hover:bg-[#4c0bd1]/30 border-[#4c0bd1]/40">
                            Integrações
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Compatível com Seus Sistemas
                        </h2>
                        <p className="text-lg text-gray-300">
                            Nossa tecnologia integra-se perfeitamente com as principais
                            plataformas e serviços do mercado.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                {
                                    title: "CRMs e Gestão de Vendas",
                                    description:
                                        "Integre nossos agentes diretamente aos seus sistemas de CRM para atualizar leads, oportunidades e histórico de interações automaticamente.",
                                    platforms: [
                                        "Salesforce",
                                        "HubSpot",
                                        "Pipedrive",
                                        "RD Station",
                                        "Monday.com",
                                        "Microsoft Dynamics",
                                    ],
                                },
                                {
                                    title: "Plataformas de Comunicação",
                                    description:
                                        "Nossos agentes podem operar em diversos canais de comunicação, centralizando o atendimento e garantindo experiência consistente.",
                                    platforms: [
                                        "WhatsApp Business API",
                                        "Telegram",
                                        "Instagram Direct",
                                        "Facebook Messenger",
                                        "E-mail",
                                        "SMS",
                                        "Webchat",
                                    ],
                                },
                                {
                                    title: "ERPs e Sistemas de Gestão",
                                    description:
                                        "Automatize processos internos integrando os agentes de IA aos seus sistemas de gestão empresarial.",
                                    platforms: [
                                        "SAP",
                                        "Oracle",
                                        "Totvs",
                                        "Odoo",
                                        "Sage",
                                        "Microsoft Dynamics 365",
                                    ],
                                },
                                {
                                    title: "Ferramentas de Produtividade",
                                    description:
                                        "Conecte seus agentes a aplicativos de produtividade para agendar reuniões, gerenciar tarefas e documentos.",
                                    platforms: [
                                        "Google Workspace",
                                        "Microsoft 365",
                                        "Trello",
                                        "Asana",
                                        "Notion",
                                        "Calendly",
                                    ],
                                },
                            ].map((category, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-[#4c0bd1]/20 overflow-hidden"
                                >
                                    <AccordionTrigger className="text-white hover:text-[#e43397] py-4 group text-base">
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-2.5"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#e43397] group-hover:scale-125 transition-all duration-300" />
                                            {category.title}
                                        </motion.div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <motion.div
                                            className="py-3 space-y-3"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-gray-400 text-sm">{category.description}</p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {category.platforms.map((platform, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                    >
                                                        <Badge className="bg-[#070920] hover:bg-[#4c0bd1]/50 text-gray-300 hover:text-white border border-[#4c0bd1]/20 hover:border-[#e43397]/60 transition-all duration-200 text-xs">
                                                            {platform}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                    <div className="flex justify-center mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <a
                                href="https://wa.me/5582998385111?text=Olá,%20gostaria%20de%20saber%20sobre%20integrações%20específicas."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-md hover:shadow-[#4c0bd1]/20 border-0 text-white transition-all duration-200 transform hover:scale-[1.02]">
                                    Consultar Integrações Específicas
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - cleaner with better contrast */}
            <section className="py-14 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#070920] to-[#4c0bd1]/60 z-0" />

                {/* Subtle pattern - less intense */}
                <div className="absolute inset-0 z-0 opacity-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 800 800"
                    >
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Pronto para automatizar com inteligência?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                            Comece hoje mesmo e transforme a maneira como sua empresa se comunica
                            e opera.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <a
                                    href="https://wa.me/5582998385111?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white font-medium shadow-md shadow-[#4c0bd1]/20 transition-all duration-200"
                                >
                                    <Phone className="w-4 h-4" />
                                    Falar pelo WhatsApp
                                </a>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <a href="#precos">
                                    <Button
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-200 px-6"
                                    >
                                        Conhecer Planos
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions section with simpler tab design */}
            <section className="py-20 bg-[#040613]" id="solucoes">
                <div className="container mx-auto px-4">
                    {/* Section header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-block mb-5 px-4 py-1 bg-[#4c0bd1]/20 text-[#e43397] rounded-md border border-[#4c0bd1]/40">
                            Nossas Soluções
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Soluções Inteligentes para Seu Negócio
                        </h2>
                        <p className="text-lg text-gray-300">
                            Nossos agentes de IA são projetados para escalar sua operação e reduzir
                            custos, mantendo a qualidade de atendimento.
                        </p>
                    </div>

                    {/* Simple tab navigation */}
                    <div className="max-w-4xl mx-auto">
                        {/* Tab Navigation */}
                        <div className="flex mb-6">
                            <button
                                onClick={() => setActiveTab("receptivo")}
                                className={`flex items-center justify-center flex-1 py-3 px-4 rounded-md transition-all duration-300 ${
                                    activeTab === "receptivo"
                                        ? "bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white font-medium"
                                        : "bg-transparent text-gray-400 hover:text-gray-200"
                                }`}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Agente Receptivo
                            </button>
                            <button
                                onClick={() => setActiveTab("ativo")}
                                className={`flex items-center justify-center flex-1 py-3 px-4 rounded-md transition-all duration-300 ${
                                    activeTab === "ativo"
                                        ? "bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white font-medium"
                                        : "bg-transparent text-gray-400 hover:text-gray-200"
                                }`}
                            >
                                <Zap className="w-5 h-5 mr-2" />
                                Agente Ativo
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="bg-[#070920] rounded-lg border border-[#0d1042] p-6 md:p-8">
                            {/* Receptivo Tab Content */}
                            {activeTab === "receptivo" && (
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-[#4c0bd1]/20 flex items-center justify-center mr-3">
                                                <MessageCircle className="w-5 h-5 text-[#e43397]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Agente Receptivo</h3>
                                        </div>

                                        <p className="text-gray-300 mb-6">
                                            Clone seu melhor atendente para operar no WhatsApp e outros
                                            canais, garantindo eficiência e qualidade em atendimentos
                                            receptivos.
                                        </p>

                                        <ul className="space-y-3">
                                            {[
                                                "Atendimento automático via WhatsApp (texto, áudio, imagens)",
                                                "Qualificação de leads, resolução de dúvidas e coleta de dados",
                                                "Integração com CRM via API para consulta e registro",
                                                "Envio de e-mails, gestão de calendários e documentos",
                                                "Escalabilidade ilimitada: atende qualquer volume de contatos simultâneos",
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="space-y-4">
                                            {[
                                                { icon: <MessageCircle />, text: "Atendimento automatizado" },
                                                { icon: <Users />, text: "Qualificação de leads" },
                                                { icon: <Database />, text: "Integração com CRM" },
                                                { icon: <FileText />, text: "Gestão de documentos" },
                                                { icon: <Rocket />, text: "Escalabilidade ilimitada" },
                                            ].map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-4 p-4 rounded-md bg-[#050714] border border-[#0d1042] hover:border-[#4c0bd1]/30 transition-colors duration-300"
                                                >
                                                    <div className="w-9 h-9 rounded-full bg-[#4c0bd1]/20 flex items-center justify-center">
                                                        {React.cloneElement(feature.icon, {
                                                            className: "w-4 h-4 text-[#e43397]",
                                                        })}
                                                    </div>
                                                    <span className="text-base text-gray-200">
                      {feature.text}
                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Ativo Tab Content */}
                            {activeTab === "ativo" && (
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-[#4c0bd1]/20 flex items-center justify-center mr-3">
                                                <Zap className="w-5 h-5 text-[#e43397]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Agente Ativo</h3>
                                        </div>

                                        <p className="text-gray-300 mb-6">
                                            Transforme o agente em um assistente ativo para ações de marketing,
                                            cobrança, engajamento e retenção de clientes.
                                        </p>

                                        <ul className="space-y-3">
                                            {[
                                                "Follow-ups automáticos baseados em gatilhos do CRM e outros sistemas",
                                                "Lembretes personalizados para alunos e parceiros",
                                                "Integração com sistemas internos via API para automação de workflows",
                                                "Ações proativas de engajamento e retenção",
                                                "Campanhas de marketing e vendas automatizadas",
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="space-y-4">
                                            {[
                                                { icon: <Zap />, text: "Follow-ups automáticos" },
                                                { icon: <Building />, text: "Lembretes personalizados" },
                                                { icon: <Settings />, text: "Integração com sistemas" },
                                                { icon: <Users />, text: "Engajamento e retenção" },
                                                { icon: <Rocket />, text: "Marketing automatizado" },
                                            ].map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-4 p-4 rounded-md bg-[#050714] border border-[#0d1042] hover:border-[#4c0bd1]/30 transition-colors duration-300"
                                                >
                                                    <div className="w-9 h-9 rounded-full bg-[#4c0bd1]/20 flex items-center justify-center">
                                                        {React.cloneElement(feature.icon, {
                                                            className: "w-4 h-4 text-[#e43397]",
                                                        })}
                                                    </div>
                                                    <span className="text-base text-gray-200">
                      {feature.text}
                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing - cleaner cards */}
            <section className="py-20 bg-[#050714] relative overflow-hidden" id="precos">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-[#4c0bd1]/3"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                            backgroundImage:
                                "radial-gradient(circle at 30% 30%, rgba(228, 51, 151, 0.05), transparent 50%), radial-gradient(circle at 70% 70%, rgba(76, 11, 209, 0.05), transparent 50%)",
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <Badge className="mb-5 bg-[#4c0bd1]/20 text-[#e43397] hover:bg-[#4c0bd1]/30 border-[#4c0bd1]/40">
                            Investimento
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Planos Flexíveis para Seu Negócio
                        </h2>
                        <p className="text-lg text-gray-300">
                            Escolha o plano ideal para as necessidades do seu negócio, com garantia
                            incondicional de satisfação.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInStagger}
                    >
                        {/* Starter Plan */}
                        <motion.div variants={fadeUpItem}>
                            <Card className="bg-[#040613] border-[#4c0bd1]/20 shadow-lg relative overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-[#4c0bd1]/20 hover:shadow-md h-full">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl text-white">Starter</CardTitle>
                                    <p className="text-gray-400 mt-2 text-sm">
                                        Ideal para empresas menores e volume moderado
                                    </p>
                                    <div className="mt-5 text-2xl font-bold text-white">
                                        R$ 3.799
                                        <span className="text-sm font-normal text-gray-400">/mês</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-3">
                                        Até 10.000 contatos únicos por mês
                                    </p>
                                    <Separator className="my-5 bg-[#4c0bd1]/20" />
                                    <ul className="space-y-3">
                                        {[
                                            "Suporte técnico",
                                            "Atualizações de segurança",
                                            "Personalizações básicas",
                                        ].map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2.5"
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle className="w-4 h-4 text-[#e43397] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-5">
                                    <a
                                        href="https://wa.me/5582998385111?text=Olá,%20estou%20interessado%20no%20plano%20Starter."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-md hover:shadow-[#4c0bd1]/20 border-0 text-white transition-all duration-200">
                                            Escolher Plano
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div variants={fadeUpItem}>
                            <Card className="bg-[#040613] border-[#e43397]/30 shadow-xl relative overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-[#e43397]/20 hover:shadow-md h-full">
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#4c0bd1] to-[#e43397]" />
                                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white text-xs">
                                    Popular
                                </Badge>
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl text-white">Pro</CardTitle>
                                    <p className="text-gray-400 mt-2 text-sm">
                                        Solução escalável para alta demanda
                                    </p>
                                    <div className="mt-5 text-2xl font-bold text-white">
                                        R$ 8.799
                                        <span className="text-sm font-normal text-gray-400">/mês</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-3">
                                        Até 30.000 contatos únicos por mês
                                    </p>
                                    <Separator className="my-5 bg-[#4c0bd1]/20" />
                                    <ul className="space-y-3">
                                        {[
                                            "Todos benefícios do Starter",
                                            "Monitoramento 24/7",
                                            "Relatórios customizados",
                                        ].map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2.5"
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle className="w-4 h-4 text-[#e43397] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-5">
                                    <a
                                        href="https://wa.me/5582998385111?text=Olá,%20estou%20interessado%20no%20plano%20Pro."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-md hover:shadow-[#4c0bd1]/20 border-0 text-white transition-all duration-200">
                                            Escolher Plano
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div variants={fadeUpItem}>
                            <Card className="bg-[#040613] border-[#4c0bd1]/20 shadow-lg relative overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-[#4c0bd1]/20 hover:shadow-md h-full">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl text-white">Enterprise</CardTitle>
                                    <p className="text-gray-400 mt-2 text-sm">
                                        Para necessidades complexas e alto volume
                                    </p>
                                    <div className="mt-5 text-2xl font-bold text-white">
                                        Personalizado
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-3">Sob demanda</p>
                                    <Separator className="my-5 bg-[#4c0bd1]/20" />
                                    <ul className="space-y-3">
                                        {[
                                            "Todos benefícios do Pro",
                                            "SLA diferenciado",
                                            "Consultoria estratégica",
                                        ].map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2.5"
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle className="w-4 h-4 text-[#e43397] flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-5">
                                    <a
                                        href="https://wa.me/5582998385111?text=Olá,%20estou%20interessado%20no%20plano%20Enterprise."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full border border-[#4c0bd1]/60 bg-transparent hover:bg-[#4c0bd1]/5 text-white">
                                            Contato Personalizado
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-12 max-w-3xl mx-auto bg-[#040613] p-6 rounded-lg border border-[#4c0bd1]/20 shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex gap-5 items-start">
                            <div className="relative">
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] opacity-40 blur-sm"
                                    animate={{
                                        scale: [1, 1.15, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    }}
                                />
                                <ShieldCheck className="w-8 h-8 text-white relative" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Garantia incondicional
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    Confiamos plenamente na qualidade do nosso serviço. Por isso, o
                                    pagamento pela implantação e a efetivação do contrato podem ocorrer
                                    após a validação que o Agente de IA atende às expectativas. A partir
                                    do momento da entrega, o cliente tem até 15 dias para avaliar a
                                    solução e decidir se está satisfeito.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ - cleaner UI */}
            <section className="py-20 bg-[#040613]" id="faq">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <Badge className="mb-5 bg-[#4c0bd1]/20 text-[#e43397] hover:bg-[#4c0bd1]/30 border-[#4c0bd1]/40">
                            FAQ
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Dúvidas Frequentes
                        </h2>
                        <p className="text-lg text-gray-300">
                            Encontre respostas para as perguntas mais comuns sobre nossos serviços.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-3xl mx-auto grid gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInStagger}
                    >
                        {[
                            {
                                question: 'O que é um "agente de IA"?',
                                answer:
                                    "Um sistema autônomo que executa tarefas específicas (ex.: atendimento) usando inteligência artificial, integrando-se a APIs e bancos de dados.",
                            },
                            {
                                question: "O agente substitui equipes humanas?",
                                answer:
                                    "Sim. Ele pode assumir e otimizar processos repetitivos, liberando os profissionais para atividades estratégicas.",
                            },
                            {
                                question: "E se o volume de contatos exceder o plano contratado?",
                                answer:
                                    "Oferecemos flexibilidade para migração entre planos e personalização de pacotes.",
                            },
                            {
                                question: "Como funciona o suporte para ajustes pós-implantação?",
                                answer:
                                    "A equipe de sustentação realiza atualizações contínuas e correções conforme demanda.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpItem}
                                whileHover={{
                                    scale: 1.01,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <Card className="bg-[#070920] border-[#4c0bd1]/20 shadow-md hover:border-[#e43397]/30 transition-all duration-200">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div className="relative">
                                                <motion.div
                                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] opacity-40 blur-sm"
                                                    animate={{
                                                        scale: [1, 1.15, 1],
                                                        opacity: [0.2, 0.4, 0.2],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: "loop",
                                                    }}
                                                />
                                                <div className="w-7 h-7 rounded-full bg-[#070920] flex items-center justify-center flex-shrink-0 border border-[#4c0bd1]/20 relative">
                                                    <AlertCircle className="w-3.5 h-3.5 text-[#e43397]" />
                                                </div>
                                            </div>
                                            <CardTitle className="text-base font-medium text-white">
                                                {faq.question}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-400 pl-10 leading-relaxed text-sm">
                                            {faq.answer}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact - cleaner layout */}
            <section
                className="py-20 bg-gradient-to-b from-[#4c0bd1]/70 to-[#050714] relative overflow-hidden"
                id="contato"
            >
                {/* Background pattern - less intense */}
                <div className="absolute inset-0 z-0 opacity-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <defs>
                            <pattern
                                id="dotGrid"
                                width="15"
                                height="15"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="2" cy="2" r="0.5" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dotGrid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                        >
                            <Badge className="mb-5 bg-white/10 text-white hover:bg-white/15 border-white/20">
                                Contato
                            </Badge>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                                Pronto para transformar seu negócio?
                            </h2>
                            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                                Entre em contato conosco via WhatsApp para uma demonstração gratuita
                                e veja como nossos agentes de IA podem ajudar sua empresa.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block"
                            >
                                <a
                                    href="https://wa.me/5582998385111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 rounded-md bg-white text-[#4c0bd1] font-medium hover:shadow-md transition-all duration-200"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="text-base">(82) 99838-5111</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInRight}
                            className="relative"
                        >
                            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-[#4c0bd1]/10 to-[#e43397]/10 blur-lg" />
                            <div className="relative bg-[#070920]/80 p-6 backdrop-blur-sm rounded-lg shadow-lg border border-[#4c0bd1]/10">
                                <div className="w-full h-40 bg-gradient-to-r from-[#4c0bd1]/10 to-[#e43397]/10 rounded-md mb-6 flex items-center justify-center">
                                    <Cpu className="w-12 h-12 text-[#e43397]" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        Um novo nível de atendimento
                                    </h3>
                                    <p className="text-gray-300 mb-5 text-sm">
                                        Nossas soluções impulsionam uma transformação significativa na forma
                                        como sua empresa se comunica com clientes.
                                    </p>
                                    <Badge className="bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white border-0">
                                        Disponível 24/7
                                    </Badge>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer - cleaner */}
            <footer className="bg-[#050714] text-gray-400 py-12 border-t border-[#4c0bd1]/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2.5 mb-5">
                                <ForuxLogo className="h-10" />
                            </div>
                            <p className="mb-5 text-sm">
                                Soluções de IA que transformam negócios, reduzem custos e aumentam a
                                eficiência operacional.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.facebook.com/ForuxDigital/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.instagram.com/foruxdigital/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/forux/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-white font-medium text-base mb-5">Contato</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2.5">
                                    <Phone className="w-4 h-4 text-[#e43397]" />
                                    <a
                                        href="https://wa.me/5582998385111"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        (82) 99838-5111
                                    </a>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <MessageCircle className="w-4 h-4 text-[#e43397]" />
                                    <a
                                        href="mailto:contato@forux.io"
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        contato@forux.io
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-[#4c0bd1]/10 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Forux Digital. Todos os direitos
                            reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Page;