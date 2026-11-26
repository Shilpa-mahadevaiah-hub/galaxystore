import { NextResponse } from "next/server";

export function proxy(request) {
    const { pathname } = request.nextUrl;
    //logs the intercepted request path to the console for debugging purposes.
    console.log(
        "Proxy intercepted:",
        request.nextUrl.pathname
    );
    // If the request is for the /admin route, redirect to /operations
    if (pathname === "/admin") {
        return NextResponse.redirect(
            new URL("/operations", request.url)
        );
    }

    // If the request is for the /operations route or any of its sub-routes, check for the staff_session cookie
    const isOperationsRoute =
        pathname.startsWith("/operations");

    if (isOperationsRoute) {
        const session =
            request.cookies.get("staff_session");

        if (!session) {
            const loginUrl = new URL(
                "/staff-login",
                request.url
            );

            loginUrl.searchParams.set(
                "returnTo",
                pathname
            );

            return NextResponse.redirect(loginUrl);
        }
    }
    // return NextResponse.next();
    //Add request context headers to the request before forwarding it to the next handler. This includes generating a unique request ID and setting a source identifier.
    const requestHeaders =
        new Headers(request.headers);

    const requestId =
        crypto.randomUUID();

    requestHeaders.set(
        "x-galaxystore-request-id",
        requestId
    );

    requestHeaders.set(
        "x-galaxystore-source",
        "operations-proxy"
    );

    // return NextResponse.next({
    //     request: {
    //         headers: requestHeaders,
    //     },
    //Continue to destination
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    //Add response cookie
    response.cookies.set(
        "last_operations_visit",
        new Date().toISOString(),
        {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
        }
    );

return response;
}

export const config = {
    matcher: ["/admin", "/operations/:path*", "/api/operations/:path*", "/staff-login", "/headers"],
};

// Request /operations
//         ↓
// Proxy checks staff_session
//       /                 \
//  missing               exists
//    ↓                      ↓
// Redirect              NextResponse.next()
// /staff-login               ↓
//                        Operations page