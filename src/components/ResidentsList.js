import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({resident}) => {
    return (
        <section id='residents'>
            <h2>Residents</h2>
            <div className='wrapper-residents'>
                {resident?.map(element =>(
                   
                   <ResidentInfo residentUrl={element} key={element}/>
                   // <div key= {e}>
                    //     {e}
                    //     {/* {console.log(e)} */}
                    // </div>    
                )
                )}
            </div>
        </section>
    );
};

export default ResidentsList;