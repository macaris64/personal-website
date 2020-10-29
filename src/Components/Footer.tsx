import React, {RefObject} from "react"
import {IMain} from "../Models/Header"

function Footer(props: IMain) {
    const ref: RefObject<any> = React.createRef();

    const smoothScroll = () => {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <section className="section pt-5 pb-0 mt-5">
            <footer className="footer footer-bar bg-dark">
                <div className="container text-foot text-center">
                    <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon light-social-icon">
                        {props.social.map((item, i) => {
                            return (
                                <li key={i} className="list-inline-item">
                                    <a href={item.url} target="_blank">
                                        <i className={item.className}/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <p className="mb-0">© 2020. Design with <i className="mdi mdi-heart text-danger"/> by Mehmet Acar.</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer