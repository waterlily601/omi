English | [简体中文](./README.CN.md) 

<p align="center"><img src="https://omijs.github.io/home/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - Web Components Framework</h2>

- 📶 **Signal**-driven reactive programming
- 🎉 [OMIU Preview](https://omi.cdn-go.cn/omiu/latest/) in progress & [OMIU Source Code](https://github.com/Tencent/omi/tree/master/packages/omiu)
- ⚡ **Tiny** size, **Fast** performance
- 🌐 Everything you need: **Web Components**, **JSX**, Router, Suspense, Directive, Tailwindcss...
- 💯 Both **object** oriented programming(OOP) and **data** oriented programming(DOP) are supported
- 💒 Harness **Constructable Stylesheets** to easily manage and share styles

```tsx
import { render, signal, tag, Component, h } from 'omi'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

@tag('counter-demo')
class CounterDemo extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>
        <button onClick={sub}>-</button>
        <span>{count.value}</span>
        <button onClick={add}>+</button>
      </>
    )
  }
}

render(<counter-demo />, document.body)
```

## Install 

```bash
npm i omi
```

To quickly create an Omi + Vite + TS/JS project:

```bash
$ npx omi-cli init my-app    # or create js project by: npx omi-cli init-js my-app
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

To quickly create an Omi + **Router** + **Signal** + **Suspense** + **Tailwindcss** + Vite + TS project:

```bash
$ npx omi-cli init-spa my-app  
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

### Packages

- Core packages
  - [`omi`](https://github.com/Tencent/omi/tree/master/packages/omi) - Implementation of omi framework.
  - [`omiu`](https://github.com/Tencent/omi/tree/master/packages/omiu) - Hope to create the best web components.
  - [`omi-router`](https://github.com/Tencent/omi/tree/master/packages/omi-router) - Create SPA of omi framework.
  - [`omi-cli`](https://github.com/omijs/cli) - To quickly create an Omi + Vite + TS/JS project.
- Starter kits (not published to npm)
  - [`omi-elements`](https://github.com/Tencent/omi/tree/master/packages/omi-elements) - Tailwind Element Omi UI KIT.
  - [`omi-starter-spa`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-spa) - A starter repo for building single page app using Omi + OmiRouter + Tailwindcss + TypeScript + Vite.
  - [`omi-starter-ts`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-ts) - A starter repo for building web app or reusable components using Omi in TypeScript base on Vite.
  - [`omi-starter-tailwind`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-tailwind) - A starter repo for building web app or reusable components using Omi + Tailwindcss + TypeScript + Vite.
  - [`omi-starter-js`](https://github.com/Tencent/omi/tree/master/packages/omi-starter-js) - A starter repo for building web app or reusable components using Omi in JavaScript base on Vite.
- Components
  - [`omi-auto-animate`](https://github.com/Tencent/omi/tree/master/packages/omi-auto-animate) - Omi version of @formkit/auto-animate.
  - [`omi-suspense`](https://github.com/Tencent/omi/tree/master/packages/omi-suspense) - Handling asynchronous dependencies.
  - [`tdesign-icons-omi`](https://github.com/omijs/tdesign-icons) - Cross framework icon collection based on tdesign.
- Directives  
  - [`omi-transition`](https://github.com/Tencent/omi/tree/master/packages/omi-transition) - Applying animations when an component is entering and leaving the DOM.
  - [`omi-ripple`](https://github.com/Tencent/omi/tree/master/packages/omi-ripple) - A lightweight component for adding ripple effects to user interface elements.
- Examples (not published to npm)
  - [`snake-game-2tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-2tier) - SNake Game with `Signal` class
  - [`snake-game-3tier`](https://github.com/Tencent/omi/tree/master/packages/snake-game-3tier) - SNake Game with reactivity functions
  - [`omi-tutorial`](https://github.com/omijs/tutorial) - Source code of omi tutorial.


**If you want to help the project grow, start by simply sharing it with your peers!**

- [Share via Dev.to](<https://dev.to/new?prefill=---%0Atitle%3A%20Omi%20-%20Web%20Components%20Framework%0A---- %20Home%3A%20%5Bomijs.org%5D(http%3A%2F%2Fomijs.org%2F)%20Github%3A%5Bhttps%3A%2F%2Fgithub.com%2FTencent%2Fomi%5D(https%3A%2F%2Fgithub.com%2FTencent%2Fomi)%0A-%20%F0%9F%93%B6%20**Signal**-driven%20reactive%20programming%0A-%20%F0%9F%8E%89%20%5BTailwind%20Element%20Omi%20UI%20KIT%5D(https%3A%2F%2Fomi.cdn-go.cn%2Felements%2Flatest%2F)%0A-%20%E2%9A%A1%20**Tiny**%20size%2C%20**Fast**%20performance%0A-%20%F0%9F%8C%90%20Everything%20you%20need%3A%20**Web%20Components**%2C%20**JSX**%2C%20Router%2C%20Suspense%2C%20Directive%2C%20Tailwindcss...%0A-%20%F0%9F%92%AF%20Both%20**object**%20oriented%20programming(OOP)%20and%20**data**%20oriented%20programming(DOP)%20are%20supported%0A-%20%F0%9F%92%92%20Harness%20**Constructable%20Stylesheets**%20to%20easily%20manage%20and%20share%20styles>)
- [Share via Twitter](https://twitter.com/intent/tweet?text=Web%20Components%20Framework%20%F0%9F%8E%89http%3A%2F%2Fomijs.org%2F%0A%0A%20Everything%20you%20need%3A%20Web%20Components%2C%20JSX%2C%20Router%2C%20Suspense%2C%20Directive%2C%20Tailwindcss...%20%0A%0A%20Tailwind%20Element%20Omi%20UI%20KIT%3E%20%F0%9F%92%AFhttps%3A%2F%2Fomi.cdn-go.cn%2Felements%2Flatest%2F)
- [Share via Facebook](https://www.facebook.com/sharer/sharer.php?u=http%3A//omijs.org)
- [Share via LinkedIn](http://www.linkedin.com/shareArticle?url=http%3A%2F%2Fomijs.org%2F)
- [Share via Pinterest](https://www.pinterest.com/pin/create/button?url=http://omijs.org/&media=https://repository-images.githubusercontent.com/36606437/66abfcfb-096b-4c9d-a290-77165213e605&description=Omi-Web%20Componnets%20Framework)
- [Share via Reddit](https://reddit.com/submit?url=http://omijs.org/&title=web%20components%20framework)
- [Share via StumbleUpon](https://www.stumbleupon.com/submit?url=http://omijs.org/&title=web%20components%20framework)
- [Share via Vkontakte](https://vk.com/share.php?url=http://omijs.org/)
- [Share via Weibo](https://service.weibo.com/share/share.php?url=https://omijs.org/&title=web%20components%20framework)
- [Share via Hackernews](https://news.ycombinator.com/submitlink?u=http://omijs.org/&t=web%20components%20framework)

Thank you!


## Usage

### TodoApp with reactivity functions

> Data oriented programming 

In data-oriented programming, the focus is on the data itself and the operations on the data, rather than the objects or data structures that hold the data. This programming paradigm emphasizes the change and flow of data, and how to respond to these changes. The TodoApp with reactivity functions is a good example of this, using the concepts of reactive programming, where the UI automatically updates to reflect changes in the data (i.e., the to-do list).


```tsx
import { render, signal, computed, tag, Component, h } from 'omi'

const todos = signal([
  { text: 'Learn OMI', completed: true },
  { text: 'Learn Web Components', completed: false },
  { text: 'Learn JSX', completed: false },
  { text: 'Learn Signal', completed: false }
])

const completedCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

const newItem = signal('')

function addTodo() {
  // api a
  todos.value.push({ text: newItem.value, completed: false })
  todos.update() // Trigger UI auto update
  
  // api b, same as api a
  // todos.value = [...todos.value, { text: newItem.value, completed: false }]

  newItem.value = '' // Changing the value type can automatically update the UI
}

function removeTodo(index: number) {
  todos.value.splice(index, 1)
  todos.update() // Trigger UI auto update
}

@tag('todo-list')
class TodoList extends Component {
  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    newItem.value = target.value
  }

  render() {
    return (
      <>
        <input type="text" value={newItem.value} onInput={this.onInput} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.value.map((todo, index) => {
            return (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => {
                      todo.completed = !todo.completed
                      todos.update() // Trigger UI auto update
                    }}
                  />
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </label>
                {' '}
                <button onClick={() => removeTodo(index)}>❌</button>
              </li>
            )
          })}
        </ul>
        <p>Completed count: {completedCount.value}</p>
      </>
    )
  }
}

render(<todo-list />, document.body)
```


### TodoApp with Signal Class

> Object oriented programming

In object-oriented programming, the focus is on the objects, which contain both data and methods to operate on the data. This programming paradigm emphasizes the interaction and cooperation between objects, and how to organize and manage code through object encapsulation, inheritance, and polymorphism. The TodoApp with reactivity functions can also be implemented in an object-oriented way, for example, by creating a TodoList class that contains the data of the to-do list and methods to operate on this data, as well as a `update` method to update the UI.

```tsx
import { render, Signal, tag, Component, h, computed } from 'omi'

type Todo = { text: string, completed: boolean }

class TodoApp extends Signal<{ todos: Todo[], filter: string, newItem: string }> {
  completedCount: ReturnType<typeof computed>

  constructor(todos: Todo[] = []) {
    super({ todos, filter: 'all', newItem: '' })
    this.completedCount = computed(() => this.value.todos.filter(todo => todo.completed).length)
  }

  addTodo = () => {
    // api a
    this.value.todos.push({ text: this.value.newItem, completed: false })
    this.value.newItem = ''
    this.update()

    // api b, same as api a
    // this.update((value) => {
    //   value.todos.push({ text: value.newItem, completed: false })
    //   value.newItem = ''
    // })
  }

  toggleTodo = (index: number) => {
    const todo = this.value.todos[index]
    todo.completed = !todo.completed
    this.update()
  }

  removeTodo = (index: number) => {
    this.value.todos.splice(index, 1)
    this.update()
  }
}

const todoApp = new TodoApp([
  { text: 'Learn OMI', completed: true },
  { text: 'Learn Web Components', completed: false },
  { text: 'Learn JSX', completed: false },
  { text: 'Learn Signal', completed: false }
])

@tag('todo-list')
class TodoList extends Component {
  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    todoApp.value.newItem = target.value
  }

  render() {
    const { todos } = todoApp.value
    const { completedCount, toggleTodo, addTodo, removeTodo } = todoApp
    return (
      <>
        <input type="text" value={todoApp.value.newItem} onInput={this.onInput} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onInput={() => toggleTodo(index)}
                  />
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </label>
                {' '}
                <button onClick={() => removeTodo(index)}>❌</button>
              </li>
            )
          })}
        </ul>
        <p>Completed count: {completedCount.value}</p>
      </>
    )
  }
}

render(<todo-list />, document.body)
```

We won't discuss which method is good or bad here. You can choose either method using omi.

## Auto Import h

vite.config.js:

```tsx
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxInject: "import { h } from 'omi'",
    jsxFactory: "h",
    jsxFragment: "h.f"
  }
})
```

You can inject code during construction, so you don't have to manually export `h`.

<!-- ## With Twind

```tsx
import { Component, define, h } from 'omi'

import install from '@twind/with-web-components'
import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
const withTwind = install(defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
}))

define('my-app', class extends withTwind(Component) {
  render() {
    return <h1 class="text-3xl font-bold underline">Hello world!</h1>
  }
})
``` -->

## Define Cross Framework Component

The case of using Omi component in Vue is as follows:

![](./assets/omi-vue.gif)

my-counter.ts:

```tsx
import { define, Component, h } from 'omi'

define('my-counter', class extends Component {

  static propTypes = {
    count: Number
  }

  static observedAttributes = ['count']

  attributeChangedCallback(name, oldValue, newValue) {
    this.state[name] = newValue
    this.update()
  }

  state = {
    count: null
  }

  install() {
    this.state.count = this.props.count
  }

  sub = () => {
    this.state.count--
    this.update()
    this.fire('change', this.state.count)
  }

  add = () => {
    this.state.count++
    this.update()
    this.fire('change', this.state.count)
  }

  render(props) {
    return [
      h('button', { onClick: this.sub }, '-'),
      h('span', null, this.state.count),
      h('button', { onClick: this.add }, '+')
    ]
  }
})
```

Using in Vue3:

```vue
<script setup>
import { ref } from 'vue'
// import omi component
import './my-counter'

defineProps({
  msg: String,
})

const count = ref(0)

const change = (e) => {
  count.value = e.detail
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <my-counter @change="change" :count="count" />
  <p>
    【Omi】 
  </p>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
     【Vue】 
    </p>
  </div>

</template>
```



## Contributors

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="./assets/contributors.png" />
</a>

## License

MIT © Tencent


  <!-- - [`tdesign-omi`](https://github.com/omijs/tdesign) - `[in progress...]`Cross framework components based on tdesign. [Preview](https://omijs.github.io/tdesign/) -->