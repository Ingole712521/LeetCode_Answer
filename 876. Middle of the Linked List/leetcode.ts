interface ListNode {
    val: number;
    next: ListNode | null;
}

function middleNode(head: ListNode | null): ListNode | null {
    let fastPointer: ListNode | null = head; 
    let slowPointer: ListNode | null = head; 
    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;    
    }
    return slowPointer;
}
