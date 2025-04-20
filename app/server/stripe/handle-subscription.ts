import { db } from "@/app/libs/firebase";
import Stripe from "stripe";

export default async function handleStripeSubscription(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === "paid") {
    console.log(
      "Pagamento concluído com sucesso! Enviar email de confirmação e liberar acesso."
    );

    const metadata = event.data.object.metadata;
    const userEmail = metadata?.userEmail;
    const userId = metadata?.userId;

    console.log("Dados do evento Stripe:", {
      event,
      metadata,
      userEmail,
      userId,
    });

    if (!userEmail || !userId) {
      console.error("Email ou ID do usuário não encontrado no metadata.");
      return;
    }

    await db.collection("users").doc(userId).update({
      stripeSubscriptionId: event.data.object.subscription,
      stripeStatus: "active",
    });
  }
}
