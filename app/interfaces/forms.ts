export interface QuoteRequest {
  companyName: string;
  email: string;
  phone: string;
  service: string;
  preferredDateTime: string;
}

export interface ContactSignup {
  companyName: string;
  email: string;
  phone: string;
  service: string;
  additionalNotes: string;
}
