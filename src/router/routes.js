const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/create",
    name: "create",
    component: () => import("layouts/InnerLayout.vue"),
    children: [{ path: "", component: () => import("pages/NewMeeting.vue") }],
  },

  {
    path: "/open",
    name: "open",
    component: () => import("layouts/InnerLayout.vue"),
    children: [{ path: "", component: () => import("pages/OpenMeeting.vue") }],
  },

  {
    path: "/players",
    name: "players",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/EditPlayers.vue") },
    ],
  },

  // {
  //   path: "/rules",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("src/pages/ShowRules.vue") },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
