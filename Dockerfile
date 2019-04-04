FROM node

COPY ./index.js /usr/echoservice/
COPY ./router.js /usr/echoservice/
COPY ./package.json /usr/echoservice/

RUN cd /usr/echoservice && npm install

CMD cd /usr/echoservice && node index.js

EXPOSE 9000