# Environment Develop

## Contexto
Este documento explica como montar o ambiente de desenvolvimento de cada um dos componentes.

## Componentes

### Front-end
Para componente de front-end é necessário criar o ambiente de devbox com os pacotes e dependencias necessárias onde quer que seja desenvolvido.

#### 📋 Pré-requisitos

##### ✔ Obrigatórios
- Git
- **Devbox instalado**
- Node.js (será fornecido pelo Devbox)

##### ✔ No Windows
- WSL2 (Ubuntu recomendado)
- VS Code (opcional, mas recomendado)

> ⚠️ **Não é necessário Docker** para trabalhar neste frontend.

---

## 🚀 Setup do Ambiente (recomendado)

### 1️⃣ Clone o repositório

```
git clone <url-do-repositorio>
cd Cloudpress
```

## 2️⃣ Inicie o ambiente com Devbox

Na raiz do projeto *mesmo local onde se encontra o arquivo devbox.json*:
```
devbox install
devbox shell
```

Isso irá:

- Instalar Node.js

- Configurar o ambiente de desenvolvimento

- Evitar dependências no seu sistema operacional