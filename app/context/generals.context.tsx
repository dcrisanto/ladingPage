"use client"; // Asegura que se ejecuta en el cliente

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { GeneralData } from "../interfaces/general";
import { MultilanguageData } from "../interfaces/multilanguage";

// Definir el estado inicial
const initialState: ControllerState = {
  general: {
    id: 1,
    phone: "",
    schedule: "",
    address: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    map_url: "",
    frame_url: "",
    pixel_facebook: "",
    tag_manager: "",
    facebook_id: "",
    social_network: [],
    logo: {
      id: 27,
      name: "",
      alternativeText: "",
      caption: "",
      width: 0,
      height: 0,
      formats: null,
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
    },
  },
  multilanguage: {
    id: 22,
    lbl_btn_quote: "",
    lbl_btn_contact: "",
    lbl_read_more: "",
    lbl_send: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    lbl_see_services: "",
    lbl_view_more: "",
    lbl_view_less: "",
    menu: [],
    form: {
      id: 1,
      title: "",
      name: {
        id: 2,
        name: "",
        label: "",
        placeholder: ""
      },
      email: {
        id: 3,
        name: "",
        label: "",
        placeholder: ""
      },
      phone: {
        id: 4,
        name: "",
        label: "",
        placeholder: ""
      },
      service: {
        id: 5,
        name: "",
        label: "",
        placeholder: ""
      },
      date: {
        id: 6,
        name: "",
        label: "",
        placeholder: ""
      },
      time: {
        id: 7,
        name: "",
        label: "",
        placeholder: ""
      },
      dateTime: {
        id: 8,
        name: "",
        label: "",
        placeholder: ""
      },
      messages: {
        invalid_tel: "",
        invalid_name: "",
        mail_sent_ok: "",
        invalid_email: "",
        invalid_number: "",
        invalid_required: "",
        validation_error: "",
        invalid_recaptcha: ""
      }
    }
  },
};

// Definir la interfaz del contexto
interface ControllerState {
  general: GeneralData;
  multilanguage: MultilanguageData;
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
    <GeneralsContext.Provider value={state}>{children}</GeneralsContext.Provider>
  );
};
