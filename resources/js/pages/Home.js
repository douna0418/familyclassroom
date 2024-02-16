import '../../css/home.css';

export default function Home() {
    return (
        <div>
            <section className='banner_container'>
                <img src="\assets\image\home\home_banner.png" alt="不帆新家庭教室首頁" />
                <div className="home_banner_box">
                    <p className='banner_text'>「一艘乘載愛心的小船，期待引領每一個家庭，擁有不煩心的親子關係，家庭成為新型態的學習教室！」</p>
                    <p className='banner_text text_sec'>——不帆心家庭教室</p>
                </div>
            </section>
            <section className='home_container_one'>
                <div className='hco_left'>
                    <div className='title_box'>
                        <p className='main_title'>『為什麼成立』</p>
                        <p className='title_mark'>!?</p>
                    </div>
                    <p className='sub_title'>— 不帆心服務宗旨 —</p>
                    <img src='\assets\image\home\home_img1.png'/>
                </div>
                <div className='hco_right'>
                    <p>2020年當新冠疫情爆發，全球有14億的學生面對疫情衝擊無法正常上學，而面對停課不停學的挑戰，除了學生和教師，家長也是首當其衝。甚至是許多小學家長，需要請假在家陪伴孩子學習，批改作業等等都有機會。於此同時，108課綱上路，學生的學習不僅限於教室內，結合「生活情境」的學習更是重要，並且核心素養的也是過去家長不曾經歷過的學習改革。下一個世代（Z世代、α 世代）同樣都是在高度接觸網路、科技相關產品，面對線上學習、混成式學習、自主學習等浪潮中，家長如何陪伴孩子善用網路資源，成為一名終身學習者是十分挑戰的任務。</p>
                     <br/>
                    <p>鑒於以上三個挑戰點（後疫情時代、108課綱改革、網路原生代衝擊），不帆心看見家長有『被陪伴』和『被培力』的需求，於是成立宗旨為『幫助每個家長成為老師，期待每個家庭都能成為教室。』，並接由三環系統（家長培力講座、繁星共學團、親子共學），讓家長和孩子共同成長，真正實現不帆心理念。</p>
                </div>
            </section>
            <section className='home_container_two'>
                <img src='\assets\image\home\home_blue_bg.png'/>
                <div className='towho_container'>
                    <div className='title_box'>
                        <p className='main_title'>『為誰而做』</p>
                        <p className='title_mark'>!?</p>
                    </div>
                    <p className='sub_title'>— 不帆心服務族群 —</p>
                    <p className='hct_content'>不帆心主要服務對象對國小家庭，以雙北為主，包含主要照顧者和小學年段的學生。但講座觸及不僅限於小學家長，相關線上講座可開放給學齡前或中學年段家庭學習，也因為線上進行，可觸及到全台灣的家庭。但不帆心共學課和繁星共學團，目前僅規劃於雙北地區的家長。</p>
                </div>
            </section>
            <section className='home_container_three'>
                <div className='title_container'>
                    <div className='title_box'>
                        <p className='main_title'>『為何而學』</p>
                        <p className='title_mark'>!?</p>
                    </div>
                    <p className='sub_title'>— 不帆心教育理念 —</p>
                    <div>
                        <p>讓每個孩子學習自由，自由學習。</p>
                        <img></img>
                    </div>
                </div>
                
                <div className="class_table_wrap">

                    {/* 手機版 */}
                    {/* <div className='emo_container'>
                        <div className="brain_box brain_emo">
                            <img className="brain_off brain_emo" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain1.png" />
                            <img className="brain_hover_on" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain1_on.png"/>
                        </div>
                    </div> */}
                    <table>
                        <tbody>
                            <tr>
                                <td className='col_gray_text'></td>
                                <td className="brain_box brain_emo">
                                    <img className="brain_off brain_emo" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain1.png" />
                                    <img className="brain_hover_on" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain1_on.png"/>
                                </td>
                                <td className="brain_box brain_media">
                                    <img className="brain_off" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain2.png" />
                                    <img className="brain_hover_on" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain2_on.png"/>
                                </td>
                                <td className="brain_box brain_explore">
                                    <img className="brain_off" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain3.png" />
                                    <img className="brain_hover_on" src="https://familyclassroom.tw/wp-content/uploads/2023/03/brain3_on.png"/>
                                </td>
                            </tr>

                            <tr>
                                <td className='col_gray_text'>課程主軸</td>
                                <td className='text_bold border_r_g'>情感教育</td>
                                <td className='text_bold border_r_g'>媒體教育</td>
                                <td className='text_bold'>探索教育</td>
                            </tr>
                            <tr>
                                <td className='col_gray_text'>質性說明</td>
                                <td className='text_top border_r_g'>從自我出發，期待孩子在學習啟動能提升對自我的認識，並且擴及到人際互動、家庭溝通等等。進而訓練孩子自我控制、挫折忍受等等，來應對各樣的學習挑戰。</td>
                                <td className='text_top border_r_g'>開始學習前，必須先了解學習工具，期待孩子在網路世代中能善用3C，並發揮正向的影響力。過程學習自我管理、美感素養、創意展現、科技資訊等來適應現在和未來的挑戰。</td>
                                <td className='text_top'>真正的學習者不是為了別人而學，而是找到自己的使命，做自己學習的主人。期待孩子及早認識自我、認識世界，在過程探索學習，了解個人興趣愛好，激發孩子自主學習。</td>
                            </tr>
                            <tr>
                                <td className='col_gray_text'>108課綱<br/>核心素養</td>
                                <td className='text_center border_r_g'>A1 身心素質與自我精進<br/>B1 符號通用語溝通表達<br/>C2 人際關係與團隊合作</td>
                                <td className='text_center border_r_g'>A3 規劃執行與創新應變<br/>B2 科技資訊與媒體素養<br/>B3 藝術涵養與美感素養</td>
                                <td className='text_center'>A2 系統思考與解決問題<br/>C1 道德實踐與公民意識<br/>C3 多元文化與國際理解</td>
                            </tr>
                            <tr>
                                <td className='col_gray_text'>課程子題</td>
                                <td className='border_r_g'>1. 人際互動與技巧<br/>2. 專注力訓練課程<br/>3. 團隊合作工作坊<br/>4. 自我管理能力<br/>5. 情緒素養培養<br/>6. 藝術與戲劇治療</td>
                                <td className='border_r_g'>1. 認識網路和媒體<br/>2. 學習媒體素養<br/>3. 媒體工具使用<br/>4. 小小播課/小小網紅<br/>5. 讀報課/雜誌課<br/>6. 電影/戲劇賞析<br/>7. 平面設計課</td>
                                <td>1. 自主學習工作坊<br/>2. 解決問題工作坊<br/>3. 議題式討論課程<br/>4. 小小職人體驗課<br/>5. 語言課(英文、新住民語、本土語)<br/>6. 設計思考工作坊(SDGs)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className='home_container_four'>
                <picture>
                    {/* <source srcset="https://familyclassroom.tw/wp-content/uploads/2023/03/Rectangle25_phone.png" media="(max-width: 750px)"> */}
                    <source src="\assets\image\home\home_data_bg.png" />
                    <img decoding="async" src="\assets\image\home\home_data_bg.png" alt=""/>
                </picture>           
                <div className='result_text_container'>
                    <div className='result_top'>
                        <p className='main_title'>我們的成果</p>
                        <p>2022年5月到2023年5月，我們辦理大量的親職講座、撰寫許多親職專欄文章、也整理了大量家長資源，期待讓家長受陪伴、受培力。也有嘗試辦理親子共學營，家長和孩子都非常喜歡不帆心的親子共學課，一年下來不帆心Line社群更是累積超過1000名家長粉絲，期待接下來能幫助更多家庭不煩心，而受幫助的家庭也能成為種子，繼續去幫助更多家庭~</p>
                    </div>
                    <div>
                        <div>
                            <p>20<span>場</span></p>
                            <p>辦理講座場次</p>
                        </div>
                        <div>
                            <p>1500<span>人</span></p>
                            <p>接觸國小家長</p>
                        </div>
                        <div>
                            <p>4<span>場</span></p>
                            <p>親子共學課程</p>
                        </div>
                        <div>
                            <p>30<span>組</span></p>
                            <p>共學家庭組數</p>
                        </div>
                    </div>
                </div>
               
            </section>
        </div>
    );
}