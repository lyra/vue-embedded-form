FROM node:8.12.0-stretch
MAINTAINER Albert Lacarta <albert.lacarta@lyra-network.es>

RUN yarn global add @vue/cli@3.1.3

# Project directories
RUN mkdir /opt/code && \
    mkdir /opt/form && \
    chown node.node /opt/code && \
    chown node.node /opt/form

CMD sleep 365d
USER node
