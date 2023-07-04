import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>¿Qué ofrezco?</h5>
      <h2>Servicios</h2>

      <div className='container services__container'>
        <article className="services">
          <div className='services__head'>
            <h3>Diseño UI/UX</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Diseño de interfaz interactiva</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Fundamentos de ingeniería de software</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>UX Writing & UX Editing</p>
            </li>
          </ul>
        </article>
          {/* END OF UI/UX */}


          <article className="services">
          <div className='services__head'>
            <h3>Desarrollo Web</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Desarrollo de paginas web estaticas con HTML, CSS  y Javascript puro</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Desarrollo Frontend</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Diseño de pagina web</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Maquetación y responsive web design</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Desarrollo web mayormente enfocado a ReactJS</p>
            </li>


          </ul>
        </article>
          {/* END OF WEB development */}

          <article className="services">
          <div className='services__head'>
            <h3>Desarrollo Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Diseño de pagina web</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Node.js</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Desarrollo backend en Laragon</p>
            </li>

            <li>
            <BiCheck  className='service__list-icon'/>
            <p>Desarrollo backend en TablePlus</p>
            </li>
          </ul>
        </article>
          {/* END OF backend development */}
      </div>
    </section>
  )
}

export default Services;