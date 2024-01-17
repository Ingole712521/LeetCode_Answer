class RandomizedSet {

  private Map<Integer, Integer> map;
  private Random random;
  private List<Integer> elements;

  public RandomizedSet() {
    map = new HashMap<>();
    random = new Random();
    elements = new ArrayList<>();
  }

  public boolean insert(int val) {
    if (!map.containsKey(val)) {
      elements.add(val);
      map.put(val, elements.size() - 1);
      return true;
    }
    return false;
  }

  public boolean remove(int val) {
    int lastIndex = map.getOrDefault(val, -1);
    if (lastIndex == -1) return false;
    Collections.swap(elements, lastIndex, elements.size() - 1);
    int otherSwappedValue = elements.get(lastIndex);
    map.put(otherSwappedValue, lastIndex);
    elements.remove(elements.size() - 1);
    map.remove(val);
    return true;
  }

  public int getRandom() {
    int randomIndex = random.nextInt(elements.size());
    return elements.get(randomIndex);
  }
}
