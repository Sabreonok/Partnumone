import React from 'react'
import style from './post.scss'

export default function Post(props) {
    return (
        <div className='card_container'>
            <div className='content'>
                <div className='post' onClick={() => props.delPost(props.item.id)}>
                    <h1 className='buyerName'>{`Имя ${props.item.userName}`}</h1>
                    <div className='card_title'>
                        <h2>{`Фамилия ${props.item.surname}`}</h2>
                        <h2>{`Телефон ${props.item.phone}`}</h2>
                        <h2>{`Электронная почта ${props.item.email}`}</h2>
                        <h2>{`Адрес доставки ${props.item.mail}`}</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}
