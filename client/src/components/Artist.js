import React from 'react';
import "./Artist.css"
function Artist({lang}) {
  return (
    <div className='background'>
    <div class="card">
        <div class="circle">
        </div>
        <h1 class="info">{lang?"關於我":"About Me"}</h1>
        <div class="content">
            <div class="content-outer"><p>我是林璿瑜，一個來自通霄的雕刻家</p></div>
        </div>
    </div>
    </div>
  );
}

export default Artist;
