"use client";

import useMercadoPago from "@/app/hooks/useMercadoPago";
import { useStripe } from "@/app/hooks/useStripe";

export default function Pagamentos() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();
  return (
    <div className="truncate flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold underline">Pagamentos</h1>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={() => createPaymentStripeCheckout({ testeId: "123" })}
      >
        Criar pagamento stripe
      </button>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={() => createSubscriptionStripeCheckout({ testeId: "123" })}
      >
        Criar assinatura stripe
      </button>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={() => handleCreateStripePortal()}
      >
        Criar portal de pagamentos
      </button>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={() => {
          createMercadoPagoCheckout({
            testeId: "123",
            userEmail: "teste@teste.com",
          });
        }}
      >
        Criar pagamento mercado pago
      </button>
    </div>
  );
}
