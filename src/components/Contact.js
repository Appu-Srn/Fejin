import React from 'react';


const Contact = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div className="container">
            <h3 className="center text-secondary"><i className="fas fa-envelope-open"></i> Contact </h3>
            <br />
            {/* <img  src = {Prid_5} className="img-rounded img-fluid" alt="Coding pic"></img> */}

            <div className=" row d-flex flex-row">
            <p className="p-2"> <i className="fa fa-envelope-open" aria-hidden="true"></i><b> Email: </b>fejin19@gmail.com </p>
            </div>

            <div className="row">
<p className="p-2"><b><i className="fa fa-map-marker" aria-hidden="true"></i> Address: </b>Aysha Manzil (HO) ,Madappalli College (PO) ,Vadakara ,Calicut - 673102 </p>
</div>

<div className="row">
<p className="p-2"> <i className="fa fa-mobile" aria-hidden="true"></i> <b>Phone: </b> (+91)9744998779 </p>
</div>




        </div>
    )
}
export default Contact