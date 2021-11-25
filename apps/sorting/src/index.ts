import NumbersCollection from "./NumbersCollection";
import CharacterCollection from "./CharacterCollection";
import LinkedList from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 5, 0, -1]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection("Xaayb");
console.log(characterCollection.data);
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(0);
linkedList.add(-10);
linkedList.add(7);

console.log(`length: ${linkedList.length}`);
linkedList.print();
linkedList.sort();
linkedList.print();
