const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        name: 'index',
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        name: "aboutus",
        path: "aboutus",
        component: () => import("pages/AboutUs.vue")
      },
      {
        name: "entrepeneurs",
        path: "entrepeneurs",
        component: () => import("pages/Entrepeneurspage.vue")
      },
      {
        name: "leadinvestors",
        path: "leadinvestors",
        component: () => import("pages/LeadInvestors.vue")
      },
      {
        name: "individualinvestors",
        path: "individualinvestors",
        component: () => import("pages/IndividualInvestors.vue")
      },
      {
        name: "institutionalinvestors",
        path: "institutionalinvestors",
        component: () => import("pages/InstitutionalInvestors.vue")
      },
      {
        name: "terms",
        path: "terms",
        component: () => import("pages/Termspage.vue")
      },
      {
        name: "privacy",
        path: "privacy",
        component: () => import("pages/Privacypage.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
