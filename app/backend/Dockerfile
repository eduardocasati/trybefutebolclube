# Usar a imagem node:16.14-alpine como base

# Mudar para o diretório de trabalho /app-backend

# Copiar os package.json, package-lock.json e packages.npm para o container

# Instalar as dependências Node

# Copiar o restante dos arquivos da aplicação para o container

# Sinalize que aplicação expõe a porta 3001

# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
# Dica: Leia a seção Docker e Docker-compose no README para mais informações

FROM node:16.14-alpine
WORKDIR /app-backend
COPY . .
EXPOSE 3001
RUN npm install
ENTRYPOINT [ "npm", "run", "dev" ]
