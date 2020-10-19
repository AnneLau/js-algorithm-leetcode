# js-algorithm

JavaScript 实现数据结构与算法



## Leetcode 算法练习

## [933. 最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/)

难度简单68收藏分享切换为英文接收动态反馈

写一个 `RecentCounter` 类来计算特定时间范围内最近的请求。

请你实现 `RecentCounter` 类：

- `RecentCounter()` 初始化计数器，请求数为 0 。
- `int ping(int t)` 在时间 `t` 添加一个新请求，其中 `t` 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 `[t-3000, t]` 内发生的请求数。

保证每次对 `ping` 的调用都使用比之前更大的 `t` 值。

 

**示例 1：**

```
输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [<u>1</u>, <u>100</u>]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [<u>1</u>, <u>100</u>, <u>3001</u>]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, <u>100</u>, <u>3001</u>, <u>3002</u>]，范围是 [2,3002]，返回 3
```

 

**提示：**

- `1 <= t <= 104`
- 保证每次对 `ping` 的调用都使用比之前更大的 `t` 值
- 至多调用 `ping` 方法 `104` 次

通过次数18,683

提交次数25,945

```js
var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```



## [237. 删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

难度简单778收藏分享切换为英文接收动态反馈

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 **要被删除的节点** 。

 

现有一个链表 -- head = [4,5,1,9]，它可以表示为:

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png)

 

**示例 1：**

```
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2：**

```
输入：head = [4,5,1,9], node = 1
输出：[4,5,9]
解释：给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

 

**提示：**

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。
- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
- 不要从你的函数中返回任何结果。

通过次数134,360

提交次数161,578



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```



## [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

难度简单1287收藏分享切换为英文接收动态反馈

反转一个单链表。

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

通过次数352,126

提交次数497,910

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    console.log(head,'head')
    let p1 = head;
    let p2 = null;
    while (p1) {
        console.log(p1,'我是p1===========》')
        const tmp = p1.next;
        console.log(tmp,'我是tmp')
        p1.next = p2;
         console.log(p1,'我是p1改变之后=====》')
        p2 = p1;
        p1 = tmp;
    }
    return p2;
};
```

## [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

难度中等5110收藏分享切换为英文接收动态反馈

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

通过次数597,843

提交次数1,543,436



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;
        console.log(l3, 'l3=======0900000')
        console.log(p3, 'p3=======0800000')
    }
    if( carry ) {
        p3.next = new ListNode(carry);
    }
    return l3.next;
};
```

## [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

难度简单413收藏分享切换为英文接收动态反馈

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

**示例 1:**

```
输入: 1->1->2
输出: 1->2
```

**示例 2:**

```
输入: 1->1->2->3->3
输出: 1->2->3
```

通过次数150,560

提交次数291,739



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p = head;
    while (p && p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next
        } else {
            p = p.next;
        }
    }
    return head;
};
```

## [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

难度简单829收藏分享切换为英文接收动态反馈

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 `true` 。 否则，返回 `false` 。

 

**进阶：**

你能用 *O(1)*（即，常量）内存解决此问题吗？

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

 

**提示：**

- 链表中节点的数目范围是 `[0, 104]`
- `-105 <= Node.val <= 105`
- `pos` 为 `-1` 或者链表中的一个 **有效索引** 。

通过次数273,283

提交次数543,745



```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    while (p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 === p2) {
            return true;
        }
    }
    return false
};
```





## [349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

难度简单240收藏分享切换为英文接收动态反馈

给定两个数组，编写一个函数来计算它们的交集。

 

**示例 1：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

**示例 2：**

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
```

 

**说明：**

- 输出结果中的每个元素一定是唯一的。
- 我们可以不考虑输出结果的顺序。

通过次数98,926

提交次数139,409

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//方法一：
// var intersection = function(nums1, nums2) {
//     return [...new Set(nums1)].filter(n => nums2.includes(n))
// };
// 方法二：
var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => {
         map.set(n, true)
    })
    const res = [];
    nums2.forEach(n => {
        if(map.get(n)) {
            res.push(n);
            map.delete(n)
        }      
    })
    return res;
};
```

## [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

难度简单1924收藏分享切换为英文接收动态反馈

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1:**

```
输入: "()"
输出: true
```

**示例 2:**

```
输入: "()[]{}"
输出: true
```

**示例 3:**

```
输入: "(]"
输出: false
```

**示例 4:**

```
输入: "([)]"
输出: false
```

**示例 5:**

```
输入: "{[]}"
输出: true
```

通过次数436,165

提交次数1,011,029

```js
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     if(s.length % 2 === 1) {
//         return false;
//     }
//     const stack = [];
//     for (i = 0; i < s.length; i++) {
//         const c = s[i];
//         if (c === '(' || c === '{' || c === '[') {
//             stack.push(c);
//         } else {
//             const t = stack[stack.length - 1];
//             if (
//                 (t === '(' && c === ')') ||
//                 (t === '{' && c === '}') ||
//                 (t === '[' && c === ']')
//             ) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// };
//优化后的
var isValid = function(s) {
    if(s.length % 2 === 1) {
        return false;
    }
    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    for (i = 0; i < s.length; i++) {
        const c = s[i];
        if (map.has(c)) {
            stack.push(c);
        } else {
            const t = stack[stack.length - 1];
            if (map.get(t) === c) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
```

## [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

难度简单9389收藏分享切换为英文接收动态反馈

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

**示例:**

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

通过次数1,473,821

提交次数2,965,004

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const n2 = target - n;
        if (map.has(n2)) {
            return [map.get(n2), i]
        } else {
            map.set(n, i)
        }
    }
};
```

## [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

难度中等4476收藏分享切换为英文接收动态反馈

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

通过次数696,833

提交次数1,948,213

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let res = 0;
    const map = new Map();
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }
    return res;
};
```



## [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)

难度困难793收藏分享切换为英文接收动态反馈

给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。

 

**示例：**

```
输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"
```

 

**提示：**

- 如果 S 中不存这样的子串，则返回空字符串 `""`。
- 如果 S 中存在这样的子串，我们保证它是唯一的答案。

通过次数84,273

提交次数213,812

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0;
    let r = 0;
    const need = new Map();
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    let needType = need.size;
    let res = '';
    while (r < s.length) {
        const c = s[r];
        if(need.has(c)) {
            need.set(c, need.get(c) - 1)
            if(need.get(c) === 0) needType -= 1;
        }
        while(needType === 0) {
            const newRes = s.substring(l, r + 1);
            if (!res || newRes.length < res.length) {
                res = newRes;
            }
            const c2 = s[l];
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1)
                if(need.get(c2) === 1) needType += 1;
            }
            l += 1;
        }
        r++;
    }
    return res;
};
```

