import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Image from "./image"

library.add(fab)

const Footer = () => (
    <footer>
        <p>
            <a href="https://twitter.com/M2_m_" target="_blank">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://github.com/ProjectEuropa" target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://qiita.com/ProjectEuropa" className="qiita__icon" target="_blank">
                <Image
                    style={{
                        borderRadius: `4px`,
                        padding: `2px`,
                        marginBottom: 0,
                    }}
                />
            </a>
        </p>
        <small>{'© ' + new Date().getFullYear() + " Team Project Europa"}</small>
    </footer>
)




export default Footer
