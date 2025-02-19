import Swal, { SweetAlertInput, SweetAlertOptions } from 'sweetalert2';

import styles from './Modal.module.css';

const defaultParams: Partial<SweetAlertOptions> = {
  showCancelButton: true,
  allowOutsideClick: true,
  backdrop: true,
  focusConfirm: false,
  customClass: {
    popup: styles.popup,
    title: styles.title,
    input: styles.input,
    confirmButton: styles.button,
    denyButton: styles.button,
    cancelButton: styles.button,
    validationMessage: styles.validationMessage,
  },
  inputAttributes: {
    required: 'true',
  },
};

export type ShowModalParams = {
  title: string;
  confirmButtonText: string;
  type: 'danger' | 'normal';
  onConfirm?: ShamefulAny;
  input?: SweetAlertInput;
  inputValue?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  validationMessage?: string;
};

const ShowModal = async ({
  title,
  confirmButtonText,
  type,
  onConfirm,
  input,
  inputValue,
  inputLabel,
  inputPlaceholder,
  validationMessage,
}: ShowModalParams) => {
  const { isConfirmed, value } = await Swal.fire({
    title,
    confirmButtonText,
    input,
    inputLabel,
    inputPlaceholder,
    inputValue,
    validationMessage,
    confirmButtonColor: getButtonStyleFromType(type),
    ...defaultParams,
  });

  if (isConfirmed) {
    onConfirm(value);
  }

  return value;
};

function getButtonStyleFromType(type: 'danger' | 'normal') {
  if (type === 'danger') {
    return '#dc3545'; // red
  }

  return '#0074d9'; // blue
}

export default ShowModal;
