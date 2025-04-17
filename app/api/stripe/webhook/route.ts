import stripe from "@/app/libs/stripe";
import handleCancelSubscription from "@/app/server/stripe/handle-cancel";
import { handleStripePayment } from "@/app/server/stripe/handle-payment";
import handleStripeSubscription from "@/app/server/stripe/handle-subscription";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");

    if (!signature || !secret) {
      return NextResponse.json(
        {
          error: "Signature or secret not found",
        },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    switch (event.type) {
      case "checkout.session.completed": // pagamento concluido
        const metadata = event.data.object.metadata;

        if (metadata?.price === process.env.STRIPE_PRODUCT_PRICE_ID) {
          await handleStripePayment(event);
        }

        if (metadata?.price === process.env.STRIPE_SUBSCRIPTION_PRICE_ID) {
          await handleStripeSubscription(event);
        }
        break;

      case "checkout.session.expired": // pagamento expirado
        console.log(
          "Enviar um email para o usuário informando que o pagamento expirou"
        );
        break;
      case "checkout.session.async_payment_succeeded": // pagamento boleto concluido
        console.log(
          "Enviar um email para o usuário informando que o pagamento boleto concluiu"
        );
        break;
      case "checkout.session.async_payment_failed": // pagamento boleto falhou
        console.log(
          "Enviar um email para o usuário informando que o pagamento boleto falhou"
        );
        break;
      case "customer.subscription.created": // assinatura criada
        console.log(
          "Enviar um email para o usuário informando que a assinatura foi criada + mensagem de boas vindas"
        );
        break;
      case "customer.subscription.updated": // assinatura atualizada
        console.log(
          "Enviar um email para o usuário informando que a assinatura foi atualizada"
        );
        break;
      case "customer.subscription.deleted": // assinatura cancelada
        await handleCancelSubscription(event);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
        break;
    }
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.error();
  }
}
