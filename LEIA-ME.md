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
