import { ReactNode } from "react";

export interface IHeaderBgColor {
    $backgroundColor: string;
}

export interface IModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}