function introduce(name: string, age: number, skills: string[]) {
  return `저는 ${name}이고 ${age}살입니다. 주요기술은 ${skills.join(
    ", "
  )} 입니다.`;
}

console.log(introduce("박정우", 26, ["HTML", "CSS", "TypeScript"]));
