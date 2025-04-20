import { db } from "@/app/libs/firebase";
import Stripe from "stripe";

export default async function handleCancelSubscription(
  event: Stripe.CustomerSubscriptionDeletedEvent
) {
  if (event.data.object.status === "canceled") {
    console.log("Assinatura cancelada! Enviar email de cancelamento.");

    const customerId = event.data.object.customer;

    const userRef = await db
      .collection("users")
      .where("stripeCustomerId", "==", customerId)
      .get();
    if (userRef.empty) {
      console.error("Usuário não encontrado com o ID do cliente Stripe.");
      return;
    }
    const userId = userRef.docs[0].id;

    await db.collection("users").doc(userId).update({
      stripeStatus: "inactive",
    });
  }
}
