@testable
class MytestableClass{

}

function testable(target){
    target.isTestable = true
}

console.log(MytestableClass.isTestable)
