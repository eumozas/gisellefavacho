# Site da Giselle Favacho no Netlify

## Publicar (pelo GitHub, para as alterações irem sozinhas)
1. No GitHub (conta eumozas), crie um repositório vazio chamado `gisellefavacho`.
2. Em app.netlify.com: Add new project → Import an existing project → GitHub → escolha `gisellefavacho`.
   As configurações vêm do netlify.toml (pasta publicada: `public`).
3. Deploy. Depois, em Domain management, troque o nome do site ou conecte um domínio.

## Como as alterações chegam ao site
Cada alteração enviada para o GitHub (branch main) dispara um novo deploy no Netlify.
Em cerca de 1 minuto o site no ar já mostra a mudança.

## Onde fica cada coisa
- `public/index.html`: o site inteiro (textos, fotos e animações).
- Número de seguidores: procure `data-value="214"` e a frase "Atualizado em".

## Seguidores atualizando sozinhos
O site busca o número real em `/api/seguidores` (função em `netlify/functions/seguidores.mjs`).
Enquanto as variáveis abaixo não existirem, o site mostra o número fixo (215 mil).

Requisitos: o Instagram @moisesbsilvaa precisa ser conta profissional ligada a uma Página do Facebook,
e o @gisellefavacho precisa ser conta profissional (criador ou empresa).

1. Em developers.facebook.com, crie um app do tipo "Empresa".
2. No Graph API Explorer, escolha o app e marque as permissões
   instagram_basic, pages_show_list, pages_read_engagement e business_management. Clique em "Generate Access Token".
3. Ainda no Explorer, rode `me/accounts?fields=name,access_token,instagram_business_account`.
   - O `id` dentro de `instagram_business_account` é o IG_USER_ID.
   - Para um token que não expira: estenda o token no Access Token Debugger (botão "Extend")
     e rode `me/accounts` de novo com ele. O `access_token` da sua Página é o META_TOKEN.
4. No Netlify: Project configuration → Environment variables, crie META_TOKEN e IG_USER_ID.
   Depois, em Deploys, clique em "Trigger deploy".
5. Teste abrindo https://gisellefavacho.netlify.app/api/seguidores. Deve aparecer "ok": true e o número.
