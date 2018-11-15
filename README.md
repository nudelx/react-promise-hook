<p align="center">
<img width="600px" height="300px" style="max-width: 100%; margin-right: auto;  margin-left: auto; " src="https://raw.githubusercontent.com/nudelx/debounce-hook/master/img/img1.png" ></p>

# React Debounce Hook

React hook with debounced onChange and after effect call back ( React > 16.7.0 )

`useDebounceHook (defaultValue| <default ''>, debounce: <default 400ms>, afterEffect: < optional callback>)`

You can provide an after effect callback which will be triggered after debounce onInputChange

## Usage

```js
import useDebounceHook from 'debounce-hook'

const Input = ({
  id,
  defaultValue = '',
  debounce = 400,
  className,
  placeholder,
  name
}) => {
  const { value, onInputChange } = useDebounceHook(defaultValue, debounce, () =>
    console.log('UPDATE')
  )
  return (
    <div className={className}>
      <label htmlFor={id}>{name}</label>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  )
}
```

## Demo

![demo](https://raw.githubusercontent.com/nudelx/debounce-hook/master/img/demo.gif)

## Installation

```
 npm i debounce-hook
```

or

```
 yarn add debounce-hook
```

---

Made with ♥ by nudelx
