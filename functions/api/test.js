// Cloudflare Pages Function — health probe.
// Deploy this file inside your *primary* Pages project (not the redirect repo)
// so it lives at:  https://<your-pages-site>/api/test
//
// While you're under the daily Function quota this returns 200 "ok".
// Once the quota is hit Cloudflare stops invoking the Function and returns
// its own error page, which the client treats as "not alive" and falls
// through to the next mirror.

export const onRequest = () =>
  new Response("ok", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      // Required so the redirect page (different origin) can read the response.
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
