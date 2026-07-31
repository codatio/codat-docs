FROM nginx:1.29.6-alpine-slim AS final

COPY --from=build /src/build /usr/share/nginx/html
COPY --from=build /src/nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
