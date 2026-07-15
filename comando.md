Aqui está o documento Markdown **completo e íntegro**. Basta selecionar tudo abaixo, copiar e colar num arquivo `.md`:

---

````markdown
# Especificações de Design — NEXA Engenharia (Site Wix)

> Valores extraídos via DevTools / JavaScript (`getComputedStyle`) no modo preview do editor Wix.  
> Viewport de referência desktop: **1115px** de largura.  
> Páginas inspecionadas: **Home (Início)** e **/serviços**.

---

## Paleta de Cores Global

| Cor | Hex / Valor | Uso |
|---|---|---|
| Amarelo/Dourado | `#FDCB0A` / `rgb(253,203,10)` | Títulos principais, botão "Leia mais", hambúrguer mobile, item ativo no menu mobile |
| Branco | `#FFFFFF` | Fundo de cards de serviço, textos sobre fundo escuro |
| Preto | `#000000` | Overlay hero, fundo seção Quem Somos, textos gerais |
| Azul claro | `#B3CFE5` / `rgb(179,207,229)` | Fundo seção Diferenciais — Foco; fundo seção Obras Comerciais na página /serviços |
| Cinza muito claro | `#F7F7F7` / `rgb(247,247,247)` | Fundo geral da página (page background); item ativo no menu desktop |
| Quase-branco | `#FEFEFE` / `rgb(254,254,254)` | Fundo do header |
| Preto semi-transparente | `rgba(0,0,0,0.54)` | Container do menu nav no header desktop |
| Preto 50% | `rgba(0,0,0,0.5)` | Fundo do botão "Contato" no hero |
| Cinza claro card | `#F7F7F7` / `rgb(247,247,247)` | Fundo seção Gestão e Coordenação e Retrofit na página /serviços |

---

## Fontes Globais Utilizadas

| Nome no CSS (Wix) | Categoria | Substituto Google Fonts |
|---|---|---|
| `roboto-bold, roboto, sans-serif` | Títulos grandes | `'Roboto', sans-serif` |
| `avenir-lt-w01_35-light1475496, sans-serif` | Corpo, subtítulos, botões | `'Nunito Sans', sans-serif` (peso 300/400) ou `'Raleway'` |
| `din-next-w01-light` | Secundária (não usada nos textos principais) | `'Barlow', sans-serif` |
| `avenir-lt-w01_85-heavy1475544` | Títulos pesados alt. | `'Nunito Sans'` peso 800 |
| `futura-lt-w01-book` | Decorativa | `'Jost', sans-serif` |
| `helvetica-w01-light` | Neutro | `'Helvetica Neue', Arial, sans-serif` |

---

## 1. HEADER

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo geral do header | `rgb(254, 254, 254)` → **`#FEFEFE`** |
| Container do menu nav (strip escura) | `rgba(0, 0, 0, 0.54)` |
| Item ativo (Início) — fundo do LI | `rgb(247, 247, 247)` → **`#F7F7F7`** |
| Item ativo — cor do texto label | `rgb(0, 0, 0)` → `#000000` |
| Item inativo (Serviços) — fundo | `rgba(0, 0, 0, 0)` → transparente |
| Item inativo — cor do texto label | `rgb(255, 255, 255)` → `#FFFFFF` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Letter-spacing | Transform |
|---|---|---|---|---|---|
| Itens do menu (label `<p>`) | `avenir-lt-w01_35-light1475496, sans-serif` | `20px` | `400` | normal | none |

### 3. ESPAÇAMENTO
| Elemento | Valor |
|---|---|
| Altura total do header | `128px` |
| Largura do container de nav | `639px` |
| Altura do container de nav | `68px` |
| Largura de cada item de nav | ~306–333px |
| Logo: posição horizontal | `x = 76px` (da borda esquerda) |

### 4. LAYOUT
- 1 linha horizontal
- **Esquerda:** Logo (121 × 107 px renderizado)
- **Centro-direita:** Container escuro `rgba(0,0,0,0.54)` com 2 itens de menu lado a lado
- `position: sticky`, `top: 50px`, `z-index: 52`
- Não muda de cor ao rolar; não encolhe

### 5. TEXTO — Itens do menu (na ordem)
1. Início
2. Serviços

### 6. IMAGENS
| Contexto | Arquivo | URL original | Dimensões renderizadas |
|---|---|---|---|
| Logo no header | `e2fca5_8d4b4462838b4f2b851481573118e9d0~mv2.jpeg` | `https://static.wixstatic.com/media/e2fca5_8d4b4462838b4f2b851481573118e9d0~mv2.jpeg` | 121 × 107 px (crop x=0,y=42,w=713,h=629) |
| Descrição | Logotipo NEXA Engenharia: prédios estilizados em azul, seta laranja diagonal, texto "NEXA ENGENHARIA" | — | — |

### 7. COMPORTAMENTO AO ROLAR
- `position: sticky` — fica fixo ao topo durante o scroll
- `top: 50px` (compensa a barra de anúncios do Wix, que mede 50px)
- **Não** muda cor, tamanho ou opacidade ao rolar

### 8. BOTÕES/CTAs
Nenhum botão no header — apenas links `<a>` de texto no nav.

### 9. RESPONSIVIDADE (MOBILE — viewport < 480px)
| Elemento | Desktop | Mobile |
|---|---|---|
| Altura do header | 128px | **84px** |
| Logo | 121×107px, à esquerda | **84×84px, centralizada** |
| Menu | 2 itens horizontais | **Hambúrguer** (50×50px, fundo `#FDCB0A`, linhas brancas) |
| Menu aberto — fundo | — | Branco `#FFFFFF` |
| Menu aberto — item ativo | — | `color: #FDCB0A`, `font-size: 18px`, `font-weight: 700` |
| Menu aberto — item inativo | — | `color: #000000`, `font-size: 18px`, `font-weight: 700` |

### 10. ANIMAÇÕES/TRANSIÇÕES
- `transition: background-color 0.4s` — item do menu ao hover
- `transition: color 0.4s` — label do item ao hover

---

## 2. HERO (Home — `comp-kq0xqk0z`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo (colorUnderlay) | `rgb(0, 0, 0)` → `#000000` (coberto pela imagem) |
| Cor do título H2 | `rgb(255, 255, 255)` → **`#FFFFFF`** |
| Fundo do botão "Contato" | `rgba(0, 0, 0, 0.5)` |
| Borda do botão "Contato" | `0.8px solid rgb(255, 255, 255)` |
| Cor do texto do botão | `rgb(255, 255, 255)` → `#FFFFFF` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho (desktop) | Peso | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| Título H2 | `roboto-bold, roboto, sans-serif` | `60px` | `700` | `84px` | normal | none |
| Label botão "Contato" | `avenir-lt-w01_35-light1475496, sans-serif` | `22px` | `700` | normal | normal | none |

### 3. ESPAÇAMENTO
| Elemento | Valor |
|---|---|
| Altura da seção | `639px` |
| Largura da seção | `1115px` (100%) |
| Botão width | `421px` (desktop) |
| Botão height | `68px` (desktop) |

### 4. LAYOUT
- 1 coluna, largura total
- Imagem de fundo em `fill`, cobrindo 100% da seção
- Título centralizado horizontalmente, posicionado na parte inferior da imagem
- Botão "Contato" centralizado, abaixo do título
- `border-radius: 0px` no botão

### 5. TEXTO EXATO
```
Engenharia que transforma planejamento em resultado
[botão] Contato
```

### 6. IMAGENS
| Contexto | Arquivo | URL (alta res) | Dimensões originais |
|---|---|---|---|
| Hero background | `e2fca5_e46cab3edb03460d9958c579299e7c84~mv2.png` | `https://static.wixstatic.com/media/e2fca5_e46cab3edb03460d9958c579299e7c84~mv2.png/v1/fill/w_1536,h_923,al_c,q_90,enc_auto/e2fca5_e46cab3edb03460d9958c579299e7c84~mv2.png` | 1536 × 923 px |
| Descrição | Obra de construção civil: galpão industrial em construção, guindaste amarelo, betoneira, trabalhadores com capacete laranja, placa "PAINEL DE GESTÃO" à direita | — | — |

### 7. BOTÕES/CTAs
| Atributo | Valor |
|---|---|
| Texto | "Contato" |
| Ação (href) | `https://wa.me/554491858094` (WhatsApp) |
| Fundo | `rgba(0, 0, 0, 0.5)` |
| Cor texto | `#FFFFFF` |
| Borda | `0.8px solid #FFFFFF` |
| border-radius | `0px` |
| Dimensões (desktop) | 421 × 68 px |
| Dimensões (mobile) | 132 × 50 px |
| Transição hover | `border-color 0.4s, background-color 0.4s` |

### 9. RESPONSIVIDADE (MOBILE)
| Elemento | Desktop | Mobile |
|---|---|---|
| Altura da seção | 639px | 492px |
| Título H2 font-size | 60px | **36px** |
| Título H2 line-height | 84px | **50.4px** |
| Botão "Contato" | 421×68px | **132×50px** |

### 10. ANIMAÇÕES/TRANSIÇÕES
- `transition: border-color 0.4s, background-color 0.4s` no botão

---

## 3. DIFERENCIAIS — Cabeçalho (`comp-lvl125i1`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → herda `#F7F7F7` |
| Cor do título | `rgb(253, 203, 10)` → **`#FDCB0A`** |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Line-height | Transform |
|---|---|---|---|---|---|
| Título "Diferenciais" | `roboto-bold, roboto, sans-serif` | `45px` | `400` | `54px` | none |

### 3. ESPAÇAMENTO
- Altura da seção: `228px`
- Sem padding explícito (layout absoluto Wix)

### 4. LAYOUT
- 1 coluna, texto centralizado

### 5. TEXTO EXATO
```
Diferenciais
```

---

## 4. DIFERENCIAIS — Experiência (`comp-kq3gmbsy`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → `#F7F7F7` |
| Título H3 | `#000000` |
| Texto de corpo | `#000000` |
| Título bold do item | `#000000` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Line-height |
|---|---|---|---|---|
| H3 "Experiência" | `roboto-bold, roboto, sans-serif` | `30px` | `400` | normal |
| Parágrafo corpo | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | `30.4px` |
| Span negrito (título do item) | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `700` | `30.4px` |

### 3. ESPAÇAMENTO
- Altura da seção: `1070px`
- Coluna texto: `x=68px`, `width=403px`
- Coluna imagem: `x=471px`, `width=577px`

### 4. LAYOUT
- **2 colunas**
- Coluna **esquerda** (403px): Texto
- Coluna **direita** (577px): Imagem
- `border-radius: 0px`

### 5. TEXTO EXATO
```
Experiência

Mais de 20 anos de experiência em Obras
Mais de 20 anos liderando obras comerciais e industriais de alta complexidade, trazendo
maturidade técnica e visão estratégica para cada projeto.

Expertise em obras com prazo crítico
Atuação comprovada em empreendimentos onde o prazo não é uma variável — é uma exigência
estratégica para o negócio do cliente.

Excelência em planejamento e gestão de obras
Utilização de metodologias modernas de planejamento, controle físico-financeiro e gestão
integrada, garantindo previsibilidade e tomada de decisão rápida.

Experiência em obras em ambientes em operação
Know-how em executar obras dentro de ambientes em operação, produtivos e em funcionamento,
minimizando impactos e riscos ao negócio do cliente.
```

### 6. IMAGENS
| Contexto | Arquivo | URL |
|---|---|---|
| Foto Experiência | `e2fca5_c07546cd1c644910bb58366afa56a97e~mv2.jpg` | `https://static.wixstatic.com/media/e2fca5_c07546cd1c644910bb58366afa56a97e~mv2.jpg` |
| Dimensões alvo | 577 × 1070 px (fill, center) | — |

---

## 5. DIFERENCIAIS — Foco (`comp-kq3h0xgu`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | `rgb(179, 207, 229)` → **`#B3CFE5`** (azul claro) |
| Título H3 | `#000000` |
| Texto de corpo | `#000000` |

### 2. TIPOGRAFIA
(Idêntica à seção Experiência)
| Elemento | Fonte | Tamanho | Peso | Line-height |
|---|---|---|---|---|
| H3 "Foco" | `roboto-bold, roboto, sans-serif` | `30px` | `400` | normal |
| Parágrafo corpo | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | `30.4px` |
| Span negrito | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `700` | `30.4px` |

### 3. ESPAÇAMENTO
- Altura da seção: `573px`
- Coluna imagem: `x=68px`, `width=490px`
- Coluna texto: `x=558px`, `width=490px`

### 4. LAYOUT
- **2 colunas** (490px cada)
- Coluna **esquerda**: Imagem
- Coluna **direita**: Texto

### 5. TEXTO EXATO
```
Foco

Foco na entrega no prazo
Cultura orientada a resultados, com processos desenhados para cumprir cronogramas
rigorosos sem comprometer qualidade e segurança.

Gestão de riscos e tomada de decisão estruturada
Identificação antecipada de gargalos, análise de cenários e respostas rápidas para
manter a obra sob controle mesmo em situações críticas.

Compromisso com padrões elevados de qualidade e segurança
Execução conforme normas técnicas, boas práticas de engenharia e rigorosos protocolos
de segurança, assegurando obras sólidas, duráveis e confiáveis.
```

### 6. IMAGENS
| Contexto | Arquivo | URL |
|---|---|---|
| Foto Foco | `e2fca5_4287287860f84b439ee75c8bfc3cb4d9~mv2.jpg` | `https://static.wixstatic.com/media/e2fca5_4287287860f84b439ee75c8bfc3cb4d9~mv2.jpg` |
| Dimensões alvo | 490 × 573 px | — |

---

## 6. DIFERENCIAIS — Capacidade (`comp-kq3h8bvt`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → `#F7F7F7` |
| Título H3 | `#000000` |
| Texto de corpo | `#000000` |

### 2. TIPOGRAFIA
(Idêntica às seções anteriores de Diferenciais)

### 3. ESPAÇAMENTO
- Altura da seção: `590px`
- Coluna texto: `x=68px`, `width=490px`
- Coluna imagem: `x=558px`, `width=490px`

### 4. LAYOUT
- **2 colunas** (490px cada)
- Coluna **esquerda**: Texto
- Coluna **direita**: Imagem

### 5. TEXTO EXATO
```
Capacidade

Engenharia orientada à eficiência e produtividade

Busca constante por soluções técnicas e construtivas que otimizem custos, prazos e
recursos, gerando maior retorno sobre o investimento.

Comunicação clara e gestão transparente
Relacionamento próximo com o cliente, relatórios objetivos e acompanhamento contínuo,
promovendo confiança e alinhamento em todas as fases do projeto.​

Capacidade técnica para obras complexas e dinâmicas​
Domínio de processos construtivos eficientes, interfaces técnicas e gestão de múltiplas
frentes de trabalho em ambientes de alta pressão operacional.
```

### 6. IMAGENS
| Contexto | Arquivo | URL |
|---|---|---|
| Foto Capacidade | `e2fca5_e395473ff7c443f99365db08bee7affe~mv2.jpg` | `https://static.wixstatic.com/media/e2fca5_e395473ff7c443f99365db08bee7affe~mv2.jpg` |
| Dimensões alvo | 490 × 590 px | — |

---

## 7. QUEM SOMOS (`comp-kq3hn3cv`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo (colorUnderlay, coberto pela imagem) | `rgb(0, 0, 0)` → `#000000` |
| Título "QUEM SOMOS" | `rgb(253, 203, 10)` → **`#FDCB0A`** |
| Texto de corpo | `rgb(0, 0, 0)` → `#000000` (sobre área clara da imagem) |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Line-height | Transform |
|---|---|---|---|---|---|
| "QUEM SOMOS" (`<p>`) | `roboto-bold, roboto, sans-serif` | `45px` | `400` | `54px` | none |
| Parágrafo corpo | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | `30.4px` | none |

### 3. ESPAÇAMENTO
- Altura da seção: `657px`
- Texto posicionado: `x=116px`, `width≈664px`

### 4. LAYOUT
- 1 coluna, largura total
- Imagem de fundo em `fill` cobrindo 100%
- Texto flutuante sobre a imagem (lado esquerdo-centro)

### 5. TEXTO EXATO
```
QUEM SOMOS

Uma empresa de Engenharia e Construção, criada a partir da experiência de mais de 20 anos
de atuação em obras comerciais e industriais. Unindo visão moderna de engenharia de alto
desempenho e rigorosas boas práticas de planejamento, gestão de obras e controle de prazos
para atender empresas que compreendem a importância estratégica de cada dia na implantação
de seus empreendimentos. Nossa atuação é orientada por eficiência, previsibilidade,
qualidade técnica e compromisso com resultados, garantindo que cada projeto seja conduzido
com máxima organização, transparência e foco absoluto na entrega no prazo, fator essencial
para o sucesso dos nossos clientes.
```

### 6. IMAGENS
| Contexto | Arquivo | URL | Dim. originais | Dim. alvo |
|---|---|---|---|---|
| Fundo Quem Somos | `e2fca5_a593a0b432cd4a509908a528faff77cc~mv2.jpg` | `https://static.wixstatic.com/media/e2fca5_a593a0b432cd4a509908a528faff77cc~mv2.jpg` | 799 × 599 px | 980 × 657 px |

---

## 8. SERVIÇOS — Seção Home (`comp-mkctdotj`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → `#F7F7F7` |
| Fundo dos cards brancos | `rgb(255, 255, 255)` → **`#FFFFFF`** |
| Label "Nossos serviços" | `#000000` |
| Título principal (amarelo) | `rgb(253, 203, 10)` → **`#FDCB0A`** |
| Nomes dos itens de serviço | `#000000` |
| Fundo botão "Leia mais" | `rgb(253, 203, 10)` → **`#FDCB0A`** |
| Borda botão | `0.8px solid rgb(253, 203, 10)` |
| Texto botão | `rgb(0, 0, 0)` → `#000000` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Line-height |
|---|---|---|---|---|
| Label H2 "Nossos serviços" | `avenir-lt-w01_35-light1475496, sans-serif` | `22px` | `700` | normal |
| Título "Oferecemos..." | `roboto-bold, roboto, sans-serif` | `45px` | `400` | `54px` |
| Nomes dos serviços (lista) | `avenir-lt-w01_35-light1475496, sans-serif` | `22px` | `700` | `30.8px` |
| Texto botão "Leia mais" | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | `22.4px` |

### 3. ESPAÇAMENTO
- Altura total da seção: `916px`
- Botão "Leia mais": `200 × 60 px`
- `border-radius: 0px` (botão e cards)

### 4. LAYOUT
- Parte superior: 1 coluna com label + título + botão (centralizado)
- Parte inferior: 2 blocos brancos (`#FFFFFF`) com listas de serviços

### 5. TEXTO EXATO
```
Nossos serviços

Oferecemos vários serviços para melhor atender você

[botão] Leia mais

Obras Comerciais e Industriais
Retrofit de fachadas e ambientes corporativos
Gestão e coordenação de obras
Outras soluções para o ambiente comercial e industrial
Adequação e Modernização de linhas de produção
Reformas e Ampliações
```

### 7. BOTÕES/CTAs
| Atributo | Valor |
|---|---|
| Texto | "Leia mais" |
| Link | `/serviços` |
| Fundo | `#FDCB0A` |
| Texto | `#000000` |
| Borda | `0.8px solid #FDCB0A` |
| border-radius | `0px` |
| Dimensões | `200 × 60 px` |
| Transição hover | `border-color 0.4s, background-color 0.4s` |

### 9. RESPONSIVIDADE (MOBILE)
- Nomes dos serviços reduzem para `font-size: 18px`
- Layout passa para 1 coluna (~320px de largura)

---

## 9. PORTFÓLIO / GALERIA (`comp-lvl125i31`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → `#F7F7F7` |
| Label "O que fazemos" | `#000000` |
| Título "Alguns Projetos" | `#FDCB0A` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso |
|---|---|---|---|
| H2 "O que fazemos" | `avenir-lt-w01_35-light1475496, sans-serif` | `22px` | `700` |
| "Alguns Projetos" | `roboto-bold, roboto, sans-serif` | `45px` | `400` |

### 3. ESPAÇAMENTO
- Altura da seção: `815px`
- Galeria width: `1021px`

### 4. LAYOUT
- Grade de galeria (Wix Pro Gallery)
- **25 imagens** no grid
- Cada thumbnail renderizado em ~921 × 518 px (proporção 16:9)

### 5. TEXTO EXATO
```
O que fazemos

Alguns Projetos
```

### 6. IMAGENS — Galeria (25 fotos de projetos)
Base URL: `https://static.wixstatic.com/media/`  
Para alta resolução, use: `[URI]/v1/fill/w_1200,h_800,al_c,q_90,enc_auto/[URI]`

| # | URI |
|---|---|
| 1 | `e2fca5_eb21f2bb6d1d4466a74fe1377e8f4648~mv2.jpeg` |
| 2 | `e2fca5_895a88e606fc487ca6b955d67c90d5ab~mv2.jpg` |
| 3 | `e2fca5_cb73600db3c4445bb4edeb3690c61332~mv2.jpeg` |
| 4 | `e2fca5_d5eb669ca8554d5fb2dcb39acb79e264~mv2.jpeg` |
| 5 | `e2fca5_74975119a90a49b7abc712b10ee570de~mv2.png` |
| 6 | `e2fca5_2e917dcc48f34ca9a04738c7231026f7~mv2.jpg` |
| 7 | `e2fca5_f6126e1f5109418bab6bf99d28149f93~mv2.jpg` |
| 8 | `e2fca5_192f0de4a5dd4127b0f22d0163ee6bd8~mv2.jpeg` |
| 9 | `e2fca5_ae12668902604da987adb3873d761c43~mv2.jpeg` |
| 10 | `e2fca5_7263a8108091402689e6bd2cab2bab53~mv2.jpeg` |
| 11 | `e2fca5_2d8c3781b23145879db68e9541350f5c~mv2.jpeg` |
| 12 | `e2fca5_f120cd7686ba469881840347e924ad40~mv2.jpg` |
| 13 | `e2fca5_660407ee906f4e52b061ccdb3f47f0e7~mv2.jpg` |
| 14 | `e2fca5_77037b1241694f2988177ad347f94171~mv2.jpeg` |
| 15 | `e2fca5_82bbd5c973974f219784645a9e3da980~mv2.jpeg` |
| 16 | `e2fca5_da897d3b40864d79935f2e4215fe8cf2~mv2.jpeg` |
| 17 | `e2fca5_ca805d2eb7d54d1f8e06770f8c556c3d~mv2.jpeg` |
| 18 | `e2fca5_1b96ea9444d14a5d8f51a155c5e31f0d~mv2.jpeg` |
| 19 | `e2fca5_86070076601145b5b078eec364fe41d4~mv2.jpg` |
| 20 | `e2fca5_87997415f75149b5a2883519ba8a71c6~mv2.jpg` |
| 21 | `e2fca5_9900f5f74bde45938fb4fcff8d93ff88~mv2.jpeg` |
| 22 | `e2fca5_32f936d7d4eb489682f22436e92e0259~mv2.jpeg` |
| 23 | `e2fca5_19ab62ef055d4040b639a691d80077b8~mv2.jpeg` |
| 24 | `e2fca5_f471b81200cb4c868f52732af5b1ab3d~mv2.jpeg` |
| 25 | `e2fca5_717cc2ec95734c70809f34d3e97e36d0~mv2.jpeg` |

---

## 10. CONTATO (`comp-kq6qq8ht`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → `#F7F7F7` |
| Títulos ("Contato", "Acesso Rápido") | `#000000` |
| Texto de corpo | `#000000` |
| Links internos | `#000000` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Line-height |
|---|---|---|---|---|
| Títulos "Contato" / "Acesso Rápido" | `avenir-lt-w01_35-light1475496, sans-serif` | `22px` | `700` | normal |
| Dados de contato (corpo) | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | `30.4px` |
| Links (Quem Somos, Diferenciais...) | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | normal |

### 3. ESPAÇAMENTO
- Altura da seção: `227px`

### 4. LAYOUT
- **3 colunas** (desktop):
  1. Logo (196 × 198 px)
  2. Dados de contato (texto)
  3. "Acesso Rápido" com links internos
- `border-radius: 0px`

### 5. TEXTO EXATO
```
Contato

Diretor Técnico: Eng. Alexandre Guedes Batista

(44) 9185-8094

engenharia.startup@outlook.com

Acesso Rápido

Quem Somos
Diferenciais
Serviços
```

### 6. IMAGENS
| Contexto | Arquivo | Dimensão no rodapé |
|---|---|---|
| Logo versão quadrada | `e2fca5_8d4b4462838b4f2b851481573118e9d0~mv2.jpeg` | 196 × 198 px |

---

## 11. FOOTER (`comp-kq51g9f0`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo | transparente → `#F7F7F7` |
| Cor do texto | `#000000` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso |
|---|---|---|---|
| Todos os textos | `avenir-lt-w01_35-light1475496, sans-serif` | `14px` | `400` |

### 3. ESPAÇAMENTO
- Altura da seção: `67px`

### 4. LAYOUT
- 1 linha horizontal, conteúdo centralizado

### 5. TEXTO EXATO
```
Política de Cookies   |   Política de Privacidade   |   © Criado com Wix.com
```

---

## 12. BOTÃO FLUTUANTE WHATSAPP (`comp-mkbdvw5h`)

### 1. CORES / ESTILOS
| Elemento | Valor |
|---|---|
| Fundo do botão | `rgba(255, 255, 255, 0)` → transparente |
| Ícone SVG (estado normal) | `rgb(29, 103, 205)` → **`#1D67CD`** (azul) |
| Ícone SVG (hover) | `rgb(104, 154, 222)` → **`#689ADE`** |
| border-radius | `7px` |
| box-shadow | `rgba(0,0,0,0) 3px 3px 10px 1px` (invisível no padrão) |

### 2. DIMENSÕES / POSIÇÃO
| Atributo | Valor |
|---|---|
| Posição | `fixed` (pinned layer) |
| Localização | Canto inferior direito |
| Tamanho da área clicável | 66 × 68 px |
| Tamanho do ícone SVG | 80 × 80 px |
| Link | `https://wa.me/554491858094` |

### 3. TRANSIÇÃO
- `transition: 0.2s, visibility` (suave ao aparecer/desaparecer)

---

---

# PÁGINA /serviços

---

## S1. HERO — Serviços (`comp-kqgmeaxb`)

### 1. CORES
| Elemento | Valor |
|---|---|
| Fundo da seção | transparente → `#F7F7F7` |
| Label H1 "Nossos serviços" | `#000000` |
| Título principal | `#FDCB0A` |
| Texto de corpo | `#000000` |
| Texto em negrito no corpo | `#000000` |

### 2. TIPOGRAFIA
| Elemento | Fonte | Tamanho | Peso | Line-height |
|---|---|---|---|---|
| H1 "Nossos serviços" | `avenir-lt-w01_35-light1475496, sans-serif` | `22px` | `700` | normal |
| Título "Oferecemos..." | `roboto-bold, roboto, sans-serif` | `45px` | `400` | `54px` |
| Parágrafo corpo | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `400` | `30.4px` |
| Trecho em negrito no corpo | `avenir-lt-w01_35-light1475496, sans-serif` | `16px` | `700` | `30.4px` |

### 3. ESPAÇAMENTO
- Altura da seção: `425px` (desktop)

### 4. LAYOUT
- 1 coluna

### 5. TEXTO EXATO
```
Nossos serviços

Oferecemos vários serviços para melhor atender você

Atuamos de forma completa e integrada no desenvolvimento de empreendimentos comerciais
e industriais, oferecendo soluções de engenharia que aliam planejamento estratégico,
gestão eficiente e execução de alto desempenho, sempre com foco em prazo, qualidade
e segurança.