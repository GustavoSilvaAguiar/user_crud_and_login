import homepageView from "@/modules/home/views/homepageView.vue";
import EditView from "@/modules/home/views/editView.vue";

export default [
  {
    path: "/home",
    component: homepageView,
  },

  {
    path: "/home/edit",
    component: EditView,
    meta: {
      breadcrumbs: [
        {
          text: "Home",
          href: "/home",
        },
        {
          text: "Edit",
          href: "/home/edit",
        },
      ],
    },
  },
];
