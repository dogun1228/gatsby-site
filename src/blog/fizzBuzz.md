---
path: "/blog/fizzBuzz.md"
date: "2019-03-18"
title: "FizzBuzz 문제의 해법"
---

FizzBuzz 문제에 대한 글을 읽고 풀어 보았다.
문제는 다음과 같다.

    Write a program that prints the numbers from 1 to 100.
    But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
    For numbers which are multiples of both three and five print "FizzBuzz".

```js{numberLines: true}
for (let i = 1; i <= 100; i++) {
    if(!(i % 3 || i % 5)){
        console.log('FizzBuzz')
    }else if(!(i % 3)){
        console.log('Fizz')
    }else if(!(i % 5)){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}
```

다른 사람의 풀이를 보고 코드를 가져왔다.

```js{numberLines: true}
for (let i = 1; i <= 100; i++){
    console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}
```

||연산자를 잘 사용한 코드인 것 같았다.

다른 방법을 생각해 보았다.

```js{numberLines: true}
for (let i = 1; i <= 100; i++){
    console.log(i % 15 ? (i % 5 ? (i % 3 ? i : 'Fizz' ) : 'Buzz' ) : 'FizzBuzz')
}
```

 3항 연산자를 중첩했더니 가독성이 나빠졌다. 읽기 힘든 코드를 작성하고자 한다면 유용할 듯...
