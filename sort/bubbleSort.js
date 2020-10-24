// Array.prototype.bubbleSort = function() {
//     for ( let i = 0; i < this.length - 1; i++) {
//         for (let j = 0; j < this.length - 1 - i; j++) {
//             if (this[j] > this[j+1]) {
//                 const temp = this[j];
//                 this[j] = this[j + 1];
//                 this[j + 1] = temp; 
//             }
//         }
//     }
// }
// const arr = [5, 4, 3, 2, 1];
// arr.bubbleSort()


// // 实现数组中两项(索引i/j)的交换
// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return arr;
// }

Array.prototype.bubble = function bubble() {
    // this -> ary
    let _this = this,
        flag = false;
    // 控制循环多少轮
    for (let i = 0; i < _this.length - 1; i++) {
        // 控制每一轮循环多少次
        for (let j = 0; j < _this.length - 1 - i; j++) {
            // 交换位置
            if (_this[j] > _this[j + 1]) {
                swap(_this, j, j + 1);
                flag = true;
            }
        }
        if (!flag) break;
        flag = false;
    }
    return _this;
};

let ary = [12, 8, 24, 16, 1];
ary.bubble();
console.log(ary); 
