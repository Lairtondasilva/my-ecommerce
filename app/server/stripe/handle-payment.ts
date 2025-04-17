import Stripe from "stripe";

export async function handleStripePayment(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === "paid") {
    console.log(
      "Pagamento concluído com sucesso! Enviar email de confirmação e liberar acesso."
    );
  }
}
