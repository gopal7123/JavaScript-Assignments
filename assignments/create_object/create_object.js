function CreateObject(arr) {
    // Write your code here
    var obj = {}
    for (var i=0;i<arr.length;i++)  {
        var key = arr[i*2];
        var value = arr[2*(i)+1];
        obj[key] = value;
    }
    return obj
}

module.exports = CreateObject;
