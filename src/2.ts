class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let current: ListNode = dummy;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;

  while (p1 !== null || p2 !== null || carry !== 0) {
    const x = p1?.val ?? 0;
    const y = p2?.val ?? 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    p1 = p1?.next ?? null;
    p2 = p2?.next ?? null;
  }

  return dummy.next;
}
