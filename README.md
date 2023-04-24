# Problem: 

When downloading a file with a SESSION_DRIVER set to other than "cookie", the downloaded PDF file is corrupt.

# To reproduce:

1. yarn
2. Create an .env file with the contents of .env.example
2. yarn dev
3. Go to http://localhost:3333/orders/create
4. Click "Generate PDF" button.
5. A corrupt file will be downloaded
6. You can verify that this doesn't happen if you change the SESSION_DRIVER env variable to "cookie"
```

