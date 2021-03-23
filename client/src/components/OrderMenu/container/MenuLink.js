import React, {useRef, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategories } from '../../../redux/selectors/productsSelector';
import SingleCart from '../../CartGoods/container/SinleCart'

export default function MenuLink(props){
    const { name, label, open, openClose } = props;
    const [state, setState] = useState({
        listProdux: []
    })
    const products = useSelector(getCategories)
    const { nav } = useParams();
    const revealGoods = useRef(null);

    useEffect(() => {
        let listProdux = products.map((el,i) => {return <SingleCart key={el.title + i} {...el}/>});
        if(listProdux){setState((prevState) => {return {...prevState, listProdux: listProdux}})};
    },[products])

    return (
        <React.Fragment>
            <Link to={`/home/${name}`} className="order-menu__link">
                <svg width="100%" height="100%" viewBox="0 0 264 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="order-menu__bg" d="M252.037 0H246.055H17.9447H11.9631C11.9631 6.627 6.60663 12 0 12V17.5V78.5V85C6.60663 85 11.9631 90.373 11.9631 97H17.9447H246.055H252.037C252.037 90.373 257.393 85 264 85V78.5V17.5V12C257.393 12 252.037 6.627 252.037 0Z" fill="#6A111C"/>
                    <path d="M247.135 5H241.398H22.6023H16.865C16.865 10.944 11.7278 15.763 5.39035 15.763V20.696V75.407V81.237C11.7278 81.237 16.865 86.056 16.865 92H22.6023H241.398H247.135C247.135 86.056 252.272 81.237 258.61 81.237V75.407V20.696V15.763C252.272 15.763 247.135 10.944 247.135 5Z" stroke="white" stroke-width="1.0644" stroke-miterlimit="10"/>
                </svg>
                <span className="order-menu__span">{label}</span>
            </Link>
            {(state.listProdux && name === nav) && <div ref={revealGoods} className="order-menu__mobile-show">{state.listProdux}</div>}
        </React.Fragment>
    )
}