"use client";

import React, { useState } from "react";
import {
    AlertCircle,
    ArrowUp,
    Building,
    CheckCircle,
    ChevronRight,
    Clock,
    Cpu,
    Database,
    ExternalLink,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
    const [activeTab, setActiveTab] = useState("receptivo");
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [cookieConsent, setCookieConsent] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-200">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/forux.svg" alt="Forux Digital Logo" className="h-10" />
                        <span className="font-semibold text-xl text-white">
              Forux Digital
            </span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#solucoes"
                            className="text-gray-400 hover:text-blue-400 font-medium transition duration-200"
                        >
                            Soluções
                        </a>
                        <a
                            href="#precos"
                            className="text-gray-400 hover:text-blue-400 font-medium transition duration-200"
                        >
                            Preços
                        </a>
                        <a
                            href="#faq"
                            className="text-gray-400 hover:text-blue-400 font-medium transition duration-200"
                        >
                            FAQ
                        </a>
                        <a
                            href="#contato"
                            className="text-gray-400 hover:text-blue-400 font-medium transition duration-200"
                        >
                            Contato
                        </a>
                    </nav>
                    <Button className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 hover:bg-blue-700">
                        Fale Conosco
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-24 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 z-0"></div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 backdrop-blur-sm border-blue-700">
                                Inovação em IA
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                                Agentes de IA e{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Automações
                </span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                                Escale sua receita enquanto reduz custos operacionais com nossos
                                agentes de IA que funcionam 24/7 sem custos trabalhistas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Agendar Demonstração
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-blue-600 text-blue-400 hover:bg-blue-900/20 hover:text-white"
                                >
                                    Saiba Mais
                                </Button>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">
                                    <span className="font-bold text-blue-400">+50 empresas</span> já
                                    transformaram seus processos
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
                            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <div className="space-y-3">
                                    <p className="font-medium text-gray-300">Cliente</p>
                                    <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                                        Olá, gostaria de informações sobre seus serviços de automação.
                                    </div>
                                </div>
                            </div>
                            <div className="my-4 border-l-2 border-dashed border-gray-700 ml-10 pl-8 py-2">
                                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                    <Cpu className="w-3 h-3 text-gray-400" />
                                </div>
                            </div>
                            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <Cpu className="w-5 h-5 text-white" />
                                </div>
                                <div className="space-y-3">
                                    <p className="font-medium text-gray-300">Agente de IA</p>
                                    <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                                        Olá! Sou o assistente virtual da Forux Digital. Temos soluções de
                                        automação com IA para atendimento, vendas e CRM. Como posso ajudar
                                        sua empresa hoje?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-900" id="como-funciona">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 border-blue-700">
                            Como Funciona
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Implantação em 3 Etapas Simples
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nosso processo de implementação foi desenhado para ser eficiente e
                            não-intrusivo, permitindo que você veja resultados rapidamente
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                step: 1,
                                title: "Diagnóstico e Planejamento",
                                description:
                                    "Nossa equipe realiza uma análise detalhada dos processos atuais da sua empresa para identificar oportunidades de automação",
                                icon: <Settings className="w-8 h-8 text-blue-400" />,
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
                                icon: <Cpu className="w-8 h-8 text-indigo-400" />,
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
                                icon: <Rocket className="w-8 h-8 text-green-400" />,
                                items: [
                                    "Lançamento controlado",
                                    "Acompanhamento de métricas em tempo real",
                                    "Ajustes e otimizações contínuas",
                                    "Relatórios periódicos de desempenho",
                                ],
                            },
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="w-14 h-14 rounded-full bg-blue-900/70 flex items-center justify-center border-4 border-gray-900">
                                        <span className="text-xl font-bold text-white">{step.step}</span>
                                    </div>
                                </div>
                                {index < 2 && (
                                    <div className="absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-500 to-blue-900 hidden md:block"></div>
                                )}
                                <Card className="bg-gray-800 border-gray-700 shadow-lg h-full mt-7 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col items-center text-center mb-4">
                                            <div className="p-3 rounded-xl bg-blue-900/20 mb-4">
                                                {step.icon}
                                            </div>
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
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gray-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-900 to-transparent z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 border-blue-700">
                            Resultados
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Impacto Mensurável para Seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nossos clientes têm obtido resultados expressivos com nossas soluções
                            de automação inteligente
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                value: "70%",
                                label: "Redução de custos operacionais",
                                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                            },
                            {
                                value: "24/7",
                                label: "Disponibilidade para atendimento",
                                icon: <Clock className="w-6 h-6 text-blue-400" />,
                            },
                            {
                                value: "85%",
                                label: "Taxa de resolução sem intervenção humana",
                                icon: <CheckCircle className="w-6 h-6 text-green-400" />,
                            },
                            {
                                value: "10x",
                                label: "Mais clientes atendidos simultaneamente",
                                icon: <Users className="w-6 h-6 text-indigo-400" />,
                            },
                        ].map((stat, index) => (
                            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg overflow-hidden hover:border-gray-600 transition-all duration-300">
                                <CardContent className="p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-3 rounded-full bg-gray-900/50 mb-6 border border-gray-700">
                                            {stat.icon}
                                        </div>
                                        <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                                            {stat.value}
                                        </div>
                                        <p className="text-gray-300">{stat.label}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners & Integrations */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 border-blue-700">
                            Integrações
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Compatível com Seus Sistemas
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nossa tecnologia integra-se perfeitamente com as principais plataformas e
                            serviços do mercado
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
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
                                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                                    <AccordionTrigger className="text-white hover:text-blue-400 py-5">
                                        {category.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="py-4 space-y-4">
                                            <p className="text-gray-300">{category.description}</p>
                                            <div className="flex flex-wrap gap-3 pt-2">
                                                {category.platforms.map((platform, i) => (
                                                    <Badge key={i} className="bg-gray-800 hover:bg-gray-700 text-gray-300">
                                                        {platform}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Consultar Integrações Específicas
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Pronto para automatizar com inteligência?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Comece hoje mesmo e transforme a maneira como sua empresa se comunica e opera
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Agendar Demonstração
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-600 text-blue-400 hover:bg-blue-900/20 hover:text-white"
                        >
                            Conhecer Planos
                        </Button>
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 bg-gray-900" id="solucoes">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 border-blue-700">
                            Nossas Soluções
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Soluções Inteligentes para Seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300">
                            Nossos agentes de IA são projetados para escalar sua operação e reduzir
                            custos, mantendo a qualidade de atendimento.
                        </p>
                    </div>

                    <Tabs
                        defaultValue="receptivo"
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="max-w-4xl mx-auto"
                    >
                        <TabsList className="grid w-full grid-cols-2 mb-10 bg-gray-800">
                            <TabsTrigger
                                value="receptivo"
                                className={
                                    activeTab === "receptivo"
                                        ? "text-white data-[state=active]:bg-white border-r border-gray-700 md:border-r-0"
                                        : "text-gray-400"
                                }
                            >
                                Agente Receptivo
                            </TabsTrigger>
                            <TabsTrigger
                                value="ativo"
                                className={
                                    activeTab === "ativo"
                                        ? "text-white data-[state=active]:bg-white border-r border-gray-700 md:border-r-0"
                                        : "text-gray-400"
                                }
                            >
                                Agente Ativo
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent
                            value="receptivo"
                            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
                        >
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div>
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
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-900/70 p-6 rounded-xl shadow-md border border-gray-700">
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-3 p-4 bg-blue-900/30 rounded-lg border border-blue-900/50">
                                            <MessageCircle className="w-5 h-5 text-blue-400" />
                                            <span className="text-sm font-medium text-blue-300">
                        Atendimento automatizado
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-green-900/30 rounded-lg border border-green-900/50">
                                            <Users className="w-5 h-5 text-green-400" />
                                            <span className="text-sm font-medium text-green-300">
                        Qualificação de leads
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-purple-900/30 rounded-lg border border-purple-900/50">
                                            <Database className="w-5 h-5 text-purple-400" />
                                            <span className="text-sm font-medium text-purple-300">
                        Integração com CRM
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-orange-900/30 rounded-lg border border-orange-900/50">
                                            <FileText className="w-5 h-5 text-orange-400" />
                                            <span className="text-sm font-medium text-orange-300">
                        Gestão de documentos
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-red-900/30 rounded-lg border border-red-900/50">
                                            <Rocket className="w-5 h-5 text-red-400" />
                                            <span className="text-sm font-medium text-red-300">
                        Escalabilidade ilimitada
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="ativo"
                            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
                        >
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div>
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
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-900/70 p-6 rounded-xl shadow-md border border-gray-700">
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-3 p-4 bg-indigo-900/30 rounded-lg border border-indigo-900/50">
                                            <Clock className="w-5 h-5 text-indigo-400" />
                                            <span className="text-sm font-medium text-indigo-300">
                        Follow-ups automáticos
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-pink-900/30 rounded-lg border border-pink-900/50">
                                            <Building className="w-5 h-5 text-pink-400" />
                                            <span className="text-sm font-medium text-pink-300">
                        Lembretes personalizados
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-yellow-900/30 rounded-lg border border-yellow-900/50">
                                            <Settings className="w-5 h-5 text-yellow-400" />
                                            <span className="text-sm font-medium text-yellow-300">
                        Integração com sistemas
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-cyan-900/30 rounded-lg border border-cyan-900/50">
                                            <Users className="w-5 h-5 text-cyan-400" />
                                            <span className="text-sm font-medium text-cyan-300">
                        Engajamento e retenção
                      </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-emerald-900/30 rounded-lg border border-emerald-900/50">
                                            <Zap className="w-5 h-5 text-emerald-400" />
                                            <span className="text-sm font-medium text-emerald-300">
                        Marketing automatizado
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gray-950" id="precos">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 border-blue-700">
                            Investimento
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Planos Flexíveis para Seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300">
                            Escolha o plano ideal para as necessidades do seu negócio, com garantia
                            incondicional de satisfação.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter Plan */}
                        <Card className="bg-gray-800 border-gray-700 shadow-xl relative overflow-hidden transform transition duration-300 hover:scale-105">
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
                                <Separator className="my-6 bg-gray-700" />
                                <ul className="space-y-4">
                                    {["Suporte técnico", "Atualizações de segurança", "Personalizações básicas"].map(
                                        (feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-6">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    Escolher Plano
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Pro Plan */}
                        <Card className="bg-gray-800 border-blue-700 shadow-2xl relative overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="absolute top-0 inset-x-0 h-2 bg-blue-600"></div>
                            <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
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
                                <Separator className="my-6 bg-gray-700" />
                                <ul className="space-y-4">
                                    {[
                                        "Todos benefícios do Starter",
                                        "Monitoramento 24/7",
                                        "Relatórios customizados",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-6">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    Escolher Plano
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Enterprise Plan */}
                        <Card className="bg-gray-800 border-gray-700 shadow-xl relative overflow-hidden transform transition duration-300 hover:scale-105">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl text-white">Enterprise</CardTitle>
                                <p className="text-gray-400 mt-2">
                                    Para necessidades complexas e alto volume
                                </p>
                                <div className="mt-6 text-3xl font-bold text-white">Personalizado</div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-gray-400 mb-4">Sob demanda</p>
                                <Separator className="my-6 bg-gray-700" />
                                <ul className="space-y-4">
                                    {[
                                        "Todos benefícios do Pro",
                                        "SLA diferenciado",
                                        "Consultoria estratégica",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-6">
                                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                                    Contato Personalizado
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
                        <div className="flex gap-6 items-start">
                            <ShieldCheck className="w-10 h-10 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Garantia incondicional
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Confiamos plenamente na qualidade do nosso serviço. Por isso, o pagamento pela implantação e a efetivação do contrato podem ocorrer após a validação que o Agente de IA atende às expectativas. A partir do momento da entrega, o cliente tem até 15 dias para avaliar a solução e decidir se está satisfeito.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-900" id="faq">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="mb-6 bg-blue-900/50 text-blue-400 hover:bg-blue-900/60 border-blue-700">
                            FAQ
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Dúvidas Frequentes
                        </h2>
                        <p className="text-xl text-gray-300">
                            Encontre respostas para as perguntas mais comuns sobre nossos serviços
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto grid gap-6">
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
                            <Card
                                key={index}
                                className="bg-gray-800 border-gray-700 shadow-lg hover:border-gray-600 transition-colors duration-300"
                            >
                                <CardHeader>
                                    <div className="flex items-start gap-5">
                                        <div className="w-8 h-8 rounded-full bg-blue-900/60 flex items-center justify-center flex-shrink-0 border border-blue-700">
                                            <AlertCircle className="w-4 h-4 text-blue-400" />
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900" id="contato">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-6 bg-blue-800 text-blue-200 hover:bg-blue-700 border-blue-600">
                                Contato
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Pronto para transformar seu negócio?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                                Entre em contato conosco para uma demonstração gratuita e veja como nossos
                                agentes de IA podem ajudar sua empresa.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-8">
                                Solicite uma demonstração
                            </h3>
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome" className="text-gray-300">
                                            Nome
                                        </Label>
                                        <Input
                                            id="nome"
                                            type="text"
                                            className="bg-gray-700 text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            className="bg-gray-700 text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="mensagem" className="text-gray-300">
                                        Mensagem
                                    </Label>
                                    <Textarea
                                        id="mensagem"
                                        rows={4}
                                        className="bg-gray-700 text-white"
                                    />
                                </div>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                                    Enviar Mensagem
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img src="/forux.svg" alt="Forux Digital Logo" className="h-10" />
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
                        </div>

                        <div>
                            <h3 className="text-white font-medium text-lg mb-6">Soluções</h3>
                            <ul className="space-y-3">
                                {[
                                    "Agente Receptivo",
                                    "Agente Ativo",
                                    "Integrações",
                                    "Automações",
                                    "Consultoria",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-medium text-lg mb-6">Empresa</h3>
                            <ul className="space-y-3">
                                {["Sobre Nós", "Nosso Time", "Carreiras", "Parceiros", "Blog"].map(
                                    (item, i) => (
                                        <li key={i}>
                                            <a href="#" className="hover:text-white transition-colors">
                                                {item}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-medium text-lg mb-6">Contato</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span>(82) 99838-5111</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MessageCircle className="w-5 h-5 text-blue-400" />
                                    <span>contato@forux.io</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ExternalLink className="w-5 h-5 text-blue-400" />
                                    <a href="https://forux.io" className="hover:text-white transition-colors">
                                        forux.io
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
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
