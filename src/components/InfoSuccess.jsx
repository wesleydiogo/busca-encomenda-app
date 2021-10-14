import React from 'react';
import '../css/InfoSuccess.css';

const InfoSuccess = () => {
    return (
        <div id="info-success" style={{ display: 'none' }}>
            <div className="item" id="box-client-name">
                <div className="response" id="client-name"></div>
                <div className="title">
                    Número de ordem e nome do cliente
                </div>
            </div>
            <div className="item" id="box-order-price">
                <div className="response" id="order-price"></div>
                <div className="title">
                    Valor do pedido
                </div>
            </div>
            <div id="items-response-title">
                <div className="item" id="box-order-date">
                    <div className="response" id="order-date"></div>
                    <div className="title">
                        Data do pedido
                    </div>
                </div>
                <div className="item" id="box-order-status">
                    <div className="response" id="order-status"></div>
                    <div className="title">
                        Situação da encomenda
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoSuccess;