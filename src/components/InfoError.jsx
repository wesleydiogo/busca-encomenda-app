import React from 'react';
import '../css/InfoError.css';

const InfoError = () => {
    return (
        <div id="info-error" style={{display: 'none'}}>
            <p>
                Encomenda <br/>
                não encontrada!
            </p>
            <p>
                Procure novamente
            </p>
        </div>
    )
}
export default InfoError;