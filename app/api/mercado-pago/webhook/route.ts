import mpClient, { validateMercadoPagoWebhook } from "@/app/libs/mercado-pago";
import { handleMercadoPagoPayment } from "@/app/server/mercado-pago/handle-payment";
import { Payment } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    validateMercadoPagoWebhook(req);

    const { type, data } = body;

    switch (type) {
      case "payment":
        const payment = new Payment(mpClient);
        const paymentData = await payment.get({
          id: data.id,
        });

        if (
          paymentData.status === "approved" ||
          paymentData.date_approved !== null
        ) {
          await handleMercadoPagoPayment(paymentData);
        }
        break;
      case "subscription.preapproval":
        break;
      default:
        console.log("Esse evento não é suportado");
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("error handling webhook", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
