function hasCycle(head: ListNode | null): boolean {
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer) {
            return true;
        }
    }
    return false;
}
