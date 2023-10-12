// convert a binary chain into a decimal number
// binary is an object contaning the number of elements and elements with the address to the next one:
// SinglyLinkedListNode { int data; SinglyLinkedListNode next;}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function getNumber(binary) {
  binary = reverseLinkedList(binary);

  let decimalNumber = 0;
  let power = 0;
  let currentElement = binary;

  while (currentElement) {
    const digit = currentElement.data;
    decimalNumber += digit * 2 ** power;
    power++;
    currentElement = currentElement.next;
  }

  return decimalNumber;
}
