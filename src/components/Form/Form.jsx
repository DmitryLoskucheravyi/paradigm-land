import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { useState } from "react";

import Button from "../buttons/Button";
import errorIcon from '../../assets/icons/invalid-icon.png'
import "./Form.css";

const DEFAULT_VALUES = {
    name: "",
    tel: "+380",
    message: "",
};

const CloseIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.75 0.75004L0.750042 10.75M0.75 0.75L10.75 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const Form = ({ isModal, onClose }) => {
    const [formKey, setFormKey] = useState(0);

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: DEFAULT_VALUES,
    });

    const onSubmit = (data) => {
        reset(DEFAULT_VALUES);
        setFormKey(prev => prev + 1);
    };

    return (
        <div className="form-section container section">
            <div className="form-section-inner form-section-utility bg-secondary">
                {isModal && (
                    <button
                        type="button"
                        className="form-close-btn"
                        aria-label="Закрити"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>
                )}
                <div className="form-section-content">
                    <h2 className="h2">Запишіть дитину на IT-курси</h2>
                    <p className="h3 free-lesson-pr" style={{ marginBottom: "2.4rem", marginTop: "1.6rem" }}>
                        Перший урок
                    </p>
                    <p className="p-small-secondary">
                        Допоможіть дитині зробити перші кроки в програмуванні.
                        Ми підберемо курс та формат навчання саме для вашої дитини.
                    </p>
                </div>

                <form key={formKey} noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="group">
                        <label htmlFor="name">Ім'я *</label>
                        <input
                            id="name"
                            className={`input-utility ${errors.name ? "input-error" : ""}`}
                            style={{ borderRadius: "1.6rem" }}
                            {...register("name", {
                                required: "Введіть ім'я",
                                minLength: { value: 2, message: "Ім'я має містити мінімум 2 символи" },
                                maxLength: { value: 30, message: "Ім'я не може бути довшим за 30 символів" },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ' -]+$/,
                                    message: "Ім'я містить недопустимі символи",
                                },
                            })}
                        />
                        {errors.name && <ErrorMessage trigger={errors.name.message} classNames="error-message" />}
                    </div>

                    <div className="group">
                        <label htmlFor="tel">Номер телефону *</label>
                        <Controller
                            name="tel"
                            control={control}
                            rules={{
                                required: "Введіть номер телефону",
                                validate: (value) =>
                                    value.replace(/\D/g, "").length === 12
                                        ? true
                                        : "Введіть повний номер телефону",
                            }}
                            render={({ field }) => (
                                <IMaskInput
                                    id="tel"
                                    mask="+{380}000000000"
                                    value={field.value}
                                    onAccept={(value) => field.onChange(value)}
                                    onBlur={field.onBlur}
                                    inputRef={field.ref}
                                    placeholder="+380XXXXXXXXX"
                                    className={`input-utility ${errors.tel ? "input-error" : ""}`}
                                    style={{ borderRadius: "1.6rem" }}
                                />
                            )}
                        />
                        {errors.tel && <ErrorMessage trigger={errors.tel.message} classNames="error-message" />}
                    </div>

                    <div className="group">
                        <label htmlFor="message">Поставте запитання</label>
                        <textarea
                            id="message"
                            className={`textarea-utility ${errors.message ? "input-error" : ""}`}
                            style={{ borderRadius: "1.6rem" }}
                            {...register("message", {
                                maxLength: { value: 500, message: "Повідомлення не може перевищувати 500 символів" },
                            })}
                        />
                        {errors.message && <ErrorMessage trigger={errors.message.message} classNames="error-message" />}
                    </div>

                    <Button
                        text={"Записатись"}
                        classes={
                            "btn-course course-card-step-1"
                        }
                    />
                </form>
            </div>
        </div>
    );
};

const ErrorMessage = ({ trigger, classNames }) => (
    <div className="error-wrapper">
        <img src={errorIcon} alt="" />
        <p className={classNames}>{trigger}</p>
    </div>
);

export default Form;