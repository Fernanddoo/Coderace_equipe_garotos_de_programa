import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vital Link - Página Inicial</title>
        <meta name="description" content="Transformando a acessibilidade com inovação e economia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-[#00a97f] to-[#646273] text-black py-6 text-center">
        <h1 className="text-4xl font-bold">Vital Link</h1>
        <p className="mt-2 text-lg">Transformando a acessibilidade com inovação e economia</p>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Seção Sobre Nós */}
        <section id="sobre-nos" className="mb-12">
          <h2 className="text-[#00a97f] text-3xl font-semibold mb-4">Sobre Nós</h2>
          <p className="text-white leading-relaxed text-lg">
            No Vital Link, nossa missão é transformar a vida de pessoas com deficiência, oferecendo soluções acessíveis e de alta qualidade.
            Desenvolvemos uma plataforma inovadora que combina produtos físicos e digitais para atender às diversas necessidades de acessibilidade.
            Nosso objetivo é garantir que cada pessoa tenha acesso às ferramentas que precisam para uma vida mais independente e conectada.
          </p>
        </section>

        {/* Seção Diferenciais */}
        <section id="diferenciais" className="mb-12">
          <h2 className="text-[#00a97f] text-3xl font-semibold mb-4">Nossos Diferenciais</h2>
          <div className="flex flex-wrap justify-between">
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 flex-1 min-w-[280px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-[#00a97f] text-xl font-semibold mb-2">Acessibilidade Financeira Incomparável</h3>
              <p>Oferecemos produtos de acessibilidade a preços muito mais baixos do que a maioria dos concorrentes, garantindo soluções acessíveis para um público mais amplo e com orçamento limitado.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 flex-1 min-w-[280px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-[#00a97f] text-xl font-semibold mb-2">Preços Competitivos para Produtos Físicos</h3>
              <p>Nossos produtos físicos assistivos, como a bengala inteligente, são oferecidos a preços significativamente mais baixos, tornando-os mais acessíveis para os consumidores.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 flex-1 min-w-[280px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-[#00a97f] text-xl font-semibold mb-2">Modelo de Custo-Benefício Superior</h3>
              <p>Garantimos um excelente custo-benefício, combinando alta qualidade com preços reduzidos para oferecer um valor incomparável.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 flex-1 min-w-[280px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-[#00a97f] text-xl font-semibold mb-2">Estrutura de Preços Transparente</h3>
              <p>Nosso modelo de preços é claro e justo, refletindo nosso compromisso com a transparência e a acessibilidade financeira.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 flex-1 min-w-[280px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-[#00a97f] text-xl font-semibold mb-2">Assinatura Premium com Benefícios Exclusivos</h3>
              <p>A assinatura premium oferece acesso a uma gama completa de produtos digitais de assistência e descontos exclusivos na manutenção de produtos físicos.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 m-2 flex-1 min-w-[280px] transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-[#00a97f] text-xl font-semibold mb-2">Compromisso com a Inclusão</h3>
              <p>Estamos comprometidos em promover a inclusão e oferecer produtos que atendam a um padrão de excelência a preços acessíveis.</p>
            </div>
          </div>
        </section>

        {/* Seção Nossos Produtos */}
        <section id="nossos-produtos" className="mb-12">
          <h2 className="text-[#00a97f] text-3xl font-semibold mb-4">Nossos Produtos</h2>
          <p className="text-white leading-relaxed text-lg">
            Desenvolvemos uma variedade de produtos para atender às necessidades de acessibilidade. Entre nossos produtos físicos, incluímos bengalas inteligentes, cadeiras de rodas e muito mais.
            No campo digital, oferecemos ferramentas como narradores, leitores de tela, aplicativos de tradução de linguagem de sinais e reconhecimento de imagens.
            Nossa plataforma integrada permite gerenciar e agendar manutenções, garantindo um suporte contínuo e acessível.
          </p>
        </section>
      </main>

      <footer className="bg-[#4c4c4c] text-white py-4 text-center">
        <p>&copy; 2024 Vital Link. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}