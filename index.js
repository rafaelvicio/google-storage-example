 // Imports the Google Cloud client library
 const {Storage} = require('@google-cloud/storage');

 // Creates a client
 const storage = new Storage({
    projectId: 'stattrak-backend',
    keyFilename: 'storage.json',
  });

 const bucketName = 'trampos-storage';
 const filename = 'arquivo.txt';

 async function createBucket() {
    await storage.bucket(bucketName).upload(filename, {
        gzip: true,
        metadata: {
          cacheControl: 'public, max-age=31536000',
        },
      });
 }

 createBucket();