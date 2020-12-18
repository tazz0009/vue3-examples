# vue3-examples

## Project setup
```
npm install -g @vue/cli
vue create t03
cd t03
npm install
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init -p
```

### tailwind.config.js
```
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

### postcss.config.js
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### ./assets/style.css
```
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/main.js
```
import './assets/style.css'
```

### vue-router
```
npm install vue-router@next
```

### marked
```
npm i marked
```

### firebase
```
npm install --save firebase
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
