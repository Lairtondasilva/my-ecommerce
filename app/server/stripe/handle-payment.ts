import { db } from "@/app/libs/firebase";
import Stripe from "stripe";

export async function handleStripePayment(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === "paid") {
    console.log(
      "Pagamento concluído com sucesso! Enviar email de confirmação e liberar acesso."
    );

    const metadata = event.data.object.metadata;
    const userEmail = metadata?.userEmail;
    const userId = event.data.object.metadata?.userId;

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
