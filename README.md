<p align="center">
<img width="300px" height="300px" style="max-width: 100%; margin-right: auto;  margin-left: auto; " src="https://raw.githubusercontent.com/nudelx/promise-hook/master/img/img.png" ></p>

# React Promise Hook

React hook with the promise that gives you an ability to react on after set effect

## Usage

```js
import usePromiseHook from 'promise-hook'

const App = () => {
  const [test, setTest] = usePromiseHook(0)

  if (!test) {
    setTimeout(() => {
      setTest(42).then(() => console.log('UPDATED'))
    }, 2000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <span role="img" aria-label="img">
          🤓
        </span>
        The Answer is {test}
      </header>
    </div>
  )
}

export default App
```

## Demo

![demo](https://raw.githubusercontent.com/nudelx/promise-hook/master/img/demo.gif)

## Installation

```
 npm i react-promise-hook
```

or

```
 yarn add react-promise-hook
```

---

Made with ♥ by nudelx
