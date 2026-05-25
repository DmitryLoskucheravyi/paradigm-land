import { useState } from "react"

import Button from "../buttons/Button"
import Elipse from "../elipse/Elipse"
import "./Form.css"

const Form = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const setValue = (e, setValue) => {
        const value = e.target.value
        setValue((prev => prev = value))
    }

    return (
        <div className="form-section container section">
            <div className="form-section-inner form-section-utility bg-secondary">
                <div className="form-section-content   ">
                    <h2 className="h2">Запишіть дитину на IT-курси </h2>
                    <p className="h3 free-lesson-pr" style={{ marginBottom: '2.4rem', marginTop: '1.6rem' }}>Перший урок</p>
                    <p className="p-small-secondary">Допоможіть дитині зробити перші кроки в програмуванні. Ми підберемо курс та формат навчання саме для вашої дитини.</p>
                </div>

                <form bindsubmit="" onSubmit={(e) => {
                    e.preventDefault()
                    e.target.reset()
                }}>
                    <div className="group">
                        <label htmlFor="name">Ім'я *</label>
                        <input type="text"
                            name='name'
                            id="name"
                            className="input-utility"
                            style={{ borderRadius: '1.6rem' }}
                            required onChange={(e) => {
                                setValue(e, setName)
                            }}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="tel">Номер телефону *</label>
                        <input type="tel"
                            name='tel'
                            id="tel"
                            className="input-utility"
                            style={{ borderRadius: '1.6rem' }}
                            required onChange={(e) => {
                                setValue(e, setEmail)
                            }}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="textarea">Поставте запитання</label>
                        <textarea name='textarea'
                            id="textarea"
                            className="textarea-utility"
                            style={{ borderRadius: '1.6rem' }}
                            onChange={(e) => {
                                setValue(e, setMessage)
                            }}
                        ></textarea>
                    </div>
                    <Button text={'Записатись'} classes={'btn-course   course-card-step-1 '}></Button>
                </form>
            </div>
            <Elipse parametr='glow-green form-2'></Elipse>
        </div>

    )
}

export default Form