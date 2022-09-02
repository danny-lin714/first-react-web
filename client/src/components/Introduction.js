import React from 'react';
import "./Introduction.css"

function Introduction({ref}) {
  return (
    <div className='intro-container' ref={ref}>
        <div className='intro-content-header'>Introduction</div>
        <div className='intro-content-body'> 別林斯基在不經意間這樣說過，陰險的友誼雖然允許你得到一些微不足道的小惠，卻要剝奪掉你的珍寶－獨立思考和對真理純潔的愛！ 這段話看似複雜，其中的邏輯思路卻清晰可見。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。肖伯納在過去曾經講過，一個人如果不到最高峰，他就沒有片刻的安寧，他也就不會感到生命的恬靜和光榮。這不禁令我深思。想必大家都能了解自我介紹的重要性。</div>
      
    </div>
  );
}

export default Introduction;
