var fs = require('fs');

fs.watch('./example.txt'
  , {persistent: true, interval: 0}
  , function(curr, prev) {
    console.log('���� ������ �����ð�: ' + curr.mtime);
    console.log('���� ������ �����ð�: ' + prev.mtime);
    }
  );
