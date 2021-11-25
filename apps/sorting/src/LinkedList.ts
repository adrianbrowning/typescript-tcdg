import Sorter from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export default class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  get length(): number {
    if (!this.head) return 0;
    let tail = this.head;
    let counter = 1;
    while (tail.next) {
      tail = tail.next;
      counter++;
    }
    return counter;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Index out of bounds");
    if (index === 0) return this.head;

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is Empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error("List is Empty");
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHandValue = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHandValue;
  }

  print(): void {
    if (!this.head) return console.log("List is empty");
    let tail = this.head;
    const data: number[] = [];
    while (tail.next) {
      data.push(tail.data);
      tail = tail.next;
    }
    data.push(tail.data);
    console.log(data.join(" -> "));
  }
}
