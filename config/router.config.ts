// 导入组件
import ChangeColor from "../src/components/ChangeColor.vue";
import DebouncingExample from "../src/components/DebouncingExample.vue";
import DynamicProp from "../src/components/DynamicProp.vue";
import HelloWorld from "../src/components/HelloWorld.vue";
import TemplateSyntax from "../src/components/TemplateSyntax.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/change-color",
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

export default router;
