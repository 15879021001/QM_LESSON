var arr = [{old:'old'},['old']]
// var new_arr = arr.slice()
var new_arr = JSON.parse(JSON.stringify(arr))
new_arr[0].old = 'new'
// console.log(new_arr)
new_arr[1][0] = 'new'
// console.log(new_arr)

//深浅拷贝有他的应用场景，更高效
