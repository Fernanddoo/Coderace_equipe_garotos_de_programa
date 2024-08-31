import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vital Link - Página Inicial</title>
        <meta name="description" content="Transformando a acessibilidade com inovação e economia" />
      </Head>
      
      <header className="bg-gradient-to-r from-[#00a97f] to-[#646273] text-white py-8 px-6 text-center">
        <h1 className="text-3xl font-bold">Vital Link</h1>
        <p className="mt-2">Transformando a acessibilidade com inovação e economia</p>
        <nav className="mt-4">
          <a href="#home" className="text-white py-2 px-4 rounded border-2 border-transparent hover:bg-neon hover:border-neon transition">Portal</a>
          <a href="#nossos-apps" className="text-white py-2 px-4 rounded border-2 border-transparent hover:bg-neon hover:border-neon transition">Nossos Apps</a>
          <a href="#nossa-loja" className="text-white py-2 px-4 rounded border-2 border-transparent hover:bg-neon hover:border-neon transition">Nossa Loja</a>
          <a href="/" className="text-white py-2 px-4 rounded border-2 border-transparent hover:bg-neon hover:border-neon transition">Página do usuário</a>
        </nav>
      </header>

      <main className="px-6 py-8">
        {/* Seção Sobre Nós */}
        <section id="sobre-nos" className="mb-8">
          <h2 className="text-2xl text-neon border-b-2 border-neon pb-2">Sobre Nós</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex-1 min-w-[280px] border-2 border-neon p-4 rounded-lg">
              <p>
                No Vital Link, nossa missão é transformar a vida de pessoas com deficiência, oferecendo soluções acessíveis e de alta qualidade.
                Desenvolvemos uma plataforma inovadora que combina produtos físicos e digitais para atender às diversas necessidades de acessibilidade.
              </p>
            </div>
            <div className="flex-1 min-w-[280px] border-2 border-neon p-4 rounded-lg">
              <p>
                Nosso objetivo é garantir que cada pessoa tenha acesso às ferramentas que precisam para uma vida mais independente e conectada.
                Trabalhamos para tornar a acessibilidade uma realidade para todos, com soluções que se destacam pela qualidade e pela economia.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Diferenciais */}
        <section id="diferenciais" className="mb-8">
          <h2 className="text-2xl text-neon border-b-2 border-neon pb-2">Nossos Diferenciais</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="bg-white border-2 border-neon p-6 rounded-lg shadow-md flex-1 min-w-[280px] hover:shadow-lg transition-transform transform hover:translate-y-[-0.5rem]">
              <h3 className="text-xl text-gray-900 font-semibold">Acessibilidade Financeira Incomparável</h3>
              <p className='text-gray-900'>Oferecemos produtos de acessibilidade a preços muito mais baixos do que a maioria dos concorrentes, garantindo soluções acessíveis para um público mais amplo e com orçamento limitado.</p>
            </div>
            <div className="bg-white border-2 border-neon p-6 rounded-lg shadow-md flex-1 min-w-[280px] hover:shadow-lg transition-transform transform hover:translate-y-[-0.5rem]">
              <h3 className="text-xl text-gray-900 font-semibold">Preços Competitivos para Produtos Físicos</h3>
              <p className='text-gray-900'>Nossos produtos físicos assistivos, como a bengala inteligente, são oferecidos a preços significativamente mais baixos, tornando-os mais acessíveis para os consumidores.</p>
            </div>
            <div className="bg-white border-2 border-neon p-6 rounded-lg shadow-md flex-1 min-w-[280px] hover:shadow-lg transition-transform transform hover:translate-y-[-0.5rem]">
              <h3 className="text-xl text-gray-900 font-semibold">Modelo de Custo-Benefício Superior</h3>
              <p className='text-gray-900'>Garantimos um excelente custo-benefício, combinando alta qualidade com preços reduzidos para oferecer um valor incomparável.</p>
            </div>
            <div className="bg-white border-2 border-neon p-6 rounded-lg shadow-md flex-1 min-w-[280px] hover:shadow-lg transition-transform transform hover:translate-y-[-0.5rem]">
              <h3 className="text-xl text-gray-900 font-semibold">Estrutura de Preços Transparente</h3>
              <p className='text-gray-900'>Nosso modelo de preços é claro e justo, refletindo nosso compromisso com a transparência e a acessibilidade financeira.</p>
            </div>
            <div className="bg-white border-2 border-neon p-6 rounded-lg shadow-md flex-1 min-w-[280px] hover:shadow-lg transition-transform transform hover:translate-y-[-0.5rem]">
              <h3 className="text-xl text-gray-900 font-semibold">Assinatura Premium com Benefícios Exclusivos</h3>
              <p className='text-gray-900'>A assinatura premium oferece acesso a uma gama completa de produtos digitais de assistência e descontos exclusivos na manutenção de produtos físicos.</p>
            </div>
            <div className="bg-white border-2 border-neon p-6 rounded-lg shadow-md flex-1 min-w-[280px] hover:shadow-lg transition-transform transform hover:translate-y-[-0.5rem]">
              <h3 className="text-xl text-gray-900 font-semibold">Compromisso com a Inclusão</h3>
              <p className='text-gray-900'>Estamos comprometidos em promover a inclusão e oferecer produtos que atendam a um padrão de excelência a preços acessíveis.</p>
            </div>
          </div>
        </section>

        {/* Seção Nossos Produtos */}
        <section id="nossos-produtos" className="mb-8">
          <h2 className="text-2xl text-neon border-b-2 border-neon pb-2">Nossos Produtos</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex-1 min-w-[280px] border-2 border-neon p-4 rounded-lg">
              <p>
                Desenvolvemos uma variedade de produtos para atender às necessidades de acessibilidade. Entre nossos produtos físicos, incluímos bengalas inteligentes, cadeiras de rodas e muito mais.
                No campo digital, oferecemos ferramentas como narradores, leitores de tela, aplicativos de tradução de linguagem de sinais e reconhecimento de imagens.
              </p>
            </div>
            <div className="flex-1 min-w-[280px] border-2 border-neon p-4 rounded-lg">
              <p>
                Nossa plataforma integrada permite gerenciar e agendar manutenções, garantindo um suporte contínuo e acessível.
                Com um portfólio diversificado e uma abordagem centrada no usuário, buscamos oferecer as melhores soluções para uma vida mais conectada e independente.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Saúde e Bem-Estar Digital */}
        <section id="saude-bem-estar" className="mb-8">
          <h2 className="text-2xl text-neon border-b-2 border-neon pb-2">Como Nosso Projeto Se Relaciona com Saúde e Bem-Estar Digital</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex-1 min-w-[280px] border-2 border-neon p-4 rounded-lg">
              <p>
                O Vital Link está profundamente alinhado com a promoção da saúde e do bem-estar digital ao oferecer produtos e serviços que não apenas atendem às necessidades de acessibilidade, mas também melhoram a qualidade de vida dos usuários.
                Nossos produtos assistivos físicos e digitais são projetados para proporcionar uma experiência mais conectada e independente, facilitando a interação com o mundo e o acesso a recursos essenciais.
              </p>
            </div>
            <div className="flex-1 min-w-[280px] border-2 border-neon p-4 rounded-lg">
              <p>
                Ao integrar ferramentas digitais, como narradores e aplicativos de tradução de sinais, com produtos físicos, como bengalas inteligentes, criamos um ecossistema que apoia o bem-estar digital de forma holística.
                A nossa plataforma também oferece suporte contínuo e agendamento de manutenções, o que assegura que os usuários tenham sempre acesso a produtos funcionais e confiáveis.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-[#00a97f] to-[#646273] text-white py-4 text-center">
        <p>&copy; 2024 Vital Link. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}