import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import {
  ElButton,
  ElSlider,
  ElRadio,
  ElCheckbox,
  ElInputNumber,
} from "element-plus";
const app = createApp(App);
app.use(ElementPlus);
const list = [ElButton, ElSlider, ElRadio, ElCheckbox, ElInputNumber];
for (const el of list) {
  app.use(el);
}
app.mount("#app");
