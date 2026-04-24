# Estrutura e Outline - Associação Caminho Suave

## 1. Resumo do Avatar e Oferta
A **Associação Caminho Suave** tem como foco atrair pessoas apaixonadas por animais, voluntários engajados e potenciais adotantes responsáveis. A dor principal do nosso avatar primário é o sofrimento dos animais abandonados aliado à desconfiança sobre a destinação do dinheiro doado. A oferta central (Dream Outcome) é a oportunidade de salvar vidas através de doações únicas ou recorrentes (com opções de Pix, PayPal, PagSeguro), ancorada em uma promessa inegociável de **transparência total** (90% dos recursos vão para os animais). Através de provas sociais reais e relatórios públicos, quebramos a objeção principal ("meu dinheiro realmente chega aos animais?") e criamos uma comunidade de transformação.

---

## 2. Mapa do Site (Arquitetura de Navegação)

```text
[Header/Navegação Global]
├── Home (/)
├── Sobre (/sobre)
├── Como Ajudar (/como-ajudar)
├── Doações (/doacoes)
├── Transparência (/transparencia)
├── Notícias (/noticias)
├── Contato (/contato)
└── [Área Administrativa - Acesso Restrito] (/admin/login)
    └── Dashboard -> CRUD Notícias, PDFs, Relatórios, Usuários

[Footer Global]
├── Informações de Contato
├── Links Rápidos (Sobre, Transparência, Como Ajudar)
├── Redes Sociais
└── Legal (Política de Privacidade, Termos, Estatuto)
```

---

## 3. Outline Completo da HOME (Landing Page Principal)

1. **HERO (Atenção & Clareza)**
   - **Headline:** "Cada Doação Salva Uma Vida: Resgate, Abrigo e Adoção"
   - **Subheadline:** "Associação Caminho Suave - Transformando histórias de animais abandonados"
   - **Copy:** Animais abandonados nas ruas sofrem. Fome, frio, doenças. Muitos não sobrevivem 30 dias. Mas você pode mudar isso...
   - **CTA Primário:** [FAZER MINHA DOAÇÃO AGORA] (Botão Verde Suave - #2ecc71)
   - **Visual:** Fundo com imagem/hero real de resgate, overlay com gradiente azul para teal.

2. **PROBLEMA (Empatia & Dor)**
   - Destacar 4 dores: Sofrimento nas ruas, abrigos lotados, mortes solitárias, falta de confiança em ONGs.
   - Design: Ícones de impacto e layout de grades (bento grid).

3. **SOLUÇÃO (Mecanismo Único)**
   - Pilares: RESGATE -> ABRIGO & CUIDADO -> ADOÇÃO RESPONSÁVEL.
   - Mostrar como a ONG atua de forma prática em cada etapa.

4. **PROVA SOCIAL (Resultados & Confiança)**
   - **Números:** 500+ animais resgatados, 1.200+ adoções, 90% pros animais, 200+ voluntários.
   - **Histórias:** Carrossel/Grid com 6-8 histórias curtas (Antes/Depois, Nome, Transformação).

5. **VALUE STACK (Ancoragem de Valor)**
   - Comparativo: "O custo mensal do abrigo é R$ 6.500... O seu investimento para salvar uma vida começa com R$ 25".
   - Detalhar que os "Bônus" (Adoção, Voluntariado) são gratuitos, mas impulsionados pelas doações.

6. **TRANSPARÊNCIA (Quebra de Objeção Principal)**
   - Gráfico de pizza ou barra: 45% Alimentos, 30% Veterinário, 15% Abrigo, 10% Administrativo.
   - Selos de confiança: OSCIP, Auditada, Documentos Cartorários.

7. **URGÊNCIA/ESCASSEZ (Chamada para Ação)**
   - Mensagens como: "Temos apenas 10 vagas para apadrinhamento garantido neste mês" ou "A cada hora, 5 animais precisam de ajuda na região".

8. **FAQ (Perguntas Frequentes)**
   - Responder as top 8 objeções (Ex: Como cancelo minha doação recorrente? Posso visitar o abrigo?).

9. **CTA FINAL (Ação Direta)**
   - Headline forte resumindo a transformação.
   - Botões para: [Doação], [Voluntariado], [Adoção].

10. **FOOTER**
    - Contato, links, redes sociais, políticas de transparência.

---

## 4. Outline das 7 Páginas Adicionais

- **SOBRE:** Hero contando a missão; Sessão de história (timeline); Cards da equipe (fotos, cargos); Dashboard de números de impacto.
- **COMO AJUDAR:** Hub central com 4 grandes blocos interativos (Doações, Voluntariado, Adoção, Parcerias).
- **DOAÇÕES:** Página focada na conversão. Escolha entre Recorrente/Única. Formulário limpo (estilo checkout de alta conversão). Logos de meios de pagamento (Pix, PayPal, PagSeguro).
- **TRANSPARÊNCIA:** Portal de prestação de contas. Gráficos detalhados interativos, listas de PDFs (Auditorias, Relatórios financeiros mensais, Estatuto).
- **NOTÍCIAS:** Blog em formato de grid. Filtros no topo (Resgates, Adoções, Eventos). Post de destaque principal acima do grid.
- **CONTATO:** Formulário de e-mail integrado, mapa do Google incorporado (Rua Minas Gerais, 602, Catanduva/SP), dados diretos (telefone, email) em cards.
- **ÁREA ADMINISTRATIVA (Login/Dashboard):** Tela de login minimalista, caindo em um Dashboard com menu lateral (Notícias, Relatórios Financeiros, Controles de Usuários, Doações Registradas).

---

## 5. Hierarquia Visual Sugerida

1. **Botões de CTA Principais (Doar):** Cor Verde Suave (#2ecc71) - Devem atrair o olhar imediatamente, sendo os únicos elementos dessa cor na tela.
2. **Títulos e Headlines:** Cor Azul Profundo (#0056a3) - Transmitem a seriedade e o caráter institucional do projeto.
3. **Fundo de Seções de Confiança/Provas Sociais:** Tons pasteis (Cinza claro #f8f9fa ou Teal muito suave).
4. **Legendas e Textos Explicativos:** Cinza Escuro (#2c3e50).
5. **Destaques Secundários (Apoio Emocional/Alertas amigáveis):** Laranja suave e Rosa suave.

*Uso de fontes:*
- *Display/Headlines:* Grotesca/Sans moderna para transmitir clareza (ex: Space Grotesk ou Inter Bold).
- *Corpo do texto:* Inter ou Roboto para máxima legibilidade.

---

## 6. Elementos Técnicos

- **Navegação (React Router):** SPA (Single Page Application) com roteamento entre páginas para garantir carregamento instantâneo e não perder usuários em recarregamentos longos.
- **Sistema de Doações (Checkout):** Integração com APIs externas de pagamento (Stripe, PagSeguro ou PayPal) que retornam ao usuário com uma página de sucesso. Uso de formulário multi-step na página `/doacoes`.
- **Transparência (Arquivos):** Sistema de upload e listagem de PDFs linkados do banco de dados (que também alimentará a página de Transparência dinamicamente).
- **Autenticação:** Painel de administração protegido por JWT ou sessão OAuth via Firebase (se houver infraestrutura cloud). Somente e-mails de admins cadastrados podem logar.
- **Banco de Dados (CRUD):** Firestore ou Banco Relacional para armazenar: Posts (Notícias), Documentos Financeiros, e Lista de Usuários do Admin.

---

## 7. Notas de Implementação

- **Responsividade (Mobile-first):** O botão de "Fazer Doação" deve estar fixo na parte inferior da tela ou num menu header colado (sticky) em dispositivos móveis.
- **Acessibilidade:** Textos grandes, alto contraste nas cores institucionais (branco sobre azul).
- **SEO & Meta Tags:** Estruturar cada página com tags corretas para ranqueamento local ("adoção de animais catanduva", "doar abrigo animais").
- **Placeholders (Etapa 1):** Iniciaremos o front-end com os textos principais do outline acima e usaremos blocos "Lorem Ipsum" para parágrafos secundários que serão refinados na Etapa 2 de Copywriting.
- **Efeitos e Animações (Motion):** Entradas sutis em "fade-up" para as Histórias de Transformação e os Gráficos da seção Transparência.
