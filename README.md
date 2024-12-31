# React Native FlatList Performance Bug: Missing or Incorrect `keyExtractor`

This repository demonstrates a common performance issue in React Native's `FlatList` component when the `keyExtractor` prop is missing or incorrectly implemented.  Improper use can lead to slow scrolling, erratic rendering, and memory problems, especially with large datasets.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file demonstrates the correct implementation.

## Problem

When rendering a `FlatList` with many items, React Native needs a unique key for each item to efficiently update the list.  Without a proper `keyExtractor`, React Native struggles to identify changes, leading to suboptimal performance.

## Solution

Always provide a `keyExtractor` function that returns a unique string or number for every item in your data array. This allows React Native to correctly identify and update only the necessary items, resulting in a smoother user experience and improved memory management.