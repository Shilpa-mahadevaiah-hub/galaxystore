export async function GET(request) {
  const requestId =
    request.headers.get(
      "x-galaxystore-request-id"
    );

  const source =
    request.headers.get(
      "x-galaxystore-source"
    );

  return Response.json({
    message: "Operations audit context",
    requestId,
    source,
    receivedAt:
      new Date().toISOString(),
  });
}