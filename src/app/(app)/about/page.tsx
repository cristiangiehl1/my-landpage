import './page.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mim',
}

export default function About() {
  return (
    <main className="about-hero">
      <div className="text-wrapper">
        <h2>Background Profissional</h2>
        <p>
          Com três anos de experiência dedicada no setor financeiro, desenvolvi
          minha expertise em análise de crédito no BOCOM BBM. Durante meu
          período na instituição, desempenhei um papel crucial na avaliação da
          capacidade de crédito das empresas captadas pela área comercial. Minha
          principal responsabilidade era analisar minuciosamente os
          demonstrativos financeiros das empresas solicitantes de crédito,
          assegurando avaliações completas que embasavam decisões de concessão
          de crédito bem fundamentadas.
        </p>
      </div>

      <div className="text-wrapper">
        <h2>Mercado Imobiliário</h2>
        <p>
          Trabalho no mercado imobiliário de Itapema e Porto Belo, onde conto
          com mais de dois anos de experiência. Especializado em imóveis de alto
          padrão, meu foco é sempre buscar a melhor alternativa para garantir a
          maior rentabilidade para meus clientes. Com um olhar atento às
          tendências do mercado e um compromisso inabalável com a satisfação do
          cliente, trabalho para proporcionar soluções imobiliárias que atendam
          perfeitamente às necessidades e expectativas de quem confia em meu
          serviço.
        </p>
      </div>
    </main>
  )
}
