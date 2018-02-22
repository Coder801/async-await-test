const findInFiles = require('find-in-files');
const chai = require('chai');
const should = chai.should();
chai.use(require('chai-arrays'));

// Синхронно читаю файл и возвращаю в resolve массив совпавших строк
async function getFile() {
  return new Promise(resolve => {
    const array = [];
    findInFiles.find({
      'term': '<link.*',
      'flags': 'gi'
    }, '../src/', '.php').then(function(results) {
      for (var result in results) {
        var matches = results[result].matches;
        for (const string of matches) {
          array.push(string)
        }
      }
      resolve(array);
    });
  })
};


// Если выполнить из под ноды эту часть, получаю массив (describe надо закомментить)
(async () => {
  const result = await getFile();
  console.log(result);
})();


// Если пытаюсь через describe, то timeout
describe("check static url in index.php with async/await!", function (done) {
    it('should all be array', async function () {
        const result = await getFile();
        result.to.be.array();
    });
});
