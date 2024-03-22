import DefaultTheme from 'vitepress/theme'

import Icon from "/Users/mamingzhe/Horse UI/packages/components/icon/index.ts"
import "/Users/mamingzhe/Horse UI/packages/theme-chalk/src/index.scss"

console.log(Icon);
export default {
    ...DefaultTheme,
    enhanceApp({app}){
        app.use(Icon)
    }
}