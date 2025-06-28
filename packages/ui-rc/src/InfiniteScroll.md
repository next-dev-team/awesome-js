---
nav:
  title: UI Tailwind
toc: content
title:  Infinite Scroll Virtual 
---

This example demonstrates how to implement an infinite scrolling user list with virtualization using TanStack Virtual in React. As you scroll, new user data is fetched and rendered efficiently, ensuring smooth performance even with large datasets. The component combines infinite loading with virtual rendering for optimal UX.

# Basic

```tsx
import InfiniteScrollVirtual from './Loadmore/InfiniteScrollVirtual.tsx'

export default () => {
  return (
    <>
      <InfiniteScrollVirtual />
    </>
  )
}
```
