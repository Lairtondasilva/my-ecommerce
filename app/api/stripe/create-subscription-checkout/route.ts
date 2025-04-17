import { auth } from "@/app/libs/auth";
import stripe from "@/app/libs/stripe";
import { getOrCreateCustomer } from "@/app/server/stripe/get-customer-id";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { testeId } = await req.json();

  const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID!;

  if (!price) {
    return NextResponse.json(
      {
        error: "Price not found",
      },
      { status: 404 }
    );
  }

  const session = await auth();
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;

  if (!userId || !userEmail) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const customerId = await getOrCreateCustomer(userId, userEmail);

  if (!customerId) {
    return NextResponse.json(
      {
        error: "Customer not found",
      },
      { status: 404 }
    );
  }

  const metadata = {
    testeId,
    price,
  };

  //   Precisamos criar um cliente na stripe para ter referência dele quando for criar o portal

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],

      mode: "subscription",
      payment_method_types: ["card"],
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/`,
      customer: customerId,
      metadata,
    });

    if (!session.url) {
      return NextResponse.json(
        {
          error: "Session URL not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.error();
  }
}
