export const dashboardRoutes = {
  label: "Panel Principal",
  labelDisable: false,
  children: [
    {
      name: "Panel Principal",
      active: true,
      icon: "chart-pie",
      children: [
        {
          name: "Resumen",
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
    },
  ],
};

export const settingsRoutes = {
  label: "Configuración",
  labelDisable: false,
  children: [
    {
      name: "Configuración",
      active: true,
      icon: "cog",
      children: [
        {
          name: "Mis Usuarios",
          to: "/admin/usuarios/listar",
          exact: true,
          active: true,
        },
        {
          name: "Mis Permisos",
          to: "/admin/roles/listar",
          exact: true,
          active: true,
        },
        {
          name: "Mis Notificaciones",
          to: "/admin/notificaciones/listar",
          exact: true,
          active: true,
        },
      ],
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

export default [dashboardRoutes, settingsRoutes, helpRoutes, webmasterRoutes];
