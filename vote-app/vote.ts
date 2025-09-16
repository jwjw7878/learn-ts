type Voter = string | number;

function vote(voter: Voter): string {
  if (typeof voter === "string") {
    return `${voter}님이 찬성`;
  } else if (typeof voter === "number") {
    return `${voter}님이 반대`;
  } else {
    return "투표자 정보를 알 수 없음";
  }
}

console.log(vote("찬성"));
console.log(vote(1024));
