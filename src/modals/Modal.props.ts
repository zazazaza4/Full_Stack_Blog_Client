import { ReactNode, HTMLAttributes} from 'react';

export interface SearchProps extends HTMLAttributes<HTMLElement>{
    handleClose: () => void;
}

export interface ModalConfirmProps extends HTMLAttributes<HTMLElement> {
    handleClose: () => void, 
    onConfirm: () => void
}

export interface ModalProps  {
    handleClose: () => void,
    children: ReactNode, 
    show: boolean
}

export interface WithModalProps {
    handleClose: () => void,
    children: ReactNode, 
    show: boolean,
    onConfirm: () => void
}