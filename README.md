# stackframe-react-icons
NPM package that allows you to find the corresponding icon based on a file or directory name.

> Based on [`vscode-icons`](https://github.com/vscode-icons/vscode-icons), MIT licensed.

## Installation
```bash
npm install @stackframe/react-icons
```

## Usage
### JavaScript
```javascript
const { FileIcon } = require("@stackframe/react-icons")

const MyComponent = () => {
  return (<FileIcon name="my-file.js" isFolder={false} />)
}

module.export = MyComponent
```

### TypeScript
```typescript
import React from "react"
import { FileIcon } from "@stackframe/react-icons"

const MyComponent: React.FC = () => {
  return (<FileIcon name="my-file.js" isFolder={false} />)
}

export default MyComponent
```

## License
Copyright (c) 2016 Roberto Huertas (vscode-icons)

Copyright (c) 2025 StackFrame