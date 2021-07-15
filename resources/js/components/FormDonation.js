import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FormDonation = (props) => {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = (
        <button
            type="button"
            className="btn-close"
            onClick={toggle}
            aria-label="Close"
        ></button>
    );

    return (
        <div className="col-3 d-grid">
            <Button className="btn-lg" color="primary" onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal
                isOpen={modal}
                fade={false}
                toggle={toggle}
                className={className}
            >
                <ModalHeader toggle={toggle} close={closeBtn}>
                    Donación
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="mb-3">
                            <label for="donation-email" className="form-label">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="donation-email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="donation-password"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="donation-password"
                                autoComplete="new-password"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label"
                                for="exampleCheck1"
                            >
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Aceptar
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default FormDonation;
