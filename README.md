### `slate-js-top-level-nodes-limiter`
A [**Slate**](https://github.com/ianstormtaylor/slate) plugin to run a callback function on every change when the specified limit for the top level nodes is reached. The callback functions are provided the `change` method as an argument when invoked.

```js
import topNodesLimiter from 'slate-js-top-level-nodes-limiter'
import { Editor } from 'slate-react'



const overLimitCb = (change) => {
    // do something    
}
const inLimitCb = (change) => {
    // do something
}
// Add the plugin to your set of plugins...
const plugins = [
    topNodesLimiter({limit: 5}, overLimitCb, inLimitCb)
]

// And later pass it into the Slate editor...
<Editor
  ...
  plugins={plugins}
/>
```