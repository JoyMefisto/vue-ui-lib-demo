# 🎨 Vue UI Lib Demo

A demo **UI library built with Vue 3**, created to showcase reusable component design, code organization, and testing practices.
The library includes **typed Vue components**, unit tests, and Storybook examples with full customization support through CSS variables.

## ✨ Project Goals

- Demonstrate how to design and publish a UI library to npm
- Build **clean, reusable, and typed components**
- Set up infrastructure with Vite, Vitest, and Storybook
- Provide **easy theming via CSS variables**
- Create a foundation for an extendable design system

---

## 🚀 Key Features

- 📦 **3 base components**: `UInput`, `UButton`, `UCard`
- 🔒 Full **TypeScript typings** for props, emits, and slots
- 🧪 **Unit tests** for each component (Vitest + @vue/test-utils)
- 📖 **Storybook** with live examples and playground
- 🎨 Theming via CSS variables → easily customized per project
- ⚡ Built with **Vite (lib mode)** → optimized output
- 🛠 ESLint + Prettier → consistent code style

---

## 🛠 Tech Stack

- [Vue 3](https://vuejs.org/) ⚡ (Composition API, `<script setup>`)
- [TypeScript](https://www.typescriptlang.org/) 📘
- [Vite](https://vite.dev/) ⚡ (lib mode)
- [Vitest](https://vitest.dev/) 🧪 (unit testing)
- [Storybook](https://storybook.js.org/) 📖 (docs & playground)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) ✨

---

## 📦 Installation & Usage

```bash
npm install vue-ui-lib-demo@latest
```

In your Vue project:

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueUiLibDemo from 'vue-ui-lib-demo'
import 'vue-ui-lib-demo/style'

// Example of theming (override CSS variables)
import './styles/index.css'

const app = createApp(App)
app.use(VueUiLibDemo)
app.mount('#app')
```

---

## 🧩 Components

### 🔘 UButton

```vue
<UButton @click="onClick">Primary</UButton>
<UButton variant="secondary">Secondary</UButton>
<UButton variant="warning" size="lg">Warning</UButton>
<UButton variant="danger" disabled>Error</UButton>
```

### 📝 UInput

```vue
<UInput v-model="email" type="email" placeholder="Enter email" />
<UInput placeholder="Search..." />
<UInput disabled value="Disabled field" />
```

### 📦 UCard

```vue
<UCard>
  <template #header>Card Header</template>
  Main card content
  <template #footer>Footer content</template>
</UCard>
```

---

## 📖 Storybook

Run Storybook for interactive docs:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

---

## 🧪 Testing

Run unit tests:

```bash
npm run test:unit
```

With coverage:

```bash
npm run test:unit -- --coverage
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── UButton/
 │    ├── UCard/
 │    └── UInput/
 ├── styles/
 │    ├── base.css
 │    ├── theme.css
 │    └── index.css
 └── index.ts
```

---

## 🎨 Theming

All component styles rely on CSS variables.
Override them in your project ('./styles/index.css') like so:

```css
:root {
  --btn-primary-bg: #4ade80;
  --btn-primary-color: #000;
  --color-card-bg: #f9fafb;
}
```

---

## ⚙️ Scripts

```bash
npm run dev            # start dev server
npm run build          # build the library
npm run lint           # lint code
npm run format         # auto-format with prettier
npm run storybook      # start Storybook
npm run test:unit      # run unit tests
```

---

## 📄 License

MIT License — free to use and modify.

---

## 💬 Feedback

If you have ideas for improvements, feel free to open an Issue or PR.
⭐️ If this project was useful — please give it a star on GitHub!
