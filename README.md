# Caminho Suave - Associação Protetora de Animais

Este é o repositório do aplicativo web da Associação Caminho Suave.

## Como rodar localmente (Desenvolvimento)

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Deploy para o GitHub Pages

**Nota importante:** A integração direta do AI Studio não possui permissões para criar pastas `.github/workflows` diretamente por questões de segurança do GitHub. 

Para fazer o deploy via GitHub Actions:
1. Vá até o seu repositório no GitHub.
2. Clique na aba **"Settings"** e depois em **"Pages"**.
3. Em "Source", selecione **GitHub Actions**.
4. Clique em "create your own" ou "Static HTML", e copie o script de deploy do Vite. Ou simplesmente vá na aba "Actions" e crie um novo workflow colando o código de deploy.
