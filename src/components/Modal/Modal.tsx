import { FC, MouseEvent, useEffect } from "react";
import ReactDOM from "react-dom";
import sprite from "../../assets/icons/sprite.svg";
import { IModalProps } from "../../helpers/interface";
import { Backdrop, BtnCloseModal, Container } from "./Modal.styled";

export const Modal: FC<IModalProps> = ({
    isModalOpen,
    onCloseModal,
    children,
}) => {
    const modalPortal: HTMLElement | null = document.getElementById("modal");

    const onBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onCloseModal();
        }
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (isModalOpen && event.key === "Escape") {
                onCloseModal();
            }
        };
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen, onCloseModal]);

    if (!isModalOpen || modalPortal === null) {
        return null;
    }
    return ReactDOM.createPortal(
        <Backdrop onClick={onBackdropClick}>
            <Container>
                <BtnCloseModal type="button" onClick={onCloseModal}>
                    <svg width="20" height="20">
                        <use href={`${sprite}#icon-x`} />
                    </svg>
                </BtnCloseModal>
                {children}
            </Container>
        </Backdrop>,
        modalPortal!
    );
};
