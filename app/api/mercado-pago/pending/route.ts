import mpClient from "@/app/libs/mercado-pago";
import { Payment } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const paymentId = searchParams.get("payment_id");

  const testeId = searchParams.get("external_reference");

  if (!paymentId || !testeId) {
    return NextResponse.json(
      {
        error: "payment_id or external_reference not found",
      },
      { status: 400 }
    );
  }

  const payment = new Payment(mpClient);

  const paymentData = await payment.get({
    id: paymentId,
  });
  //   aprovado ou diferente de nulo

  if (paymentData.status === "approved" || paymentData.date_approved !== null) {
    return NextResponse.redirect(new URL("/sucesss", req.url));
  }

  return NextResponse.redirect(new URL("/", req.url));
}
