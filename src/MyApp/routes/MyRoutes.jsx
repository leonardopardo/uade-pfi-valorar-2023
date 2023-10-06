//#region Imports
import MyAppLayout from "MyApp/layouts/MyAppLayout";
import MyAuthLayout from "MyApp/layouts/MyAuthLauout";
import MyErrorLayout from "MyApp/layouts/MyErrorLayout";
import MyWebLayout from "MyApp/layouts/MyWebLayout";
import ForgotPage from "MyApp/pages/auth/ForgotPage";
import LoginPage from "MyApp/pages/auth/LoginPage";
import LogoutPage from "MyApp/pages/auth/LogoutPage";
import RecoveryPage from "MyApp/pages/auth/RecoveryPage";
import RegisterPage from "MyApp/pages/auth/RegisterPage";
import RestorePage from "MyApp/pages/auth/RestorePage";
import DevActionPage from "MyApp/pages/developer/DevActionPage";
import DevLogPage from "MyApp/pages/developer/DevLogPage";
import Error404Page from "MyApp/pages/errors/Error404Page";
import Error500Page from "MyApp/pages/errors/Error500Page";
import FaqPage from "MyApp/pages/help/FaqPage";
import TutorialsPage from "MyApp/pages/help/TutorialsPage";
import EstadisticasPage from "MyApp/pages/home/EstadisticasPage";
import PrincipalPage from "MyApp/pages/home/PrincipalPage";
import MessagesListPage from "MyApp/pages/mensajes/MessagesListPage";
import NotificationListPage from "MyApp/pages/notification/NotificationListPage";
import RoleListPage from "MyApp/pages/role/RoleListPage";
import ContactoPage from "MyApp/pages/site/ContactoPage";
import DemoPage from "MyApp/pages/site/Demo/DemoPage";
import HomePage from "MyApp/pages/site/HomePage";
import NosotrosPage from "MyApp/pages/site/NosotrosPage";
import PrivacidadPage from "MyApp/pages/site/PrivacidadPage";
import TerminosPage from "MyApp/pages/site/TerminosPage";
import UserCreatePage from "MyApp/pages/user/UserEditPage";
import UserEditPage from "MyApp/pages/user/UserEditPage";
import UserListPage from "MyApp/pages/user/UserListPage";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//#endregion

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyWebLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="terminos" element={<TerminosPage />} />
          <Route path="privacidad" element={<PrivacidadPage />} />
          <Route path="demo" element={<DemoPage />} />
        </Route>
        <Route path="/auth" element={<MyAuthLayout />}>
          <Route path="forgot" element={<ForgotPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="recovery" element={<RecoveryPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="restore" element={<RestorePage />} />
        </Route>
        <Route path="/admin" element={<MyAppLayout />}>
          <Route path="panel">
            <Route path="principal" element={<PrincipalPage />} />
            <Route path="estadisticas" element={<EstadisticasPage />} />
          </Route>
          <Route path="mensajes">
            <Route path="listar" element={<MessagesListPage />} />
          </Route>
          <Route path="usuarios">
            <Route path="listar" element={<UserListPage />}></Route>
            <Route path="crear" element={<UserCreatePage />}></Route>
            <Route path="editar/:id" element={<UserEditPage />}></Route>
          </Route>
          <Route path="roles">
            <Route path="listar" element={<RoleListPage />}></Route>
          </Route>
          <Route path="notificaciones">
            <Route path="listar" element={<NotificationListPage />} />
          </Route>
          <Route path="ayuda">
            <Route path="tutoriales" element={<TutorialsPage />} />
            <Route path="faqs" element={<FaqPage />} />
          </Route>
          <Route path="dev">
            <Route path="logs" element={<DevLogPage />} />
            <Route path="actions" element={<DevActionPage />} />
          </Route>
        </Route>
        <Route path="/errors" element={<MyErrorLayout />}>
          <Route path="404" element={<Error404Page />} />
          <Route path="500" element={<Error500Page />} />
        </Route>
        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
