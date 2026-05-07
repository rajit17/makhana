import type { EnquiryPayload, OrderPayload } from "@/lib/types";

type MockResponse = {
  ok: true;
  referenceId: string;
};

const createReferenceId = (prefix: string) =>
  `${prefix}-${new Date().getFullYear()}-${Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase()}`;

export async function submitOrder(payload: OrderPayload): Promise<MockResponse> {
  console.info("Mock order payload ready for API:", payload);

  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    ok: true,
    referenceId: createReferenceId("KM"),
  };
}

export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<MockResponse> {
  console.info("Mock enquiry payload ready for API:", payload);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    ok: true,
    referenceId: createReferenceId("ENQ"),
  };
}
