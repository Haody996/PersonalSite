FROM nginx:alpine
# Your repo already has /out. Copy it into nginx html folder.
COPY out/ /usr/share/nginx/html
EXPOSE 80