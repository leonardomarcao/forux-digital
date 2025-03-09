// ignore_for_file: all

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
    Menu,
    MessageCircle,
    Phone,
    Rocket,
    Settings,
    ShieldCheck,
    Users,
    X,
    Zap,
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

// Import for animations
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
    const [activeTab, setActiveTab] = useState("receptivo");
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cookieConsent, setCookieConsent] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Mount state for client-side rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    // Control header transparency on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolledToTop(window.scrollY < 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                duration: 0.5
            }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                duration: 0.5
            }
        }
    };

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    // Create static particle positions instead of using Math.random() for hydration
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        top: `${(i * 5) % 100}%`,
        left: `${(i * 7) % 100}%`,
        delay: i * 0.25,
        duration: 5 + (i % 5),
    }));

    // If not mounted yet (server-side), return a simple loading state
    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#121640] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#4c0bd1] border-t-[#e43397] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0c0d28] to-[#090b1f] text-gray-200">
            {/* Back to top button */}
            <AnimatePresence>
                {!scrolledToTop && (
                    <motion.div
                        className="fixed bottom-8 right-8 z-50"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            className="w-12 h-12 rounded-full bg-[#4c0bd1] hover:bg-[#3a09a0] shadow-lg shadow-[#4c0bd1]/30"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <ArrowUp className="h-5 w-5" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <header
                className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
                    scrolledToTop
                        ? "bg-transparent border-transparent backdrop-blur-none"
                        : "border-[#4c0bd1]/20 bg-[#0a0c24]/90 backdrop-blur-md"
                }`}
            >
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative h-10 w-10">
                            <img src="/forux.svg" alt="Forux Digital Logo" className="relative h-10" />
                        </div>
                        <span className="font-semibold text-xl text-white">
              Forux Digital
            </span>
                    </motion.div>

                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                    >
                        <a
                            href="https://wa.me/5582998385111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white font-medium hover:shadow-lg hover:shadow-[#4c0bd1]/30 transition-all duration-300 transform hover:scale-105"
                        >
                            <Phone className="w-4 h-4" />
                            Fale Conosco
                        </a>
                    </motion.div>

                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden bg-[#0a0c24] border-t border-[#4c0bd1]/20"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                                <a
                                    href="#solucoes"
                                    className="text-gray-300 hover:text-[#e43397] font-medium transition duration-200 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Soluções
                                </a>
                                <a
                                    href="#precos"
                                    className="text-gray-300 hover:text-[#e43397] font-medium transition duration-200 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Preços
                                </a>
                                <a
                                    href="#faq"
                                    className="text-gray-300 hover:text-[#e43397] font-medium transition duration-200 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    FAQ
                                </a>
                                <a
                                    href="#contato"
                                    className="text-gray-300 hover:text-[#e43397] font-medium transition duration-200 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contato
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero Section */}
            <section className="pt-28 pb-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#080a1f] z-0">
                    {/* Animated background gradients */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4c0bd1] opacity-10 blur-[120px]"
                        animate={{
                            x: [0, 30, 0],
                            y: [0, 20, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                    <motion.div
                        className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#e43397] opacity-10 blur-[120px]"
                        animate={{
                            x: [0, -20, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                    <div className="absolute inset-0 bg-[#080a1f]/60 backdrop-blur-sm z-1"></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <motion.div variants={item}>
                                <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 backdrop-blur-sm border-[#4c0bd1]">
                                    Inovação em IA
                                </Badge>
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8"
                                variants={item}
                            >
                                Agentes de IA e{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4c0bd1] to-[#e43397]">
                  Automações
                </span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-300 mb-10 leading-relaxed"
                                variants={item}
                            >
                                Escale sua receita enquanto reduz custos operacionais com nossos
                                agentes de IA que funcionam 24/7 sem custos trabalhistas.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-5"
                                variants={item}
                            >
                                <a
                                    href="https://wa.me/5582998385111?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="lg" className="bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-lg hover:shadow-[#4c0bd1]/30 border-0 text-white transition-all duration-300 transform hover:scale-105">
                                        Agendar Demonstração
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[#4c0bd1] text-[#e43397] hover:bg-[#4c0bd1]/10 hover:text-white transition-all duration-300"
                                >
                                    Saiba Mais
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={slideInRight}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4c0bd1]/20 to-[#e43397]/20 rounded-2xl blur-xl transform -rotate-2 scale-105"></div>
                            <motion.div
                                className="bg-[#0a0c24]/90 p-6 rounded-2xl shadow-xl border border-[#4c0bd1]/30 backdrop-blur-sm relative"
                                animate={{
                                    boxShadow: ['0 0 0 rgba(76, 11, 209, 0.3)', '0 0 20px rgba(76, 11, 209, 0.4)', '0 0 0 rgba(76, 11, 209, 0.3)']
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            >
                                <motion.div
                                    className="bg-[#0c0f28]/60 p-6 rounded-xl border border-[#4c0bd1]/30 flex items-start gap-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#4c0bd1] flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="space-y-3">
                                        <p className="font-medium text-gray-300">Cliente</p>
                                        <div className="bg-[#080a1f]/70 p-3 rounded-lg border border-[#4c0bd1]/20">
                                            Olá, gostaria de informações sobre seus serviços de automação.
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="my-4 border-l-2 border-dashed border-[#4c0bd1]/50 ml-10 pl-8 py-2"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <motion.div
                                        className="w-6 h-6 bg-[#0c0f28] rounded-full flex items-center justify-center"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    >
                                        <Cpu className="w-3 h-3 text-[#e43397]" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="bg-[#0c0f28]/60 p-6 rounded-xl border border-[#4c0bd1]/30 flex items-start gap-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#e43397] flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="space-y-3">
                                        <p className="font-medium text-gray-300">Agente de IA</p>
                                        <div className="bg-[#080a1f]/70 p-3 rounded-lg border border-[#e43397]/20">
                                            Olá! Sou o assistente virtual da Forux Digital. Temos soluções de
                                            automação com IA para atendimento, vendas e CRM. Como posso ajudar
                                            sua empresa hoje?
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Typing indicator */}
                                <motion.div
                                    className="flex space-x-2 justify-end mt-4 pr-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-[#e43397]"
                                            animate={{
                                                y: [0, -5, 0],
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                delay: i * 0.2
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="hidden md:block">
                    <motion.div
                        className="absolute bottom-10 left-10 w-24 h-24 border border-[#4c0bd1]/30 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                    <motion.div
                        className="absolute top-20 right-20 w-16 h-16 border border-[#e43397]/30 rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-[#060818]" id="como-funciona">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 border-[#4c0bd1]/50">
                            Como Funciona
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Implantação em 3 Etapas Simples
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nosso processo de implementação foi desenhado para ser eficiente e
                            não-intrusivo, permitindo que você veja resultados rapidamente
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerChildren}
                    >
                        {[
                            {
                                step: 1,
                                title: "Diagnóstico e Planejamento",
                                description:
                                    "Nossa equipe realiza uma análise detalhada dos processos atuais da sua empresa para identificar oportunidades de automação",
                                icon: <Settings className="w-8 h-8 text-[#e43397]" />,
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
                                    "Configuramos e treinamos os agentes de IA com base nas necessidades específicas e na identidade da sua empresa",
                                icon: <Cpu className="w-8 h-8 text-[#e43397]" />,
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
                                    "Implementamos a solução com acompanhamento contínuo para garantir que os resultados esperados sejam alcançados",
                                icon: <Rocket className="w-8 h-8 text-[#e43397]" />,
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
                                variants={item}
                            >
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <motion.div
                                        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] flex items-center justify-center border-4 border-[#060818]"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <span className="text-xl font-bold text-white">{step.step}</span>
                                    </motion.div>
                                </div>
                                {index < 2 && (
                                    <div className="absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hidden md:block"></div>
                                )}
                                <Card className="bg-[#0a0c24] border-[#4c0bd1]/30 shadow-lg h-full mt-7 overflow-hidden hover:border-[#e43397]/70 transition-all duration-500 hover:shadow-[#4c0bd1]/20 hover:shadow-xl">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col items-center text-center mb-4">
                                            <motion.div
                                                className="p-3 rounded-xl bg-[#4c0bd1]/20 mb-4"
                                                whileHover={{ rotate: 5, scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                {step.icon}
                                            </motion.div>
                                            <CardTitle className="text-xl font-semibold text-white">
                                                {step.title}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="text-gray-300 text-center">
                                            {step.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 mt-4">
                                            {step.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0 mt-0.5" />
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

            {/* Stats */}
            <section className="py-20 bg-[#0a0c24] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#4c0bd1]/5 z-0"></div>

                {/* Animated particles */}
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#e43397]/30"
                        style={{
                            top: particle.top,
                            left: particle.left,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: particle.delay
                        }}
                    />
                ))}

                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#060818] to-transparent z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 border-[#4c0bd1]/50">
                            Resultados
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Impacto Mensurável para Seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nossos clientes têm obtido resultados expressivos com nossas soluções
                            de automação inteligente
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerChildren}
                    >
                        {[
                            {
                                value: "70%",
                                label: "Redução de custos operacionais",
                                icon: <Zap className="w-6 h-6 text-[#e43397]" />,
                            },
                            {
                                value: "24/7",
                                label: "Disponibilidade para atendimento",
                                icon: <Cpu className="w-6 h-6 text-[#4c0bd1]" />,
                            },
                            {
                                value: "85%",
                                label: "Taxa de resolução sem intervenção humana",
                                icon: <CheckCircle className="w-6 h-6 text-[#e43397]" />,
                            },
                            {
                                value: "10x",
                                label: "Mais clientes atendidos simultaneamente",
                                icon: <Users className="w-6 h-6 text-[#4c0bd1]" />,
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                            >
                                <Card className="bg-[#0a0c24]/50 backdrop-blur-sm border-[#4c0bd1]/30 shadow-lg overflow-hidden hover:border-[#e43397]/50 transition-all duration-300 transform hover:scale-105">
                                    <CardContent className="p-8">
                                        <div className="flex flex-col items-center text-center">
                                            <motion.div
                                                className="p-3 rounded-full bg-[#080a1f]/80 mb-6 border border-[#4c0bd1]/30"
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                            >
                                                {stat.icon}
                                            </motion.div>
                                            <motion.div
                                                className="text-4xl md:text-5xl font-bold text-white mb-3"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                    type: "spring",
                                                    stiffness: 100
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                {stat.value}
                                            </motion.div>
                                            <p className="text-gray-300">{stat.label}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partners & Integrations */}
            <section className="py-20 bg-[#060818] relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-b from-[#0a0c24] to-transparent"></div>
                    <svg className="absolute -bottom-1/2 -left-1/4 w-full h-full text-[#4c0bd1]/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                        <path fill="currentColor" d="M0,0 L800,0 L800,800 L0,800 Z" />
                        <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,400 L800,400 M400,0 L400,800" />
                        {Array.from({ length: 10 }).map((_, i) => (
                            <circle key={i} fill="none" stroke="currentColor" strokeWidth="1"
                                    cx="400" cy="400" r={50 * (i + 1)} />
                        ))}
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 border-[#4c0bd1]/50">
                            Integrações
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Compatível com Seus Sistemas
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nossa tecnologia integra-se perfeitamente com as principais plataformas e
                            serviços do mercado
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeIn}
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
                                    className="border-[#4c0bd1]/30 overflow-hidden"
                                >
                                    <AccordionTrigger className="text-white hover:text-[#e43397] py-5 group">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#e43397] group-hover:scale-150 transition-all duration-300"></div>
                                            {category.title}
                                        </motion.div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <motion.div
                                            className="py-4 space-y-4"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-gray-300">{category.description}</p>
                                            <div className="flex flex-wrap gap-3 pt-2">
                                                {category.platforms.map((platform, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                    >
                                                        <Badge className="bg-[#0a0c24] hover:bg-[#4c0bd1]/70 text-gray-300 hover:text-white border border-[#4c0bd1]/30 hover:border-[#e43397] transition-all duration-300">
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

                    <div className="flex justify-center mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button className="bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-lg hover:shadow-[#4c0bd1]/30 border-0 text-white transition-all duration-300 transform hover:scale-105">
                                Consultar Integrações Específicas
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c24] to-[#4c0bd1]/80 z-0"></div>

                {/* Animated pattern */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 800">
                        <defs>
                            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Animated circles */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/5 border border-white/10"
                        style={{
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            top: '50%',
                            left: '50%',
                            marginLeft: `-${(100 + i * 50) / 2}px`,
                            marginTop: `-${(100 + i * 50) / 2}px`,
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.3, 0.4, 0.3],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: i * 0.5
                        }}
                    />
                ))}

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Pronto para automatizar com inteligência?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                            Comece hoje mesmo e transforme a maneira como sua empresa se comunica e opera
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="https://wa.me/5582998385111?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white font-medium shadow-lg shadow-[#4c0bd1]/30 transition-all duration-300"
                                >
                                    <Phone className="w-5 h-5" />
                                    Falar pelo WhatsApp
                                </a>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 px-8"
                                >
                                    Conhecer Planos
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 bg-[#060818]" id="solucoes">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 border-[#4c0bd1]/50">
                            Nossas Soluções
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Soluções Inteligentes para Seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nossos agentes de IA são projetados para escalar sua operação e reduzir
                            custos, mantendo a qualidade de atendimento.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={scaleUp}
                    >
                        <Tabs
                            defaultValue="receptivo"
                            value={activeTab}
                            onValueChange={setActiveTab}
                            className="relative"
                        >
                            <TabsList className="grid w-full grid-cols-2 mb-10 bg-[#0a0c24] rounded-full p-1 border border-[#4c0bd1]/30">
                                <motion.div
                                    className="absolute inset-y-1 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] z-0 transition-all duration-300 shadow-lg"
                                    style={{
                                        width: "calc(50% - 0.5rem)",
                                        left: activeTab === "receptivo" ? "0.25rem" : "calc(50% + 0.25rem)",
                                    }}
                                    layout
                                />
                                <TabsTrigger
                                    value="receptivo"
                                    className={`relative z-10 rounded-full ${
                                        activeTab === "receptivo"
                                            ? "text-white"
                                            : "text-gray-400"
                                    }`}
                                >
                                    Agente Receptivo
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ativo"
                                    className={`relative z-10 rounded-full ${
                                        activeTab === "ativo"
                                            ? "text-white"
                                            : "text-gray-400"
                                    }`}
                                >
                                    Agente Ativo
                                </TabsTrigger>
                            </TabsList>

                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#4c0bd1]/20 to-[#e43397]/20 blur-xl"></div>
                                <TabsContent
                                    value="receptivo"
                                    className="relative bg-[#0a0c24] p-8 rounded-2xl border border-[#4c0bd1]/30 shadow-xl"
                                >
                                    <motion.div
                                        className="grid md:grid-cols-2 gap-10 items-center"
                                        initial="hidden"
                                        animate="visible"
                                        variants={staggerChildren}
                                        key="receptivo"
                                    >
                                        <motion.div variants={slideInLeft}>
                                            <h3 className="text-2xl font-bold text-white mb-6">
                                                Agente Receptivo
                                            </h3>
                                            <p className="text-gray-300 mb-8 leading-relaxed">
                                                Clone seu melhor atendente para operar no WhatsApp e outros
                                                canais, garantindo eficiência e qualidade em atendimentos
                                                receptivos.
                                            </p>
                                            <ul className="space-y-4">
                                                {[
                                                    "Atendimento automático via WhatsApp (texto, áudio, imagens)",
                                                    "Qualificação de leads, resolução de dúvidas e coleta de dados",
                                                    "Integração com CRM via API para consulta e registro",
                                                    "Envio de e-mails, gestão de calendários e documentos",
                                                    "Escalabilidade ilimitada: atende qualquer volume de contatos simultâneos",
                                                ].map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-start gap-3"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-300">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                        <motion.div variants={slideInRight}>
                                            <div className="bg-[#060818]/70 p-6 rounded-xl shadow-md border border-[#4c0bd1]/30">
                                                <div className="space-y-5">
                                                    {[
                                                        { icon: <MessageCircle />, text: "Atendimento automatizado" },
                                                        { icon: <Users />, text: "Qualificação de leads" },
                                                        { icon: <Database />, text: "Integração com CRM" },
                                                        { icon: <FileText />, text: "Gestão de documentos" },
                                                        { icon: <Rocket />, text: "Escalabilidade ilimitada" },
                                                    ].map((item, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 + i * 0.1 }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                            className={`flex items-center gap-3 p-4 rounded-lg border border-[#4c0bd1]/30 bg-gradient-to-r from-[#0a0c24] to-[#0a0c24]/60`}
                                                        >
                                                            <div className="w-8 h-8 rounded-full bg-[#4c0bd1]/30 flex items-center justify-center">
                                                                {React.cloneElement(item.icon, { className: "w-4 h-4 text-[#e43397]" })}
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-300">
                                {item.text}
                              </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </TabsContent>

                                <TabsContent
                                    value="ativo"
                                    className="relative bg-[#0a0c24] p-8 rounded-2xl border border-[#4c0bd1]/30 shadow-xl"
                                >
                                    <motion.div
                                        className="grid md:grid-cols-2 gap-10 items-center"
                                        initial="hidden"
                                        animate="visible"
                                        variants={staggerChildren}
                                        key="ativo"
                                    >
                                        <motion.div variants={slideInLeft}>
                                            <h3 className="text-2xl font-bold text-white mb-6">
                                                Agente Ativo
                                            </h3>
                                            <p className="text-gray-300 mb-8 leading-relaxed">
                                                Transforme o agente em um assistente ativo para ações de marketing,
                                                cobrança, engajamento e retenção de clientes.
                                            </p>
                                            <ul className="space-y-4">
                                                {[
                                                    "Follow-ups automáticos baseados em gatilhos do CRM e outros sistemas",
                                                    "Lembretes personalizados para alunos e parceiros",
                                                    "Integração com sistemas internos via API para automação de workflows",
                                                    "Ações proativas de engajamento e retenção",
                                                    "Campanhas de marketing e vendas automatizadas",
                                                ].map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-start gap-3"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-300">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                        <motion.div variants={slideInRight}>
                                            <div className="bg-[#060818]/70 p-6 rounded-xl shadow-md border border-[#4c0bd1]/30">
                                                <div className="space-y-5">
                                                    {[
                                                        { icon: <Zap />, text: "Follow-ups automáticos" },
                                                        { icon: <Building />, text: "Lembretes personalizados" },
                                                        { icon: <Settings />, text: "Integração com sistemas" },
                                                        { icon: <Users />, text: "Engajamento e retenção" },
                                                        { icon: <Rocket />, text: "Marketing automatizado" },
                                                    ].map((item, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 + i * 0.1 }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                            className={`flex items-center gap-3 p-4 rounded-lg border border-[#4c0bd1]/30 bg-gradient-to-r from-[#0a0c24] to-[#0a0c24]/60`}
                                                        >
                                                            <div className="w-8 h-8 rounded-full bg-[#4c0bd1]/30 flex items-center justify-center">
                                                                {React.cloneElement(item.icon, { className: "w-4 h-4 text-[#e43397]" })}
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-300">
                                {item.text}
                              </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </motion.div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-[#0a0c24] relative overflow-hidden" id="precos">
                {/* Animated gradient background */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-[#4c0bd1]/5"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(228, 51, 151, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(76, 11, 209, 0.1), transparent 50%)"
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 border-[#4c0bd1]/50">
                            Investimento
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Planos Flexíveis para Seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300">
                            Escolha o plano ideal para as necessidades do seu negócio, com garantia
                            incondicional de satisfação.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerChildren}
                    >
                        {/* Starter Plan */}
                        <motion.div variants={item}>
                            <Card className="bg-[#060818] border-[#4c0bd1]/30 shadow-xl relative overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-[#4c0bd1]/30 hover:shadow-xl h-full">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl text-white">Starter</CardTitle>
                                    <p className="text-gray-400 mt-2">
                                        Ideal para empresas menores e volume moderado
                                    </p>
                                    <div className="mt-6 text-3xl font-bold text-white">
                                        R$ 3.799
                                        <span className="text-sm font-normal text-gray-400">/mês</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-4">
                                        Até 10.000 contatos únicos por mês
                                    </p>
                                    <Separator className="my-6 bg-[#4c0bd1]/30" />
                                    <ul className="space-y-4">
                                        {[
                                            "Suporte técnico",
                                            "Atualizações de segurança",
                                            "Personalizações básicas"
                                        ].map(
                                            (feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <a
                                        href="https://wa.me/5582998385111?text=Olá,%20estou%20interessado%20no%20plano%20Starter."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-lg hover:shadow-[#4c0bd1]/30 border-0 text-white transition-all duration-300">
                                            Escolher Plano
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div variants={item}>
                            <Card className="bg-[#060818] border-[#e43397]/50 shadow-2xl relative overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-[#e43397]/30 hover:shadow-xl h-full">
                                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#4c0bd1] to-[#e43397]"></div>
                                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#4c0bd1] to-[#e43397] text-white">
                                    Popular
                                </Badge>
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl text-white">Pro</CardTitle>
                                    <p className="text-gray-400 mt-2">
                                        Solução escalável para alta demanda
                                    </p>
                                    <div className="mt-6 text-3xl font-bold text-white">
                                        R$ 8.799
                                        <span className="text-sm font-normal text-gray-400">/mês</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-4">
                                        Até 30.000 contatos únicos por mês
                                    </p>
                                    <Separator className="my-6 bg-[#4c0bd1]/30" />
                                    <ul className="space-y-4">
                                        {[
                                            "Todos benefícios do Starter",
                                            "Monitoramento 24/7",
                                            "Relatórios customizados",
                                        ].map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-3"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <a
                                        href="https://wa.me/5582998385111?text=Olá,%20estou%20interessado%20no%20plano%20Pro."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] hover:shadow-lg hover:shadow-[#4c0bd1]/30 border-0 text-white transition-all duration-300">
                                            Escolher Plano
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div variants={item}>
                            <Card className="bg-[#060818] border-[#4c0bd1]/30 shadow-xl relative overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-[#4c0bd1]/30 hover:shadow-xl h-full">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl text-white">Enterprise</CardTitle>
                                    <p className="text-gray-400 mt-2">
                                        Para necessidades complexas e alto volume
                                    </p>
                                    <div className="mt-6 text-3xl font-bold text-white">Personalizado</div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-4">Sob demanda</p>
                                    <Separator className="my-6 bg-[#4c0bd1]/30" />
                                    <ul className="space-y-4">
                                        {[
                                            "Todos benefícios do Pro",
                                            "SLA diferenciado",
                                            "Consultoria estratégica",
                                        ].map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-3"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-[#e43397] flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <a
                                        href="https://wa.me/5582998385111?text=Olá,%20estou%20interessado%20no%20plano%20Enterprise."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full border border-[#4c0bd1] bg-transparent hover:bg-[#4c0bd1]/10 text-white">
                                            Contato Personalizado
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-16 max-w-3xl mx-auto bg-[#060818] p-8 rounded-xl border border-[#4c0bd1]/30 shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex gap-6 items-start">
                            <div className="relative">
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] opacity-50 blur-sm"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                />
                                <ShieldCheck className="w-10 h-10 text-white relative" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Garantia incondicional
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Confiamos plenamente na qualidade do nosso serviço. Por isso, o pagamento pela implantação e a efetivação do contrato podem ocorrer após a validação que o Agente de IA atende às expectativas. A partir do momento da entrega, o cliente tem até 15 dias para avaliar a solução e decidir se está satisfeito.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-[#060818]" id="faq">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Badge className="mb-6 bg-[#4c0bd1]/30 text-[#e43397] hover:bg-[#4c0bd1]/40 border-[#4c0bd1]/50">
                            FAQ
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Dúvidas Frequentes
                        </h2>
                        <p className="text-xl text-gray-300">
                            Encontre respostas para as perguntas mais comuns sobre nossos serviços
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-3xl mx-auto grid gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerChildren}
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
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={item as any}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Card
                                    className="bg-[#0a0c24] border-[#4c0bd1]/30 shadow-lg hover:border-[#e43397]/50 transition-all duration-300"
                                >
                                    <CardHeader>
                                        <div className="flex items-start gap-5">
                                            <div className="relative">
                                                <motion.div
                                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4c0bd1] to-[#e43397] opacity-50 blur-sm"
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.3, 0.5, 0.3]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: "loop"
                                                    }}
                                                />
                                                <div className="w-8 h-8 rounded-full bg-[#0a0c24] flex items-center justify-center flex-shrink-0 border border-[#4c0bd1]/30 relative">
                                                    <AlertCircle className="w-4 h-4 text-[#e43397]" />
                                                </div>
                                            </div>
                                            <CardTitle className="text-lg font-medium text-white">
                                                {item.question}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300 pl-12 leading-relaxed">{item.answer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-20 bg-gradient-to-b from-[#4c0bd1]/80 to-[#0a0c24] relative overflow-hidden" id="contato">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <defs>
                            <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dotGrid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                        >
                            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border-white/30">
                                Contato
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Pronto para transformar seu negócio?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                                Entre em contato conosco via WhatsApp para uma demonstração gratuita e veja como nossos
                                agentes de IA podem ajudar sua empresa.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <a
                                    href="https://wa.me/5582998385111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#4c0bd1] font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="text-lg">(82) 99838-5111</span>
                                </a>
                            </motion.div>

                            <div className="mt-10">
                                <p className="text-white/80 mb-4">Ou nos encontre nas redes sociais:</p>
                                <div className="flex items-center gap-6">
                                    {[
                                        { icon: <Facebook className="w-5 h-5" />, label: "Facebook", url: "https://facebook.com" },
                                        { icon: <Instagram className="w-5 h-5" />, label: "Instagram", url: "https://instagram.com" },
                                        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com" },
                                    ].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -5 }}
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInRight}
                            className="relative"
                        >
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#4c0bd1]/20 to-[#e43397]/20 blur-xl"></div>
                            <div className="relative bg-[#0a0c24]/80 p-8 backdrop-blur-sm rounded-xl shadow-2xl border border-[#4c0bd1]/20">
                                <div className="w-full h-48 bg-gradient-to-r from-[#4c0bd1]/20 to-[#e43397]/20 rounded-lg mb-8 flex items-center justify-center">
                                    <Cpu className="w-16 h-16 text-[#e43397]" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Um novo nível de atendimento
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Nossas soluções impulsionam uma transformação significativa na forma como sua empresa se comunica com clientes.
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

            {/* Footer */}
            <footer className="bg-[#0a0c24] text-gray-400 py-16 border-t border-[#4c0bd1]/20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative h-10 w-10">
                                    <img src="/forux.svg" alt="Forux Digital Logo" className="relative h-10" />
                                </div>
                                <span className="font-semibold text-xl text-white">Forux Digital</span>
                            </div>
                            <p className="mb-6">
                                Soluções de IA que transformam negócios, reduzem custos e aumentam a eficiência operacional.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.facebook.com/ForuxDigital/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/foruxdigital/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/forux/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-white font-medium text-lg mb-6">Contato</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#e43397]" />
                                    <a
                                        href="https://wa.me/5582998385111"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        (82) 99838-5111
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MessageCircle className="w-5 h-5 text-[#e43397]" />
                                    <a
                                        href="mailto:contato@forux.io"
                                        className="hover:text-white transition-colors"
                                    >
                                        contato@forux.io
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                    </div>

                    <div className="mt-16 pt-8 border-t border-[#4c0bd1]/20 flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Forux Digital. Todos os direitos reservados.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">
                                Termos de Uso
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Page;