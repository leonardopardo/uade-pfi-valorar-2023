export const dashboardRoutes = {
  label: "Lo Básico",
  labelDisable: false,
  children: [
    {
      name: "Comenzando",
      to: "/admin",
      icon: "rocket",
      exact: true,
      active: true,
    },
    {
      name: "Estadísticas",
      to: "/admin/estadisticas",
      icon: "chart-line",
      exact: true,
      active: true,
    },
  ],
};

export const apiRoutes = {
  label: "La API",
  labelDisable: false,
  children: [
    {
      name: "Autenticación",
      to: "/admin/aplicacion/autenticacion",
      icon: "puzzle-piece",
      exact: true,
      active: true,
    },
    {
      name: "Estimacion",
      to: "/admin/aplicacion/estimacion",
      icon: "poll",
      exact: true,
      active: true,
    },
    {
      name: "Sentimiento",
      to: "/admin/aplicacion/sentimiento",
      icon: "fire",
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
      name: "Mi Cuenta",
      to: "/admin/cuenta/mi-cuenta",
      icon: "cog",
      exact: true,
      active: true,
    },
    {
      name: "Mis Pagos",
      to: "/admin/cuenta/pagos",
      icon: "file-alt",
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

export default [dashboardRoutes, apiRoutes, accountRoutes, helpRoutes];
