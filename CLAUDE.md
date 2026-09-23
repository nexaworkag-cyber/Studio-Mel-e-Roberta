# Studio Mel e Roberta — prospecção de pequenos negócios

Trabalho: abordar pequenos negócios que usam **Linktree**, têm **site mal feito**
ou **problemas no PageSpeed**, e oferecer uma landing page nova.
Cada cliente que a usuária mandar deve ser analisado junto com ela e registrado em
`clientes/<slug>/analise.md` (slug = nome do negócio em minúsculas, com hífens).

## Fluxo por cliente

1. **Coletar** o que ela mandar: nome, nicho, cidade, link (site/Linktree/Instagram),
   prints ou link do resultado do PageSpeed (pagespeed.web.dev).
2. **Medir**: `PSI_API_KEY=... NODE_USE_ENV_PROXY=1 node scripts/analisar.mjs <url> <slug>`
   gera `clientes/<slug>/pagespeed/resumo.md`. Sem chave (ou se a cota da API acabar),
   usar os prints/texto que ela mandar.
   - O ambiente na nuvem bloqueia acesso direto à maioria dos sites (só `googleapis.com`
     passa). Para ver o conteúdo do site/Linktree, pedir prints ou o texto da página.
3. **Diagnosticar** usando `templates/analise.md`: traduzir cada problema técnico em
   **impacto no negócio** (cliente desiste, não acha no Google, não consegue chamar
   no WhatsApp etc.). Nada de jargão na parte que vai para o cliente.
4. **Proposta**: mensagem curta de abordagem (WhatsApp/Instagram DM) + resumo da
   oferta. Tom: simpático, direto, sem criticar o negócio; mostrar o ganho.
5. Atualizar `clientes/README.md` (tabela com status de cada lead).

## Referências rápidas (Core Web Vitals, mobile)

| Métrica | Bom | Ruim |
|---|---|---|
| LCP (maior conteúdo visível) | ≤ 2,5 s | > 4 s |
| INP / TBT (resposta ao toque) | INP ≤ 200 ms · TBT ≤ 200 ms | INP > 500 ms · TBT > 600 ms |
| CLS (layout que pula) | ≤ 0,1 | > 0,25 |
| Nota de performance | 90–100 | 0–49 |

## Argumentos por tipo de problema

- **Só Linktree**: não aparece no Google com o nome do negócio, visual igual ao de
  todo mundo, sem espaço para serviços/preços/depoimentos/mapa, dependência de uma
  plataforma de terceiros, sem domínio próprio (menos credibilidade).
- **Site lento**: 53% das visitas no celular desistem se a página leva mais de 3 s
  (dado do Google); cada segundo a mais derruba conversões.
- **Site mal feito**: não funciona bem no celular, sem botão de WhatsApp visível,
  texto pequeno, sem informação clara do que faz/onde fica/como contratar.
- **SEO baixo**: sem título/descrição, sem dados de negócio local → não aparece em
  buscas tipo "<serviço> perto de mim".
