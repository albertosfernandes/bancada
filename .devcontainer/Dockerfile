# Imagem oficial do Devbox — já traz o Nix e o devbox CLI configurados
FROM ghcr.io/jetify-com/devbox:latest

WORKDIR /workspace

USER root
RUN mkdir -p /workspace && chown devbox:devbox /workspace
USER devbox

# Copia apenas os manifests primeiro (melhora cache do build)
COPY --chown=devbox:devbox devbox.json devbox.json
COPY --chown=devbox:devbox devbox.lock* devbox.lock

# Instala todos os pacotes declarados no devbox.json (gera/atualiza o lock)
RUN devbox install
