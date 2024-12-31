The solution involves correctly implementing the `keyExtractor` prop in the `FlatList` component.  This ensures that React Native can efficiently update the list by assigning a unique key to each item.  Here's how to fix the code:

```javascript
// Correct usage
<FlatList
  data={largeDataset}
  keyExtractor={(item) => item.id} // Or another unique identifier
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

Make sure that the `id` field (or whatever field you use) is unique for each item in your `largeDataset` array.  If your data doesn't have a unique ID, you'll need to add one.