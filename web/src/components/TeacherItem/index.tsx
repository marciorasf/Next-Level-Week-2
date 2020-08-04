import React from "react"

import "./styles.css"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/26799157?s=460&u=36a76d9fd2c39c0969ec7ffd203ab629acf2a8ef&v=4" alt="Avatar" />
        <div>
          <strong>Márcio Souza Filho</strong>
          <span>Algoritmos</span>
        </div>
      </header>

      <p>
        Aliqua est cupidatat aliquip elit.
            <br />
        <br />
            Ea anim ipsum exercitation proident incididunt pariatur occaecat incididunt qui irure nisi.
            Mollit reprehenderit eiusmod ex occaecat aute quis nulla eiusmod occaecat ex et id reprehenderit.
            Qui voluptate aliquip Lorem sit exercitation ut quis ea incididunt voluptate nulla aliquip.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
      </footer>
    </article>
  )
}

export default TeacherItem