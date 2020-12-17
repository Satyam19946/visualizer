import PriorityQueue from "./PathFinding/PriorityQueue.js";

var mypq = new PriorityQueue();

test("constructor test", () => {
  expect(mypq.heap()).toEqual([]);
});

test("Peak empty test", () => {
  expect(mypq.peek()).toEqual(undefined);
});

test("Insert into empty pq test", () => {
  mypq.push([1,10]);
  expect(mypq.peek()).toEqual([1,10]);
});

test("Insert into already populated pq test", () => {
  mypq.push([2,3]);
  expect(mypq.peek()).toEqual([2,3]);
});

test("Popping from populated pq", () => {
  expect(mypq.pop()).toEqual([2,3]);
});

test("Size of populated pq", () => {
  expect(mypq.size()).toEqual(1);
});


test("Inserting an element of same priority with different data", () => {
  mypq.push([3,10]);
  expect(mypq.heap()).toEqual([[1,10],[3,10]]);
});