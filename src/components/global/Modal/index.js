import React, { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const Modal = ({children, close, className}) => {
  return <div onClick={close} className={styles.modalWrapper}>
    <div className={clsx(styles.modal, className)}>
      {children}
    </div>
  </div>
}

export const ModalController = ({text=open, children, variant, className}) => {
  const [open, setOpen] = useState(false);

  return <>
    <button className={`${styles.modalButton} ${variant==="dark" && styles.modalButtonDark}`} onClick={() => setOpen(!open)}>
      <svg width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="videoIcon__p6A03Llx"><path d="M12.8035 0.839966C6.20353 0.839966 0.803528 6.23997 0.803528 12.84C0.803528 19.44 6.20353 24.84 12.8035 24.84C19.4035 24.84 24.8035 19.44 24.8035 12.84C24.8035 6.23997 19.4035 0.839966 12.8035 0.839966ZM12.8035 21.84C7.80353 21.84 3.80353 17.84 3.80353 12.84C3.80353 7.83997 7.80353 3.83997 12.8035 3.83997C17.8035 3.83997 21.8035 7.83997 21.8035 12.84C21.8035 17.84 17.8035 21.84 12.8035 21.84ZM17.0035 13.64L11.3035 16.84C10.6035 17.24 9.80353 16.7399 9.80353 15.9399V9.43994C9.80353 8.63994 10.6035 8.23992 11.3035 8.53992L17.0035 11.74C17.6035 12.34 17.6035 13.24 17.0035 13.64Z" fill="currentColor"></path></svg> 
      {text}
    </button>

    { open && <Modal className={className} close={() => setOpen(false)}>{children}</Modal> }
  </>
}

export default Modal