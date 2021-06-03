import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../assets/image/logo.png'
import axios from 'axios';

function Home(props) {

    const logo_image = {
        height: '300px',
    }
    // 홈으로 이동시 로컬 스토리지의 인증 토큰 삭제
    delete localStorage.accessToken;


    //
    function chk_express(){
        axios.post('https://13.124.239.189:3000/api/test/chk_DB').then(
            res => {
                console.log(res)
            }
        )
    }

    function chk_flask(){
        axios.post('https://13.124.239.189:5000/api/test').then(
            res => {
                console.log(res)
            }
        )
    }

    function chk_domain(){
        axios.post('https://ec2-3-36-71-108.ap-northeast-2.compute.amazonaws.com:3000/api/test/chk_DB').then(
            res => {
                console.log(res)
            }
        )
    }
    
    return(
        <div className="home">
            <div className="home-container">
                <div className="home-link">
                    <p style={{ fontWeight: "bold", color: "#6D42F8" }}>-</p>
                    <Link to="/login" style={{ fontWeight: "bold" }}>START</Link>

                    <br/>
                    <button onClick={chk_express}>chk_express</button>
                    <button onClick={chk_flask}>chk_flask</button>
                    <button onClick={chk_domain}>chk_domain</button>

                </div>
        
                <div className="home-title">
                    FLOG를 통해 감정이 담긴<br />회의록을 만나보세요
                </div>

                <div className="home-sub">
                    <span style={{ fontSize: "22px", fontFamily:"GmarketSansMedium", fontWeight: "bold", color: "#6D42F8" }}>-<br /></span>
                    음성 감정 인식 기반<br />실시간 화상 회의 및 회의록 요약 서비스
                </div>

                <div className="home-logo">
                    <img src={Logo} style={logo_image}></img>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);