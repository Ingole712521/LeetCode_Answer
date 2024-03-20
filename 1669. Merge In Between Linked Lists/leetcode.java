class Solution {
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode beforeA = list1; 
        ListNode afterB = list1; 
        for (int i = 0; i < a - 1; i++) {
            beforeA = beforeA.next;
        }
        for (int i = 0; i < b; i++) {
            afterB = afterB.next;
        }
        beforeA.next = list2;
        ListNode endOfList2 = beforeA.next; 
        while (endOfList2.next != null) {
            endOfList2 = endOfList2.next;
        }
        endOfList2.next = afterB.next;
        afterB.next = null;
        return list1; 
    }
}
