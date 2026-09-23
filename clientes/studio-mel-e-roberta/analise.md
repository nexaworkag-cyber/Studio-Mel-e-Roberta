# Studio Mel e Roberta

- **Nicho / cidade:** estúdio de beleza (cílios, sobrancelhas, manicure, facial) · Rio de Janeiro (DDD 21) — confirmar bairro
- **Link atual:** https://studiomeleroberta.com/ (WordPress + Elementor + ElementsKit), acessado pelo link da bio do Instagram
- **Situação:** site existe e é bonito, mas é **muito lento no celular** + headline fraca
- **Contato:** WhatsApp 21 99873-5054 · @instagram (confirmar)
- **Data da análise:** 2026-09-23
- **Status:** a abordar

## Números (PageSpeed, mobile / desktop)

| | Mobile | Desktop |
|---|---|---|
| Performance | **59** | 70 |
| Acessibilidade | 89 | 89 |
| Boas práticas | 100 | 100 |
| SEO | 100 | 100 |
| LCP | **21,3 s** | 11,8 s |
| FCP | 3,3 s | 0,8 s |
| Speed Index | 7,0 s | 2,3 s |
| CLS | 0 | 0 |
| TBT | 200 ms | 20 ms |
| Peso da página | **5,8 MB** | **17,6 MB** |

Sem dados de usuários reais (CrUX): pouco tráfego. Números são de laboratório (celular em 4G simulado).

## Problemas encontrados (interno)

| Problema técnico | O que isso causa no negócio | Gravidade |
|---|---|---|
| Banner principal (fundo CSS do container "Marcar horário") leva 21 s para aparecer no celular | Quem clica no link da bio vê uma tela "vazia" e desiste antes de ver os serviços | alta |
| Imagens PNG sem compressão, 1000×1000 exibidas a 265×265 (2,3–2,9 MB cada) | Gasta o plano de dados da cliente; página demora em 4G | alta |
| CSS do Elementor bloqueando a renderização (~3 s no mobile) | Mais espera antes de aparecer qualquer coisa | alta |
| Google Maps embutido (~306 KB de JS sem uso, 8 tarefas longas) | Página trava ao rolar no celular | média |
| CSS não usado (ElementsKit, Font Awesome, 104 KB) | Peso extra sem benefício | média |
| Contraste baixo: botão "Marcar horário", telefone, títulos dos serviços | O botão mais importante e o telefone são difíceis de ler | média |
| 8 ícones sem nome (WhatsApp, Instagram, Maps, Drive) | Leitores de tela e assistentes de IA não entendem os botões | baixa |
| Arquivos no Google Drive linkados no site | Pode pedir login, é lento, passa imagem amadora | média |
| Headline "Invista em você, nós cuidamos do resto!" | "Resto" soa como sobra, algo sem importância, justamente o serviço delas. Também não diz o que o estúdio faz nem onde fica | média |

Pontos fortes (não criticar): identidade visual bonita e coerente, SEO 100, boas práticas 100, já tem botão de agendamento.

## Headline: sugestões

O problema: "resto" desvaloriza o trabalho, e a frase ocupa a tela toda do celular sem dizer *o quê* nem *onde*.

1. **"Invista em você. A gente cuida de cada detalhe."** Mudança mínima, mantém a ideia, e "detalhe" combina com cílios, sobrancelha e unha.
2. **"Beleza nos detalhes, cuidado em cada visita."**
3. **"Do olhar às mãos, um cuidado feito pra você."** Cobre cílios/sobrancelhas até a manicure.

Com um subtítulo que responde o quê e onde:
"Cílios, sobrancelhas, manicure e estética facial em <bairro>, Rio de Janeiro."

## O que a página nova resolve

- Abre em menos de 2–3 s no celular: imagens em WebP no tamanho certo, banner com prioridade de carregamento, sem excesso de plugins.
- Headline que valoriza o serviço + subtítulo com serviços e bairro.
- Botão de WhatsApp/agendamento com bom contraste, sempre visível no celular.
- Mapa como imagem com link (não trava a página).
- Tabela de serviços/preços na própria página em vez de links para o Google Drive.
- Mantém a identidade visual que elas já têm (cores e tipografia).

## Mensagem de abordagem (Instagram DM)

> Oi, Mel e Roberta! Tudo bem? 🤎
> Aqui é <seu nome>, faço páginas para negócios de beleza. Entrei no site de vocês pelo link da bio e amei a identidade visual!
> Notei uma coisa que pode estar fazendo vocês perderem clientes: no teste do Google (PageSpeed), a imagem principal leva uns 20 segundos pra aparecer no celular. A maioria das pessoas desiste antes de 3 segundos, e quem vem do Instagram está justamente no celular.
> Dá pra resolver mantendo a mesma cara do site. Posso mandar um resumo do que encontrei? É sem compromisso 😊

Follow-up (se responderem): mandar os 3 pontos principais (velocidade, botão de agendar difícil de ler, frase de abertura) e a proposta.

## Pontos para a conversa / objeções

- **"Nosso site é novo / pagamos caro":** o site é bonito, o problema é técnico (imagens pesadas). Não é culpa delas.
- **"Por que não só otimizar?":** dá para otimizar (comprimir imagens, cache). Mas Elementor + ElementsKit continuam pesados; uma página enxuta fica rápida de vez e custa menos para manter. Ter as duas opções evita perder o lead.
- **Prova:** mostrar o print do PageSpeed no celular (nota 59, LCP 21,3 s) e, depois, o da página nova.
- Testar de novo sem os parâmetros UTM (`https://studiomeleroberta.com/`) antes de mandar o relatório.

## Página nova (proposta): `site/index.html`

Arquivo único (HTML + CSS + JS embutidos), sem WordPress/Elementor. Lighthouse local (2026-09-23):

| | Site atual (mobile) | Página nova (mobile) |
|---|---|---|
| Performance | 59 | **100** |
| Acessibilidade | 89 | **100** |
| Boas práticas | 100 | 96* |
| SEO | 100 | **100** |
| LCP | 21,3 s | **1,5 s** |
| Peso | 5,8 MB | **39 KB** (sem fotos) |

\* Os únicos avisos são do ambiente de teste: a fonte do Google é bloqueada aqui e o servidor local não comprime os arquivos. Na hospedagem real, esses avisos somem.

**Recursos interativos:** abas de serviços, botão "Agendar" em cada serviço, montador de agendamento (serviços + dia + período + nome) que gera a mensagem pronta no WhatsApp, galeria com ampliação, FAQ, mapa que só carrega ao clicar, WhatsApp flutuante, animações ao rolar (respeitam "reduzir movimento").

**Antes de entregar, trocar o que está marcado com `EDITAR` no código:**
- serviços, descrições e preços reais;
- texto "O estúdio";
- respostas do FAQ;
- @ do Instagram, endereço e horário;
- fotos (WebP, até ~120 KB cada; a do topo com `fetchpriority="high"`).
