import BarriosService from "MyApp/data/BarriosService";
import * as yup from "yup";

const DemoValidationForm = yup.object().shape({
  antiquity: yup
    .number()
    .typeError("Por favor, ingrese un número.")
    .positive("Por favor, ingrese mayor a 0.")
    .required("Por favor, seleccione una antigüedad."),
  ambients: yup
    .number()
    .typeError("Por favor, ingrese un número.")
    .positive("Por favor, ingrese mayor a 0.")
    .required("Por favor, seleccione la cantidad de ambientes."),
  rooms: yup
    .number()
    .typeError("Por favor, ingrese un número.")
    .positive("Por favor, ingrese mayor a 0.")
    .required("Por favor, seleccione la cantidad de dormitorios."),
  bathrooms: yup
    .number()
    .typeError("Por favor, ingrese un número.")
    .positive("Por favor, ingrese mayor a 0.")
    .required("Por favor, seleccione la cantidad de baños."),
  surface: yup
    .number()
    .typeError("Por favor, ingrese un número.")
    .positive("Por favor, ingrese mayor a 0.")
    .required("Por favor, ingrese la superficie."),
});

export default DemoValidationForm;
