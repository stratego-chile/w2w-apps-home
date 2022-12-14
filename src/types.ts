import { Styles, OptionTypeBase, GroupTypeBase } from 'react-select'

//#region States
export type FormState = {
  isSubmitting: boolean,
  isFormValid: boolean
}
export type SecuredFormState = {
  isRecaptchaTokenValidated: boolean
}

export type SignInFormFields = {
  signInUserId: FormField<string>,
  signInPassword: FormField<string>,
  signInRemember?: FormField<boolean>
}

export type CalculatorResponse = {
  courier: TrackingType,
  serviceCode: number,
  weight: number,
  cost: number
}

export type ContactBookResponse= {
  addressAdd: boolean
}

export type CalculatorFormFields = {
  //origin
  origin: FormField<number>,

  //destination
  destination: FormField<number>,

  //package
  calcWeight: FormField<number>,
  calcLenght: FormField<number>,
  calcHeight: FormField<number>,
  calcWidth: FormField<number>,
  calcPrice: FormField<number>,

}
export type ContactsBFormFields = {
  cBookLabel: FormField<string>,
  cBookStreetName: FormField<string>,
  cBookStreetNumber: FormField<string>,
  cBookCountry: FormField<string>,
  cBookComune: FormField<string>,
  cBookState: FormField<string>,
  cBookCity: FormField<string>,
  cBookName: FormField<string>,
  cBookEmail: FormField<string>,
  cBookIdentNumber: FormField<string>,
  cBookIdentType: FormField<string>,
  cBookPhoneNumber: FormField<string>,
  cBookPhonePrefix: FormField<string>,
}
export type SignUpFormFields = {
  signUpPhonePrefix: FormField<string>,
  signUpPhone: FormField<string>,
  signUpName: FormField<string>,
  signUpSurname: FormField<string>
  signUpUserId: FormField<string>,
  signUpPassword: FormField<string>,
  signUpConfirmPassword: FormField<string>,
  signUpTerms: FormField<boolean>
}

export type ContactFormFields = {
  contactName: FormField<string>,
  contactEmail: FormField<string>,
  contactMessage: FormField<string>
}

export type ContactFormMessage = {
  fieldHeight: number
}

export type CountrySelectedState = {
  country?: string
}

export type FinishSignUpFormState = {
  finishSignUpOrganizationName: FormField<string>,
  finishSignUpOrganizationSocialReason: FormField<string>,
  finishSignUpOrganizationEmployeesQuantityRange: FormField<string>,
  finishSignUpOrganizationOpeningDate: FormField<string>,
  finishSignUpOrganizationAnualSales: FormField<number>,
  finishSignUpOrganizationTaxId: FormField<string>,
  finishSignUpOrganizationTaxIdType: FormField<string>,
  finishSignUpRepresentativeFirstName: FormField<string>,
  finishSignUpRepresentativeLastName: FormField<string>,
  finishSignUpRepresentativeTaxId: FormField<string>,
  finishSignUpRepresentativeTaxIdType: FormField<string>,
  finishSignUpRepresentativeCorporativePosition: FormField<string>,
  finishSignUpRepresentativeEmail: FormField<string>,
  finishSignUpRepresentativePhone: FormField<string>,
  finishSignUpRepresentativePhonePrefix: FormField<string>,
  finishSignUpBillingAddressStreetName: FormField<string>,
  finishSignUpBillingAddressStreetNumber: FormField<string>,
  finishSignUpBillingAddressDoor: FormField<string>,
  finishSignUpBillingAddressComplement: FormField<string>,
  finishSignUpBillingAddressNeighborhood: FormField<string>,
  finishSignUpBillingAddressCity: FormField<string>,
  finishSignUpBillingAddressState: FormField<string>,
  finishSignUpBillingAddressPostalCode: FormField<string>,
  finishSignUpBillingAddressCountryName: FormField<string>
}
//#endregion

//#region Props
export type EmptyProps = Record<string, never>
//#endregion

//#region Endpoints
export type DefaultRequestHeaders = {
  Accept?: string,
  'Content-Type'?: string,
  Lang?: 'en-US',
  Environment?: typeof process.env.NODE_ENV,
  Authorization?: string
}

export type DefaultResponse<ResponseValueType> = {
  error?: {
    value: boolean,
    message: string,
    timestamp?: number,
    reason?: unknown
  },
  value: ResponseValueType
}

export type AuthenticationResponse = AccountRemember & {
  token: string,
  timestamp: number,
}
//#endregion

//#region Misc
export type ReactSelectStyles = Partial<Styles<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>>> | undefined

export type SessionData = AuthenticationResponse

export type RouteConfig = {
  path: string,
  public: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  strict?: boolean,
  symlinks?: string[],
  data?: unknown
}

export type RouteHandler = {
  location: {
    search: string
  }
}

export type SelectOption = {
  label: string,
  value: string,
  helper?: string,
  description?: string
}

export type FormField<FieldType = string | number | bigint | boolean | string[] | Blob | ContactsBookBody | Blob[]> = {
  readonly required: boolean,
  value: FieldType | undefined,
  readonly controlRef?: HTMLInputElement,
  rules?: unknown
}

export type AppDescriptor = {
  title: string,
  description: {
    short?: string,
    long: string
  },
  icon: {
    link?: string,
    svg?: string,
    alt?: string
  },
  references: {
    title?: string,
    link: string
  }[],
  elementId?: string
}

type AuthForm = {
  userId: string
}

type AccountRemember = {
  remember?: boolean
}

export type Address = {
  street: {
    name: string,
    number?: string
  },
  door?: string,
  complement?: string,
  neighborhood?: string,
  city: string,
  state: string,
  postalCode?: string,
  country: {
    name: string,
    code: {
      alpha2: string,
      alpha3?: string
    }
  }
}

export type Profile = SignUpFinish

//Contact Notebook
export type ContactNotebook = ContactsBookBody

// Order Function
export type Order = OrderBody

// calculator function
export type Calculator = CalculatorFormFields
//#endregion

//#region Request Body
export type Credentials = AuthForm & AccountRemember & {
  /**
   * Assign as a Base64 string
   */
  email?: string,
  /**
   * Assign as a SHA512 hash
   */
  password: string
}

export interface ContactsBookBody {
  _id?: string,
  label?: string,
  user?: string,
  street: {
    number: string,
    name: string,
  }
  department?: string,
  city: string,
  state: string,
  commune: string,
  country: string,
  contact?: Contacts
}

export interface Contacts {
  name: string,
  email: string,
  identification:{
    type: string
    number: string,
  },
  phone?:{
    number: string,
    code: string
  }
}

export type CalculatorBody = {
  origin: ContactsBookBody,
  destination: ContactsBookBody,
  package: IPackage
  applyDiscountOf?: number
  operationId?: string
}

export interface IPackage {
  _id?: string
  order?: string
  product?: string
  description?: string
  pieces?: string
  dims: {
    height: number
    length: number
    width: number
    unit?: string
  }
  weight: {
    value?: number
    unit?: string
  }
  volumetric?: {
    value?: number
    unit?: string
  }
  chargeableWeight?: {
    value?: number
    unit?: string
  }
  price: {
    value: number
    currency?: string
  }
  createdAt?: number
  updatedAt?: number
  deletedAt?: number
}

export type OrderBody = {
  service: {
    courier: TrackingType,
    code: number,
    value: number
  }
  origin: ContactNotebook
  destination: ContactNotebook
  packages: IPackage[]
}

export type OrderResponse = {
  createOrder?: true,
  operation: string,
  tracking?: string
}

export type PaymentResponse = {
  name: string,
  url: string
}

export type SignUpForm = AuthForm & {
  terms: boolean
}

export type ContactForm = {
  senderName: string,
  senderEmail: string,
  message: string
}

export enum TrackingType {
  chilexpress = 'chilexpress',
  correrChile = 'Correos de chile',
  ecl = 'ecl',
  express = 'express'
}

export type SignUpInit = {
  /**
   * Assign as a Base64 string
   * @deprecated in favor of `userId`. This field will be removed in the future versions
   */
  email: string,
  /**
   * Assign as a Base64 string
   */
  userId?: string,
  firstname: string,
  lastname: string,
  phone: {
    code: string,
    number: string
  },
  /**
   * Assign as a SHA512 hash
   */
  password: string,
  terms: boolean
}

export type SignUpFinish = {
  organization: {
    name: string,
    identification: {
      type: string,
      number: string
    },
    socialReason?: string,
    employeesQuantity?: string,
    /**
     * @deprecated in favor of openingDate
     */
    businessYears?: number,
    openingDate?: string,
    anualSales?: {
      amount: number,
      currency: string
    },
    billingAddress: Address
  },
  representative: {
    firstName: string,
    lastName: string,
    corporativePosition?: string,
    identification: {
      type: string,
      number: string
    },
    contactData: {
      email: string,
      phone?: {
        code: string,
        number: string
      }
    }
  }
}
//#endregion
