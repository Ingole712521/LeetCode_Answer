class MyQueue {
    private Deque<Integer> stkInput = new ArrayDeque<>();
    private Deque<Integer> stkOutput = new ArrayDeque<>();
    public MyQueue() {
    }
    public void push(int x) {
        stkInput.push(x);
    }
    public int pop() {
        move();
        return stkOutput.pop();
    }
    public int peek() {
        move();
        return stkOutput.peek();
    }
    public boolean empty() {
        return stkInput.isEmpty() && stkOutput.isEmpty();
    }
    private void move() {
        if (stkOutput.isEmpty()) {
            while (!stkInput.isEmpty()) {
                stkOutput.push(stkInput.pop());
            }
        }
    }
}
