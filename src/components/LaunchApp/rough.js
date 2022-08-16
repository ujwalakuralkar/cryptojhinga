import React, { useEffect, useState, Component } from "react";
import { useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import DropdownImg from "../../Assets/line-angle-right.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import IndImg from "../../Assets1/India.png";
import UsdImg from "../../Assets1/USA.png";
import EurImg from "../../Assets1/Europe.png";
import UkImg from "../../Assets1/UK.png";
import CoinBase from "../../Assets1/coinbase.png";
import Coin98 from "../../Assets1/98.png";
import tokenPocket from "../../Assets1/token.png";
import mathWallet from "../../Assets1/math.png";
import Metamask from "../../Assets1/metamask.png";
import clover from "../../Assets1/clover.png";
import fortmatic from "../../Assets1/Fortmatic.png";
import binance from "../../Assets1/Path.png"
import jhinga from "../../Assets1/jhinga.png"

import {
    Container,
    Row,
    Col,
    Dropdown,
    Button,
    ButtonGroup,
    SplitButton
} from "react-bootstrap";


// import ButtonPrimary from "../../../components/button/ButtonPrimary";  



const Swap = () => {

    const { pathname } = useLocation();

    const [tradeType, settradeType] = useState("buy");
    const [showtab, setShowTab] = useState(1);
    const [currentVal, setCurrentVal] = useState("");
    const [accordion, setAccordion] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [value, setValue] = useState('');
    const [onSearchTerm, setOnsearchTerm] = useState()
    const [token, setToken] = useState('select a token')
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };
    function toggleTab(e){
        setToggleState(e);
        console.log(e);
    }

    function handleAccordion() {
        if (accordion === true) {
            setAccordion(false);
        } else {
            setAccordion(true);
        }
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSearch = (event) => {
        console.log(event.target.value)
    }


    return (
        <section className="launchPage" style={{ paddingTop: "150px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ left: "40%", position: "relative" }}>Swap Exchange</h1>
                <div style={{ left: "60%", position: "relative" }}>
                    <Dropdown as={ButtonGroup}>
                        {/* <DropdownToggle menuAlign="left" split /> */}
                        {/* <Dropdown.Menu> */}
                        <SplitButton
                            menuAlign={{ lg: "left" }}
                            title={currentVal === "" ? "Select a Network" : currentVal}
                        >
                            <strong><p>Select a Network</p></strong>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => setCurrentVal("Ethereum")} eventKey={1}>
                                Ethereum
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setCurrentVal("BSC Network")} eventKey={2}>
                                BSC Network
                            </Dropdown.Item>
                        </SplitButton>
                        {/* </Dropdown.Menu> */}
                    </Dropdown>
                </div>
            </div>
            <Container className="launch-card">


                <div className="header">

                    {/* <Row>
                        <Col className={`launch-nav-item nv1 ${tradeType === "buy" ? "Mint-btn" : ""}`} onClick={() => settradeType("buy")}>
                            <p >MINT</p>
                        </Col>
                        <Col className={`launch-nav-item ${tradeType === "sell" ? "Burn-btn" : ""}`} onClick={() => settradeType("sell")}>
                            <p>BURN</p>
                        </Col>
                    </Row> */}
                    <nav className="launch-nav btn" style={{ color: "grey", display: "flex", justifyContent: "space-around", margin: "auto" }}>
                        <div> <p style={{ margin: "10px 0px" }} className={`launch-nav-item ${tradeType === "buy" ? "Mint-btn" : ""}`} onClick={() => settradeType("buy")}>MINT</p></div>
                        <div className="partition" />
                        <div> <p style={{ margin: "10px 0px" }} className={`launch-nav-item ${tradeType === "sell" ? "Burn-btn" : ""}`} onClick={() => settradeType("sell")}>BURN</p></div>
                    </nav>





                    {/* Mint tab start */}
                    <div>
                        <div className="CoinSelectBar" >
                            <Button onClick={()=>toggleTab(1)} className="CoinSelectButton" >Stablecoin</Button>
                            <Button onClick={()=>toggleTab(2)} className="CoinSelectButton" >Metaverse</Button>
                            <Button onClick={()=>toggleTab(3)} className="CoinSelectButton" >Cryptocurrency</Button>

                        </div>

                        <Row class="form-input" style={{ display: "flex", width: "100%", marginBottom: "10px" }}>
                            <Col md={9}>
                                <input type="number" className="input-launch" style={{ height: "3.5em", color: '#e9ecef' }} placeholder="Spend" />
                            </Col>
                            <Col style={{ backgroundColor: "#f7f7f7", maxHeight: "4.5em", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} md={3}>
                                <p style={{ margin: "8px 0px" }}>{tradeType === "buy" ? <button className="selectToken" style={{ display: "contents" }} variant="primary" onClick={handleShow1} ><div>{token === null ? '' : token}<img style={{ padding: "0 5px", height: "0.5em" }} src={DropdownImg} /></div></button> : <div style={{ display: "flex", maxHeight: "2.5em" }}><img style={{ height: "1.5em" }} src={jhinga} /><p>JHINGA</p> </div>}</p>
                            </Col>
                        </Row>
                        <Row class="form-input" style={{ textAlign: "left", width: "75%" }}>

                            <Accordion style={{ paddingBottom: "10px" }} defaultActiveKey={['0']} alwaysOpen id="1">
                                <Accordion.Item eventKey="0">
                                    {/* <Accordion.Header>1 JHINGA ≈ 1 Rs + Gas Fees</Accordion.Header> */}
                                    <Accordion.Header onClick={handleAccordion}>{accordion === true ? "1 JHINGA ≈ 1 Rs + Gas Fees" : "Use Payment Method"}</Accordion.Header>
                                    <Accordion.Body>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>See Calculation</Accordion.Header>
                                            <Accordion.Body>
                                                <li style={{ Color: "grey" }}>0.3% Blockchain Fee</li>
                                                <li style={{ Color: "grey" }}>0.2% Convenience Fee</li>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <li>1.05 Rs <p style={{ Color: "grey" }}>Total Fees</p></li>
                                        <li>1 JHINGA ≈ 1 Rs + Gas Fees <p style={{ Color: "grey" }}>Rate</p></li>

                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Row>
                        <Row class="form-input" style={{ display: "flex", paddingBottom: "10px", width: "100%" }}>
                            <Col md={9}>
                                <input type="number" className="input-launch" style={{ width: "100%", height: "3.5em", color: '#e9ecef' }} placeholder="Recieve" />
                            </Col>
                            <Col style={{ backgroundColor: "#f7f7f7", maxHeight: "4.5em", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} md={3}>
                                <p style={{ margin: "8px 0px", paddingTop: '17px' }}>{tradeType === "buy" ? <div style={{ display: "flex", maxHeight: "2.5em" }}><img style={{ height: "1.5em" }} src={jhinga} /><p>JHINGA</p> </div> : <button className="selectToken" style={{ display: "contents" }} variant="primary" onClick={handleShow1} ><div>{token === null ? '' : token}<img style={{ padding: "0 5px", height: "0.5em" }} src={DropdownImg} /></div></button>}</p>
                            </Col>

                        </Row>
                    </div>
                    {/* Mint tab close */}





                    <div>

                        <Button className="selectToken" variant="primary" style={{ width: "100%", height: "70px", borderRadius: "10px", fontSize: "18px" }} onClick={handleShow} >Connect Wallet</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton >
                                <Modal.Title style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "revert" }}> Connect a Wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <div style={{ backgroundColor: "rgb(222 222 222 / 36%)", borderRadius: "10px", padding: "10px 20px" }}>
                                    <p>By connecting a wallet, you agree to Uniswap Labs' <a style={{ color: "#FFA000" }} href="">Terms of Services</a> and acknowledge that you read and understand the <a style={{ color: "#FFA000" }} href="">ZINGA ProtoCol Disclaimer</a></p>
                                </div>
                                <hr />
                                <Container>
                                    <Row style={{ margin: "2px 8px" }} >
                                        <Col><p style={{ margin: "10px 0" }}><strong>Coinbase Wallet</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={CoinBase} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Wallet Connect</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Coin 98</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={Coin98} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Token Pocket</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={tokenPocket} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Math Wallet</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "1em" }} src={mathWallet} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Blockto Wallet</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Install Metamask</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={Metamask} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Portis</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Clover</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "1.5em" }} src={clover} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Fortmatic</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "1em" }} src={fortmatic} /></Col>
                                    </Row>
                                    <hr />
                                    <Row style={{ margin: "2px 8px" }}>
                                        <Col><p style={{ margin: "10px 0" }}><strong>Binance</strong></p></Col>
                                        <Col style={{ textAlign: "right" }}><img style={{ height: "2.5em" }} src={binance} /></Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer className="footer1">

                            </Modal.Footer>
                        </Modal>
                    </div>






                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title className=''>Select a Token</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <div classme="searchWrapper" >
                                <div className="Search"  >
                                    <input closeButton className="input" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="SwapItem">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={IndImg} /> <p onClick={() => setToken("USDT")} style={{ margin: "2px" }}> USDT</p>
                                    </div>
                                </div>
                                <div className="SwapItem1" >
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={UsdImg} />  <p onClick={() => setToken('USDC')} style={{ margin: "2px" }}>USDC</p>
                                    </div>
                                </div>
                                <div className="SwapItem2">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} /> <p onClick={() => setToken('BUSD')} style={{ margin: "2px" }}>BUSD</p>
                                    </div>
                                </div>


                            </div>
                            <hr style={{ width: '420px', marginLeft: "22px", height: "2px" }} />

                            <Container>
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('USDT')} >
                                    <Col className="SwapIcon"><img style={{ height: "1.5em", margin: "1px 7px" }} src={IndImg} />USDT</Col>
                                    <Col className="text1">Tether</Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('USDC')}>
                                    <Col className="SwapIcon1"><img style={{ height: "1.5em", margin: "2px 5px" }} src={UsdImg} />USDC</Col>
                                    <Col style={{ marginRight: "200px", marginLeft: "20px" }} className="text1">United States Dollar Coin </Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('BUSD')}>
                                    <Col className="SwapIcon2"><img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} />BUSD</Col>
                                    <Col className="text1">Binance</Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('DAI')}>
                                    <Col className="SwapIcon3"><img style={{ height: "1.5em", margin: "0px 7px" }} src={UkImg} /> DAI </Col>
                                    <Col className="text1">Dai </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer className="footer1">

                        </Modal.Footer>
                    </Modal>

                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title className=''>Select a Token</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <div classme="searchWrapper" >
                                <div className="Search"  >
                                    <input closeButton className="input" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="SwapItem">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={IndImg} /> <p onClick={() => setToken("USDT")} style={{ margin: "2px" }}> USDT</p>
                                    </div>
                                </div>
                                <div className="SwapItem1" >
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={UsdImg} />  <p onClick={() => setToken('USDC')} style={{ margin: "2px" }}>USDC</p>
                                    </div>
                                </div>
                                <div className="SwapItem2">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} /> <p onClick={() => setToken('BUSD')} style={{ margin: "2px" }}>BUSD</p>
                                    </div>
                                </div>


                            </div>
                            <hr style={{ width: '420px', marginLeft: "22px", height: "2px" }} />

                            <Container>
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('USDT')} >
                                    <Col className="SwapIcon"><img style={{ height: "1.5em", margin: "1px 7px" }} src={IndImg} />USDT</Col>
                                    <Col className="text1">Tether</Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('USDC')}>
                                    <Col className="SwapIcon1"><img style={{ height: "1.5em", margin: "2px 5px" }} src={UsdImg} />USDC</Col>
                                    <Col style={{ marginRight: "200px", marginLeft: "20px" }} className="text1">United States Dollar Coin </Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('BUSD')}>
                                    <Col className="SwapIcon2"><img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} />BUSD</Col>
                                    <Col className="text1">Binance</Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('DAI')}>
                                    <Col className="SwapIcon3"><img style={{ height: "1.5em", margin: "0px 7px" }} src={UkImg} /> DAI </Col>
                                    <Col className="text1">Dai </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer className="footer1">

                        </Modal.Footer>
                    </Modal>

                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title className=''>Select a Token</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <div classme="searchWrapper" >
                                <div className="Search"  >
                                    <input closeButton className="input" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="SwapItem">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={IndImg} /> <p onClick={() => setToken("USDT")} style={{ margin: "2px" }}> USDT</p>
                                    </div>
                                </div>
                                <div className="SwapItem1" >
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={UsdImg} />  <p onClick={() => setToken('USDC')} style={{ margin: "2px" }}>USDC</p>
                                    </div>
                                </div>
                                <div className="SwapItem2">
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} /> <p onClick={() => setToken('BUSD')} style={{ margin: "2px" }}>BUSD</p>
                                    </div>
                                </div>


                            </div>
                            <hr style={{ width: '420px', marginLeft: "22px", height: "2px" }} />

                            <Container>
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('USDT')} >
                                    <Col className="SwapIcon"><img style={{ height: "1.5em", margin: "1px 7px" }} src={IndImg} />USDT</Col>
                                    <Col className="text1">Tether</Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('USDC')}>
                                    <Col className="SwapIcon1"><img style={{ height: "1.5em", margin: "2px 5px" }} src={UsdImg} />USDC</Col>
                                    <Col style={{ marginRight: "200px", marginLeft: "20px" }} className="text1">United States Dollar Coin </Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('BUSD')}>
                                    <Col className="SwapIcon2"><img style={{ height: "1.5em", margin: "0px 7px" }} src={EurImg} />BUSD</Col>
                                    <Col className="text1">Binance</Col>
                                </Row>
                                <hr style={{ width: '420px', marginLeft: "10px" }} />
                                <Row style={{ display: "flex", maxHeight: "20px" }} onClick={() => setToken('DAI')}>
                                    <Col className="SwapIcon3"><img style={{ height: "1.5em", margin: "0px 7px" }} src={UkImg} /> DAI </Col>
                                    <Col className="text1">Dai </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer className="footer1">

                        </Modal.Footer>
                    </Modal>


                </div>

            </Container>


        </section>
    );
};

export default Swap;










{/* <div className="menu-wrapper">
    <i className="fa-solid fa-caret-down" onClick={() => setmenuOpen("buy")}></i>
    <Button onClick={() => setmenuOpen("buy")}>expand</Button>
    {menuOpen === "buy" && (
        <div className="menu">
            <p className="menu-title">Order Type</p>
            {menuData.map((item) => (
                <div
                    key={item.name}
                    className="menu-item"
                    onClick={() => {
                        setactiveMenu(item.name);
                        setmenuOpen(null);
                    }}
                > style={{textAlign:"right"}}
                    <p>{item.name}</p>
                </div>

            ))}
        </div>
    )}
</div> */}
