"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona o envio dos produtos?",
    answer:
      "Após a confirmação do pagamento, enviamos seu pedido em até 2 dias úteis. Você será notificado com o código de rastreamento.",
  },
  {
    question: "Posso trocar meu produto?",
    answer:
      "Sim! Você pode solicitar a troca em até 7 dias após o recebimento. Basta entrar em contato com nosso suporte.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito, débito, PIX e boleto bancário para sua maior comodidade.",
  },
  {
    question: "Como sei qual tamanho escolher?",
    answer:
      "Disponibilizamos uma tabela de medidas em cada produto. Em caso de dúvidas, fale com nosso atendimento!",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 bg-[#E8DFD3] rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="flex justify-between items-center w-full px-4 py-4 text-left text-gray-800 font-medium bg-[#E8DFD3] hover:bg-[#e3d7c8] transition"
          >
            <span className="text-base md:text-lg">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed bg-[#E8DFD3]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
