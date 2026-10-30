  export async function onRequest(context) {
  const { request, next } = context;
  
  // Check for the Authorization header
  const basicAuth = request.headers.get("Authorization");
  
  // Replace the string below with your generated Base64 string
  // Format: "Basic " + btoa("username:password")
  const validAuth = "Basic YWRtaW46ZmluYW5jaWFsX2ZyZWVkb21fNQ==";

  if (basicAuth !== validAuth) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Calculator Access"',
      },
    });
  }

  // If the password is correct, load the page normally
  return next();
}
