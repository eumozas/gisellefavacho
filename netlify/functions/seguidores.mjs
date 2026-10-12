// Busca o número de seguidores da Giselle na API oficial do Instagram (Business Discovery).
// Precisa de duas variáveis no Netlify: META_TOKEN e IG_USER_ID (veja o LEIA-ME).
export default async () => {
  const token = process.env.META_TOKEN;
  const igId = process.env.IG_USER_ID;
  const alvo = process.env.IG_ALVO || "gisellefavacho";
  const versao = process.env.GRAPH_VERSION || "v23.0";
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=300",
    "Netlify-CDN-Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
  };
  const falha = (motivo) =>
    new Response(JSON.stringify({ ok: false, motivo }), {
      headers: { ...headers, "Netlify-CDN-Cache-Control": "public, s-maxage=120" },
    });

  if (!token || !igId) return falha("sem_configuracao");

  try {
    const campos = `business_discovery.username(${alvo}){followers_count,media_count}`;
    const url = `https://graph.facebook.com/${versao}/${igId}?fields=${encodeURIComponent(campos)}&access_token=${encodeURIComponent(token)}`;
    const r = await fetch(url);
    const d = await r.json();
    const bd = d && d.business_discovery;
    if (!bd || typeof bd.followers_count !== "number") {
      return falha((d && d.error && d.error.message) || "sem_dados");
    }
    return new Response(
      JSON.stringify({ ok: true, seguidores: bd.followers_count, posts: bd.media_count, em: new Date().toISOString() }),
      { headers }
    );
  } catch (e) {
    return falha("erro_de_rede");
  }
};

export const config = { path: "/api/seguidores" };
