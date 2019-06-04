---
path: "/blog/gamemake1.md"
date: "2019-04-14"
title: "던전 탐험 웹게임 만들기-1 기획"
tags: ["makegame","dungeon"]
---

오늘부터는 그동안 만들기로 생각해왔던 멀티 플레이가 가능한 웹 게임을 만들어보고자 한다.

혹시 "와글와글 던전"이나 "던전 레이더스"같은 보드 게임을 플레이해본 적이 있는가? 이 게임에서 플레이어들은 카드로 구성된 던전을 탐험하며 서로 협동과 견제를 통해 던전을 클리어하면서도 자신의 이익을 챙겨야 한다. 저번에 친구들과 보드게임 샵에 가서 던전 레이더스를 플레이 해 보았기 때문에, 이 게임을 모티브로 보드게임 느낌의 웹 게임을 만들어 보도록 하겠다.

기획한 게임의 구성은 다음과 같다.

```txt
1.게임의 목표
    4명의 플레이어들은 총 3개의 6스테이지로 구성된 던전을 클리어하여야 하며, 모든 플레이어가 게임 오버되면 보석을 모은 개수에 상관없이 패배한다.
    플레이어들이 게임을 클리어하면, 직업별로 각 보석에 차등을 두어 점수를 배분한다. 예를 들어, 붉은 보석은 도적에겐 1점, 마법사에게는 3점으로 친다.
    플레이어들은 보석 외에도 각종 방법으로 점수를 얻을 수 있고, 점수를 제일 많이 얻은 플레이어가 게임에서 승리한다.
2.플레이어
    각 플레이어는 하나의 직업과, 직업별로 다른 최대 체력, 직업마다 가지는 시작 아이템, 직업별로 받는 시작 아이템과 1~5까지의 숫자가 적힌 공격력 카드, 직업별 효과를 지닌다.
3.게임의 진행 과정
    게임이 시작되면 우선 3개의 던전의 순서와 종류를 정한다. 각 던전은 3가지 색깔 중 하나이며, 각 색깔별로 하나의 던전을 무작위로 선택한다.
    선택한 후에는, 랜덤한 순서로 직업을 선택하되, 무작위로 선택된 3개의 아직 선택되지 않은 직업 중에서 선택하도록 한다.
    직업 선택이 끝난 뒤에는 맨 처음 던전부터 순서대로 탐험하되, 다음 던전으로 넘어갈 때마다 이벤트 카드를 하나씩 공개해 적용한다.
4.던전의 탐험
    던전의 탐험이 시작되면, 모든 플레이어는 1~5까지의 공격력 카드를 지급받는다.
    그 후, 던전의 스테이지를 공개해 진행한다.
    스테이지는 다음과 같은 종류가 있다.
    a.몬스터 인카운트
        몬스터 인카운트는 제일 흔한 스테이지이며, 각 플레이어는 스테이지에 기록된 방법에 따라 공격력 카드를 공개한다.
        그 뒤, 공격력 카드의 합이 몬스터의 체력을 넘었다면, 숫자가 제일 작은 카드를 낸 플레이어부터 등수를 매겨 각 등수에 따른 보상을 받되, 같은 등수의 플레이어가 한 명 이상이면 둘 모두 보상을 받지 못한다.
        만약 공격력 카드의 합이 몬스터의 체력을 넘지 못했다면, 숫자가 제일 큰 카드를 낸 플레이어부터 등수를 매겨 등수에 따를 피해를 받되, 같은 등수의 플레이어가 한 명 이상이면 피해를 나누어 받는다(소숫점 내림)
    b.함정 인카운트
        각 플레이어는 공격력 카드를 공개한다, 중복된 숫자의 카드를 낸 플레이어들은 함정 인카운트의 지시에 따라 피해를 받는다.
    c.보물 인카운트
        각 플레이어는 공격력 카드를 공개한다, 중복된 카드를 내지 않은 플레이어는 공격력 카드의 숫자에 알맞은 아이템을 얻거나 카드의 지시에 따른다.
    6번째 스테이지는 무조건 몬스터 인카운트이며, 각 던전별로 고정된 강력한 몬스터가 출현하고, 큰 보상과 동시에 특수한 효과를 가지고 있다.
5.이벤트 카드
    이벤트 카드는 공개된 이후로 게임이 끝날 때 까지 영향을 미치며, 각각 특유의 효과를 가지고 있다.
6.아이템 카드
    아이템 카드는 카드에 적혀있는 타이밍에만 쓸 수 있으며, 각각 특유의 효과를 가지고 있다.
```

게임의 진행 과정에 쓰이는 각 카드들은 게임의 기본 시스템 구성이 완료된 이후에 진행하기로 계획했다.

Node.js를 이용해 어떻게 진행하면 좋을지 고민해 봐야겠다.