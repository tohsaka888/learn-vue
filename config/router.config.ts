// 导入组件

import ChangeColor from "@/components/ChangeColor.vue";
import DebouncingExample from "@/components/DebouncingExample.vue";
import DynamicProp from "@/components/DynamicProp.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import TemplateSyntax from "@/components/TemplateSyntax.vue";
import App from "@/App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/change-color",
    name: "ChangeColor",
    component: ChangeColor,
  },
  {
    path: "/debouncing-example",
    component: DebouncingExample,
  },
  {
    path: "/dynamic-prop",
    component: DynamicProp,
  },
  {
    path: "/hello-world",
    component: HelloWorld,
  },
  {
    path: "/template-syntax",
    component: TemplateSyntax,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
