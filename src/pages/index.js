import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Particles from 'react-particles-js';
import BackgroundSection from "../components/background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

const IndexPage = () => (
  <Layout>
    <section class="main-visual">
      <Particles
        params={{
          particles: {
            number: {
              value: 72,
              density: { enable: true, value_area: 1281.3838946061746 }
            },
            color: { value: "#4c5375" },
            shape: {
              type: "star",
              stroke: { width: 13, color: "#535661" },
              polygon: { nb_sides: 12 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
            },
            size: {
              value: 4.004324670644295,
              random: true,
              anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
            },
            line_linked: {
              enable: false,
              distance: 599.7522076405273,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "bottom-right",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        }}
      />
    </section>
    <section className="service__area">
      <h2>Welcome to Web Site of Team Project Europa.</h2>
      <article>
        <div className="service__contents">
          <h3>Our Skill</h3>
          <div className="service__descriptions">
            <div className="service__details">
              <FontAwesomeIcon icon={['fas', 'gamepad']} />
              <h4>Carnage Heart</h4>
              <p>We develop information about Carnage Heart.</p>
              <p>カルネージハートの情報を発信しています。</p>
            </div>
            <div className="service__details">
              <FontAwesomeIcon icon={['fas', 'desktop']} />
              <h4>Web Site</h4>
              <p>We will make creative website.</p>
              <p>クリエイティブなWebサイトを制作します。</p>
            </div>
            <div className="service__details">
              <FontAwesomeIcon icon={['fab', 'php']} />
              <h4>Web Appliction</h4>
              <p>We will accept requests for web applications.</p>
              <p>Webアプリケーション開発を受託します。</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </Layout>
)

export default IndexPage
