import { ReactNode } from "react";

export interface IHeaderBgColor {
    $backgroundColor: string;
}

export interface IModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

export interface IRegistrationSchema {
  username: string;
  email: string;
  password: string;
}

export interface ILoginSchema {
  email: string;
  password: string;
}

export interface IInputProps {
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

export interface IUserData {
  email: string;
  username: string;
  password: string;
}

export interface ISignUp {
  user: {
    username: string;
    email: string;
  };
}

// export interface IError {
//   error: string;
// }