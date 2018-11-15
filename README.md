<p align="center">
<img width="600px" height="300px" style="max-width: 100%; margin-right: auto;  margin-left: auto; " src="https://raw.githubusercontent.com/nudelx/debounce-hook/master/img/img.png" ></p>

# React Debounce Hook

React hook with debounced onChange and after effect call back ( React > 16.7.0 )

`useDebounceHook (defaultValue| <default ''>, debounce: <default 400ms>, afterEffect: < optional callback>)`

You can provide an after effect callback which will be triggered after debounce onInputChange

## Usage

```js
import useHookPromise from 'promise-hook'

const App = () => {
  const [test, setTest] = useHookPromise(0)

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

![demo](https://raw.githubusercontent.com/nudelx/debounce-hook/master/img/demo.gif)

## Installation

```
 npm i promise-hook
```

or

```
 yarn add promise-hook
```

---

Made with ♥ by nudelx
