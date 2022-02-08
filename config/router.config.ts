// 导入组件
import ChangeColor from "../src/components/ChangeColor.vue";
import DebouncingExample from "../src/components/DebouncingExample.vue";
import DynamicProp from "../src/components/DynamicProp.vue";
import HelloWorld from "../src/components/HelloWorld.vue";
import TemplateSyntax from "../src/components/TemplateSyntax.vue";
import QrLoginExample from "../src/components/QrLoginExample.vue";
import ComputedProperties from "../src/components/ComputedProperties.vue";
import Watcher from "../src/components/Watcher.vue";
import ReactiveRef from "../src/components/ReactiveRef.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

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
  {
    path: "/qrlogin-example",
    component: QrLoginExample,
  },
  {
    path: "/computed-properties",
    component: ComputedProperties,
  },
  {
    path: "/watcher",
    component: Watcher,
  },
  {
    path: '/reactive-ref',
    component: ReactiveRef
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
