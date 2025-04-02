//import { Picture } from "./shared";

import { InputForm, Picture } from "./shared";

export interface Multilanguage {
  data: MultilanguageData;
}

export interface MultilanguageData {
  id: number;
  lbl_btn_quote: string;
  lbl_btn_contact: string;
  lbl_read_more: string;
  lbl_send: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lbl_see_services: string;
  lbl_view_more: string;
  lbl_view_less: string;
  menu: Menu[];
  form: IForm;
}

export interface Menu {
  id: number;
  label: string;
  url: string;
  sitemap: boolean;
}

export interface Skill {
  id: number;
  text: string;
  image: Picture;
}

export interface IForm {
  id: number;
  title: string;
  name: InputForm;
  email: InputForm;
  phone: InputForm;
  service: InputForm;
  date: InputForm;
  time: InputForm;
  dateTime: InputForm;
  messages: IMessages;
}

export interface IMessages {
  invalid_tel: string;
  invalid_name: string;
  mail_sent_ok: string;
  invalid_email: string;
  invalid_number: string;
  invalid_required: string;
  validation_error: string;
  invalid_recaptcha: string;
}
