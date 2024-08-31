"use client";

import { AuthContext, useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const { userAuth, logout } = useAuthContext();
  const router = useRouter();
  const [showRecommendations, setShowRecommendations] = useState(false); // Estado para controlar a exibição

  if (userAuth == null) {
    router.push("/signIn");
    return null;
  }

  return (
    <main>
      <header className="bg-custom-3 flex justify-between px-5 py-1 items-center">
        <h1 className="text-xl font-bold hover:text-gray-300 transition">Ambiente do Usuário</h1>
        <div>
          <button className="mr-5 hover:text-green-800 transition">
            <svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </button>
          <button onClick={() => logout()} className="hover:text-red-600 transition">
            Sair
          </button>
        </div>
      </header>
      <section className="flex min-h-screen bg-custom-6">
        <div className="bg-custom-5 flex p-4 max-w-sm min-h-screen flex-col">
          <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
          </svg>
          <div className="justify-center mt-5 items-start text-xl font-light">
            <Link href="/home">
              <p className="border-b-2 border-custom-3 mb-4 hover:bg-custom-3 hover:rounded-xl px-4 py-1 transition">Página principal</p>
            </Link>
            <p className="border-b-2 border-custom-3 mb-4 hover:bg-custom-3 hover:rounded-xl px-4 py-1 transition cursor-pointer" onClick={() => setShowRecommendations(!showRecommendations)}>
              Recomendações
            </p>
            {/* Outros itens */}
            <p className="border-b-2 border-custom-3 mb-4 hover:bg-custom-3 hover:rounded-xl px-4 py-1 transition">Assinatura</p>
            <p className="border-b-2 border-custom-3 mb-4 hover:bg-custom-3 hover:rounded-xl px-4 py-1 transition">Aplicativos</p>
            <p className="border-b-2 border-custom-3 mb-4 hover:bg-custom-3 hover:rounded-xl px-4 py-1 transition">Equipamentos</p>
            <p className="border-b-2 border-custom-3 mb-4 hover:bg-custom-3 hover:rounded-xl px-4 py-1 transition">Suporte</p>
          </div>
        </div>
        <div>
          {showRecommendations && (
            <div className="bg-custom-2 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-10 ml-48 mb-10">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold text-custom-3 -mb-20">Bengala Inteligente</h2>
                <div className="w-full flex justify-center">
                  <div className="relative">
                    <video
                      src="/videos/bengala.mp4"
                      controls
                      className="rounded-lg w-64 h-auto"
                      style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                    >
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  </div>
                </div>

                <p className="text-custom-1 text-lg -mt-20 mb-2 text-center">
                  A bengala inteligente Vital Link foi projetada para garantir a segurança e mobilidade de pessoas com deficiência visual. Equipada com sensores de última geração, ela auxilia na navegação por diversos ambientes, promovendo autonomia e confiança.
                </p>
                <ul className="list-disc pl-6 mb-4 text-custom-1 text-left">
                  <li>Sensores de proximidade para detecção de obstáculos.</li>
                  <li>Alerta vibratório e sonoro em caso de aproximação de perigos.</li>
                  <li>Design ergonômico para maior conforto durante o uso prolongado.</li>
                  <li>Monitoramento de bateria e notificações via aplicativo.</li>
                </ul>
                <a href="#" className="bg-custom-5 text-white px-6 py-3 rounded-md shadow hover:bg-custom-3 transition">
                  Saiba Mais
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-10">
        <h1>Equipe Garotos de programa - Vital Link @ 2025</h1>
      </footer>
    </main>
  );
}
