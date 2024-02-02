const fs = require('fs');

const filePath = '/home/dabwitso/My-Projects/portfolio/node_modules/webpack-dev-server/lib/Server.js';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(/} catch {\s+}/g, '} catch (error) { }');

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Syntax error in catch block fixed successfully!');
  });
});
