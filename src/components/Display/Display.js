import React from 'react';
// import styles './styles.module.scss';

function Display({data}){

    return (
      <div className="conatiner">
        <div className="image">
          <img src={data.titlePhoto} className="dp" />
        </div>
        <div className="name">
          <h4>{data.lastName}</h4>
        </div>
        <div className="country">
            {data.country}
        </div>
      </div>
    );
}

export default Display;
