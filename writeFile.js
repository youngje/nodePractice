var fs = require('fs');

fs.writeFile('./example.txt', 'Hello World', encoding='utf-8',
function(err) {
  if (err) throw err;
  console.log('파일을 작성했습니다.');
});
