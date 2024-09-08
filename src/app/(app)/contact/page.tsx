import './page.css'

import { Metadata } from 'next'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Contact() {
  return (
    <main className="contact-hero">
      <div className="text-wrapper-contact">
        <h2>
          Entre em contato{' '}
          <a
            href="https://wa.me/5547991115903?"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp size={15} />
          </a>
        </h2>

        <p>
          Cansado de falar com vários corretores ao mesmo tempo e receber
          propostas que não atendem às suas necessidades?
        </p>

        <p>
          Eu entendo como isso pode ser frustrante. Meu foco é oferecer um
          atendimento exclusivo e personalizado. Ao invés de enviar uma lista
          infinita de imóveis genéricos, eu dedico meu tempo para entender o que
          você realmente precisa e encontrar as melhores opções para você.
        </p>

        <p>
          Estou aqui para resolver o seu problema de forma eficiente e direta.
          Vamos conversar e encontrar o imóvel ideal para você.
        </p>
      </div>

      <div className="map-responsive">
        <p className="highlight-message">
          Entre em contato pelo whatsapp ou visite o nosso escritório.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.3695193586964!2d-48.60236802487724!3d-27.136297202582227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8afcd94fc3bb9%3A0x617fadff0d6d7f77!2sEBC%20Im%C3%B3veis%20-%20Itapema!5e0!3m2!1spt-BR!2sbr!4v1724935471482!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  )
}
