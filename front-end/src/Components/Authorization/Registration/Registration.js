import React from 'react';
import styles from "./Registration.module.css"

const Registration = (props) => {
    return (
        <section className={styles.section}>
            {/*{msgFail?<div className={styles.msgFailed}>Не вірний логін або пароль!</div>:''}*/}
            <main className={styles.login_form_wrapper}>
                <h1>Реєстрація</h1>
                <form className={styles.login_form}>
                    <div className={styles.input_wrapper}>
                        <input value={''} placeholder={'Логін'}/>
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type={'password'} value={''} placeholder={'Імʼя'}/>
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type={'password'} value={''} placeholder={'Фамілія'}/>
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type={'number'} value={''} placeholder={'Номер телефону'}/>
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type={'password'} value={''} placeholder={'Пароль'}/>
                    </div>
                    <div className={styles.input_wrapper}>
                        <input type={'password'} value={''} placeholder={'Повторіть пароль'}/>
                    </div>
                    <button type="button">Увійти</button>
                </form>
            </main>
        </section>
    );
};

export default Registration;