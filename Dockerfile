FROM node:alpine AS compiler
RUN ["apk", "add", "--update", "git"]
RUN ["mkdir", "/src"]
COPY package.json /src
COPY package-lock.json /src
WORKDIR /src
RUN ["npm", "install"]
COPY . .
ENV NODE_ENV "production"
ENV PORT 443
RUN ["npm", "run", "production"]
RUN ["rm", "-rf", "node_modules"]
RUN ["npm", "install", "--production"]

FROM node:alpine
COPY --from=compiler /src/dist /dist
COPY --from=compiler /src/node_modules /dist/node_modules
EXPOSE 80 443
CMD ["node", "/dist/server.js"]
