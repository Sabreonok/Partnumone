import React, { useState } from 'react'
import style from './form.scss'

export default function Form(props) {
    const [userName, setUserName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [mail, setMail] = useState('');

    return (
        <form>
            <div className='first'>
                <div className='name'>
                    <input type="text" placeholder='ИМЯ' value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='surname'>
                    <input type="text" placeholder='ФАМИЛИЯ' value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
            </div>
            <div className='second'>
                <div className='phone'>
                    <input type="text" placeholder='ТЕЛЕФОН' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='email'>
                    <input type="text" placeholder='ЭЛЕКТРОННАЯ ПОЧТА' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className='mail'>
                <input type="text" placeholder='АДРЕС ДОСТАВКИ' value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <button type='button' onClick={() => {
                props.addPost(userName, surname, phone, email, mail);
                setUserName('');
                setSurname('');
                setPhone('');
                setEmail('');
                setMail('');
                }}

                >
                Оформить заказ
            </button>
        </form>
    )
}
