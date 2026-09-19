# Bancada — frontend

SPA em React + Vite + TypeScript que serve como página principal do projeto
[Bancada](../README.md): landing page do projeto e área logada (perfil e
geração de tokens de API).

## Stack

- React 19 + TypeScript
- Vite + `@vitejs/plugin-react`
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- lucide-react (ícones)

## Rodando localmente

```bash
npm install
npm run dev
```

## Autenticação

Enquanto o backend (Cognito, ver arquitetura no README raiz) não está no ar,
a autenticação roda em modo demonstração, inteiramente no cliente
(`src/lib/auth.tsx`), persistida em `localStorage`. Credenciais de teste:

```
login: alberto@bancada.dev
senha: bancada
```

A geração de tokens de API (`src/lib/tokens.ts`) segue o mesmo princípio:
mock local, com uma interface pensada para ser substituída por chamadas
reais à API quando o backend existir.

## Estrutura

```
src/
  components/       componentes de UI (landing, layout, ícones de marca)
  layouts/          layout da área logada (sidebar)
  lib/              auth e tokens (mock, ver acima)
  pages/            páginas públicas e da área logada
```

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção (`tsc -b && vite build`)
- `npm run lint` — oxlint
- `npm run preview` — pré-visualiza o build
