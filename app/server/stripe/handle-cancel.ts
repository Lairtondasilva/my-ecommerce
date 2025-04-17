import Stripe from "stripe";

export default function handleCancelSubscription(
  event: Stripe.CustomerSubscriptionDeletedEvent
) {
  if (event.data.object.status === "canceled") {
    console.log("Assinatura cancelada! Enviar email de cancelamento.");
  }
}
