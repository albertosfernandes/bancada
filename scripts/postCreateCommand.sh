#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Configurando o ambiente Bancada (DevContainer + Devbox)"

# 1. Instala o Devbox caso ainda não esteja disponível na imagem.
if ! command -v devbox >/dev/null 2>&1; then
  echo "📦 Instalando Devbox..."
  curl -fsSL https://get.jetify.com/devbox | bash -s -- -f
  export PATH="$HOME/.local/bin:/usr/local/bin:$PATH"
fi

# 2. Resolve e baixa os pacotes declarados no devbox.json.
#    Na primeira execução o Devbox também instala o Nix, então pode demorar.
echo "🔧 Instalando pacotes do Devbox (nodejs, awscli2, terraform, jq, git)..."
devbox install

# 3. Autoriza o direnv a carregar o ambiente automaticamente neste diretório.
if command -v direnv >/dev/null 2>&1; then
  echo "🔗 Habilitando direnv..."
  direnv allow || true
fi

# 4. Instala as dependências do frontend (bancada-frontend) dentro do ambiente Devbox.
echo "📚 Instalando dependências do frontend (bancada-frontend)..."
devbox run install:web

echo "✅ Ambiente pronto!"
echo "   • 'devbox shell'   → entra no shell com todas as ferramentas"
echo "   • 'devbox run dev' → sobe o frontend (bancada-frontend) em http://localhost:3000"
