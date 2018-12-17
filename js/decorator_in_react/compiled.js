var _class;

let MytestableClass = testable(_class = class MytestableClass {}) || _class;

function testable(target) {
  target.isTestable = true;
}

console.log(MytestableClass.isTestable);
