---
path: "/blog/addText.md"
date: "2019-03-09"
title: "문자열을 더하는 함수 만들기"
tags: ["study"]
---

문자열을 더하는 함수를 만들어 보자.

```js
function big(a,b){
    return a > b ? a : b 
}

function addText(first,second){
    let ans = new String()
    let carry = 0
    if(first.legnth < second.legnth){
        [first,second] = [second,first] // 긴 쪽을 first에 두기 위해서 swap
    }

    //계산의 용의를 위해 뒤집기
    first = first.split('').reverse().join('')
    second = second.split('').reverse().join('')
    
    for (const i in first) {
        carry = Number.parseInt(first[i]) + Number.parseInt(second[i] || 0) + carry // Pad를 써도 될듯
        // console.log(carry)
        ans += carry % 10
        carry = big(Math.floor((carry - carry % 10) / 10) , 0)
    }
    ans += (carry == '0'? '' : carry) //마지막 받아올림 처리
    return ans.split('').reverse().join('')
}


console.log(addText('157','4'), addText('995','444')) //test
```

03-12 추가
사실 Js에는 강력한 parseInt가 있기에, 다음 방법이 훨씬 낫다.
위 코드는 C같은 저급 언어에서도 사용할 수 있는 알고리즘을 생각해서 풀어 본 것이다. 실제로 쓴다면 매우 비효율적인 코드

```js
function simpleAdd(a,b){
    return Number.parseInt(a) + Number.parseInt(b) + ''
}

console.log(simpleAdd('157','4')) //test
```