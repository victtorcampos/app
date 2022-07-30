
import React, { useEffect, useState } from 'react';
import { ListNcm } from '../data/ListNcm';

const ConsultaNcmPage = () => {
    const [ncms, setNcms] = useState(null)
    useEffect(() => {
        if (ncms) {

        }
    }, [ncms]);

    const handleChange = (event) => {
        if (event.target.value.length >= 4) {
            const uplistncm = ListNcm.filter(ncm => (ncm.cod.indexOf(event.target.value) > -1));
            setNcms(uplistncm);
        }

        if (ncms && event.target.value.length < 4) {
            setNcms(null);
        }

    };


    return (
        <div>
            <h2>Csontaul NCM</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type={'text'} name="codncm" value={undefined} onChange={handleChange} />
            </form>
            <div>
                {ncms ?
                    <ol className="list-group list-group-numbered">
                        {ncms.map((ncm, i) => {
                            return <li key={i} className='list-group-item d-flex justify-content-between align-items-start'>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{ncm.cod}</div>
                                    {ncm.descricao}
                                    <p>{ncm.cest ? <><b>CEST</b>: {ncm.cest}<br /></> : <></>}
                                        <b>PIS</b>: {ncm.cstpis}, <b>COFINS</b>: {ncm.cstcofin}<br />
                                        Portaria 195/2019 :{ncm.cest ? <><b>MVA</b>: {ncm.mvast}</> : <>Não</>}
                                    </p>

                                </div>
                            </li>
                        })}
                    </ol>
                    : <></>}
            </div>
        </div>
    );
};

export default ConsultaNcmPage;