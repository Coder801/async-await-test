const findInFiles = require('find-in-files');

class throwException {
  constructor(message) {
    this.message = message;
    this.name = "Исключение, определенное пользователем";
  }
}

class Test {
  constructor(path = '.', files = '.', string = '.*', subString = '.*') {
    this.path = path;
    this.files = files;
    this.string = string;
    this.subString = subString;
  }

  getMatches(path, files, pattern) {
    return findInFiles.find({
      'term': pattern,
      'flags': 'gi'
    }, path, files);
  }

  formatData(objects) {
    const array = [];
    for (let object in objects) {
      array.push({
        file: object,
        matches: objects[object].matches
      });
    };
    return array;
  }

  checkMatches(array) {
    return array.some(item => item.match(this.subString))
  }

  formatMatches(item) {
    const result = {
      file: item.file
    };
    const matches = item.matches.reduce((total, current) => {
      if (current.match(this.subString)) {
        total.lines.push(current);
        total.count += 1;
      }
      return total
    }, {
      lines: [],
      count: 0
    });
    Object.assign(result, matches);
    return result
  }

  checkData(data) {
    const matches = [];
    data.forEach(item => {
      if (this.checkMatches(item.matches)) {
        matches.push(this.formatMatches(item))
      }
    });
    if (matches.length) {
      throw new throwException(`errors in files ${matches.length}`)
    }
    return matches;
  }

  async testFiles() {
    const matches = await this.getMatches(this.path, this.files, this.string);
    const formatedData = this.formatData(matches);
    try {
      this.checkData(formatedData)
    } catch (err) {
      console.log(err.message)
    }

    return 'done';
  }
}

const link = new Test('src/', '(.php|.html)', '<link.*', /^((?!getStaticUrl).)*$/);
link.testFiles();

/*
class TestFiles {
  getFiles(path, files, pattern) {
    return new Promise((resolve, reject) => {
      findInFiles.find({
        'term': pattern,
        'flags': 'gi'
      }, 'src/', '(.php|.html)').then(function(results) {
        const array = [];
        for (let result in results) {
          const lines = results[result].matches;
          const count = results[result].count;
          array.push({result, lines, count})
        }
        resolve(array);
      });
    });
  }
  readFiles(path, files, pattern) {
    return this.getFiles('src/', '(.php|.html)', '<link.*');
  }
}

const test = new TestFiles();
console.log(test.readFiles().then((item) => {
  console.log(item)
}));
*/
// (async() => {
//   const results = await getFile('<link.*');
//   for (result of results) {
//     console.log(result)
//   }
// })()
