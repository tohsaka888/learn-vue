type Catalogue = {
  title: string;
  date: string;
  path: string;
};

export const catalogue: Catalogue[] = [
  {
    title: "组件实例",
    date: "2022-2-4",
    path: "/change-color",
  },
  {
    title: "模板语法",
    date: "2022-2-4",
    path: "/template-syntax",
  },
  {
    title: "动态参数",
    date: "2022-2-4",
    path: "/dynamic-prop",
  },
  {
    title: "Data Property 和方法",
    date: "2022-2-5",
    path: "/debouncing-example",
  },
  {
    title: "扫描二维码登录实例",
    date: "2022-2-6",
    path: "/qrlogin-example",
  },
  {
    title: "计算属性",
    date: "2022-2-7",
    path: "/computed-properties",
  },
  {
    title: "监听器",
    date: "2022-2-7",
    path: "/watcher",
  },
  {
    title: "Reactive&Ref",
    date: "2022-2-8",
    path: "/reactive-ref",
  },
  {
    title: "插槽",
    date: "2022-2-15",
    path: "/slot-example",
  },
];
