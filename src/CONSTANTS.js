import { BASE_URL } from "./env";
export const routes = {
  REGISTERED_DATA: BASE_URL + "/get-registeredFormData",
  // GET ; requires nothing

  UNREGISTERED_DATA: BASE_URL + "/get-unregisteredFormData",
  // GET ; requires nothing

  FILTER_DATA: BASE_URL + "/filter-formData",
  // GET ; requires : filter fields

  UPDATE_DATA: BASE_URL + "/update-formData",
  // update fields; requires : _id, name,skills, P,Q,work_mode,work_method,price

  DELETE_DATA: BASE_URL + "/delete-formData/",
  // delete ; requires: email

  WEBSITE_LEADS: BASE_URL + "/get-websiteLeads",
  // GET requires nothing

  REGISTER_DATA: BASE_URL + "/register-formData",
  // POST ; requires : email in body

  FILTER_LEADS: BASE_URL + "/filter-websiteLeads",
  // GET ; requires filter fields in body

  CREATE_LEADS: BASE_URL + "/create-websiteLeads",
  //POST ; requires : name, phoneNumber,
  // service,
  //  email,
  //  subject,
  //  status,
  //  source, in body

  UPDATE_LEADS: BASE_URL + "/update-websiteLeads",
  //PUT ; requires:  _id, status in body

  DELETE_LEADS: BASE_URL + "/delete-websiteLeads/",
  //requires email in the params
};
