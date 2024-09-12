# Project Start
 ```npm
npm i
npm run dev
 ```

# Zustand
 ```typescript
  import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
 ```
State Management: Zustand offers a simple and performant global state management solution. It’s easy to use and optimizes data sharing between components.

# React Query
```typescript
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}

```
Data Fetching: React Query automates data fetching, caching, and error handling. It enhances the efficiency and smoothness of API requests.

# React Router DOM

```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App

```
Routing: React Router DOM simplifies page transitions and URL management. It provides dynamic and hierarchical routing for single-page applications.

# Ant Design
✨ Features
🌈 Enterprise-class UI designed for web applications.
📦 A set of high-quality React components out of the box.
🛡 Written in TypeScript with predictable static types.
⚙️ Whole package of design resources and development tools.
🌍 Internationalization support for dozens of languages.
🎨 Powerful theme customization in every detail.
UI Components: Ant Design provides a comprehensive set of UI components that ensure design consistency and give your application a professional appearance

# Tailwind

In our project, we used Tailwind from CSS frameworks.

