FROM node:16-alpine

# define and create some environment variables
ARG NODE_ENV=prod
ARG PORT=8000
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

WORKDIR /usr/src/app

COPY package*.json ./

RUN if [ "$NODE_ENV" = "dev" ]; then \
        npm install; \
    else \
        npm install --omit=dev; \
    fi

# copy the rest of the source code for the app
COPY ./ ./

EXPOSE $PORT

CMD npm run $NODE_ENV --loglevel=verbose