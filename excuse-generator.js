// Author: Settar Mengli
// Project: Excuse Generator
// Version: 1.0

const who = ["My dog", "My grandma", "My neighbor", "A stranger"];
const action = ["ate", "broke", "stole", "destroyed"];
const what = ["my homework", "my phone", "my car", "my laptop"];
const when = ["today", "yesterday", "last night", "this morning"];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
console.log(excuse);
