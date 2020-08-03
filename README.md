# send email using node
Sample code to send email using node.js using gmail

## Docker setup
To run the node inside a docker, run

```
docker build -t <your_name>/node-email-app . 
docker run --name node-email-app -p 49160:8080 -d <your_name>/node-email-app
```

If you change anything to server.js then please delete the container, image and recreate & run the container again. 
