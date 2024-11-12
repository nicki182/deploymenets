// To listen on port 80.
Deno.serve({ port: 80, hostname: "0.0.0.0" }, (_req) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  return new Response("Hello, World!", { headers });
});