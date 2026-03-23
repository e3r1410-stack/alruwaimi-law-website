export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('text/html')) {
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Content-Type', 'text/html; charset=UTF-8');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }
    return response;
  }
};
