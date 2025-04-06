"use client";

// Asegura que se ejecuta en el cliente
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { GeneralData } from "../interfaces/general";
import { HomeData } from "../interfaces/home";

const initialState: ControllerState = {
  general: {
    title: "",
    name: "",
    phone: "",
    header: {
      logo: {
        text: "",
        image: "",
      },
      navigation: [],
      seo: {
        metaTitle: "",
        metaDescription: "",
      },
    },
    socialLinks: [],
  },
  home: {},
};

// Definir la interfaz del contexto
interface ControllerState {
  general: GeneralData;
  home: HomeData | any;
  // multilanguage: MultilanguageData;
}

// Crear el contexto con el estado inicial
const GeneralsContext = createContext<ControllerState>(initialState);

// Hook para acceder al contexto
export const useGenerals = () => {
  return useContext(GeneralsContext);
};

// Proveedor del contexto
interface GeneralsProviderProps extends PropsWithChildren {
  generals: ControllerState;
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({
  children,
  generals,
}) => {
  const [state] = useState(generals); // Estado inicial sin setters para evitar renders innecesarios

  return (
    <GeneralsContext.Provider value={state}>
      {children}
    </GeneralsContext.Provider>
  );
};
