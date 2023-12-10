export const dashboardRoutes = {
  label: "Lo Básico",
  labelDisable: false,
  children: [
    {
      name: "Comenzando",
      to: "/admin/panel/principal",
      exact: true,
      active: true,
    },
    {
      name: "Estadísticas",
      to: "/admin/panel/estadisticas",
      exact: true,
      active: true,
    },
  ],
};

export const settingsRoutes = {
  label: "Autenticación",
  labelDisable: false,
  children: [
    {
      name: "Aplicación",
      to: "/admin/configuracion/aplicacion",
      exact: true,
      active: true,
    },
  ],
};

export const accountRoutes = {
  label: "Cuenta",
  labelDisable: false,
  children: [
    {
      name: "Cuenta",
      to: "/admin/cuenta",
      exact: true,
      active: true,
    },
  ],
};  

export const helpRoutes = {
  label: "Ayuda",
  labelDisable: false,
  children: [
    {
      name: "Ayuda",
      active: true,
      icon: "info-circle",
      children: [
        {
          name: "Tutoriales",
          to: "/admin/ayuda/tutoriales",
          exact: true,
          active: true,
        },
        {
          name: "Faqs",
          to: "/admin/ayuda/faqs",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const webmasterRoutes = {
  label: "Webmaster",
  labelDisable: false,
  children: [
    {
      name: "Development",
      active: true,
      icon: "code",
      children: [
        {
          name: "Log",
          to: "/dev/logs",
          exact: true,
          active: true,
        },
        {
          name: "Acciones",
          to: "/dev/actions",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export const callbacksRoutes = {
  label: "Callbacks",
  labelDisable: false,
  children: [
    {
      name: "Callbacks",
      active: true,
      icon: "code",
      children: [
        {
          name: "chekcout",
          to: "/admin/callbacks/checkout",
          exact: true,
          active: true,
        },
      ],
    },
  ],
};

export default [
  dashboardRoutes,
  settingsRoutes,
  accountRoutes,
  helpRoutes,
  webmasterRoutes,
  callbacksRoutes,
];
