import React from "react";



function Blog() {
    return (
    <div className="blogPage" >
        <div className="blog-background">
            <div className="blog-head">
            <h1><strong> What is a Stop-Limit Order?</strong> </h1>
            <p style={{marginRight:"150px",marginTop:"15px"}}>Published Dec 9, 2018 <span style={{marginLeft:"30px"}}>Updated Jun 29, 2022</span> </p>
            </div>
            <div className="Box1">

            </div>
            <div className="blog-btn">
            <div className="blog-btn1">
                <p style={{marginTop:"4px"}}>Trading</p>
            </div>
            <div className="blog-btn2">
                <p style={{marginTop:"4px"}}>Essentials</p>
            </div>
            <div className="blog-btn3">
                <p style={{marginTop:"4px"}}>Jhinga</p>
            </div>
            <div className="blog-btn4">
                <p style={{marginTop:"4px"}}>Tutorials</p>
            </div>
            
            </div>
        </div>

        <div style={{marginTop:"80px"}}>
        <h4 > <strong>TL;DR</strong></h4>
        </div>
        <div className="para1">
            <p>A stop-limit order combines a stop trigger a limit order  </p>
            <p>In a stop-limit order, the stop price is the trigger price for the  </p>
        </div>
        <div >
            <h3><strong>Introduction </strong></h3>
        </div>
        <div className="para1">
            <p>If you want to start actively trading rather than HODL, you'll likely need to use more than market orders.  </p>
            
        </div>

        <div >
            <h3 style={{marginLeft:"474px"}}><strong>Limit order vs. stop-loss order vs. stop-limit order </strong></h3>
        </div>
        <div className="para1">
            <p>Limit orders, stop-loss orders and stop-limit orders are some of the most common order types.</p>
            
        </div>

        <div >
            <h3 style={{marginLeft:"-17px", marginTop:"-60px"}}><strong>Limit order </strong></h3>
        </div>
        <div className="para1">
            
        <p>When you set a limi order, you choose a maximum purchase price or minimum sale price.</p>
        <p>Typically, traders takes place sell limit orders above the current market priceand buy limit orders below the current market price.</p>
        <p>for example, if the market price of Bitcoin is $32,000 (BUSD),</p>
            
        </div>

        <div >
            <h3 style={{marginLeft:"55px", marginTop:"-60px"}}><strong>Stop-Limit order </strong></h3>
        </div>
        <div className="para1">
            
        <p>As mentioned, a stop-limit order combines a stop trigger and a limit order.</p>
        
        </div>

        <div >
            <h3 style={{marginLeft:"285px"}}><strong>How does a stop-limit order work? </strong></h3>
        </div>
        <div className="para1">
            <p>The best way to understand a stop-limit order is to break it into parts.</p>
            <p>Although the stop and limit prices can be the same,this isn't a requirement.</p>
            
        </div>

        <div >
            <h3 style={{marginLeft:"390px"}}><strong>Examples of buy and sell stop-limit orders  </strong></h3>
            <h3 style={{marginLeft:"23px", marginTop:"60px"}}><strong>Buy stop-limit  </strong></h3>
        </div>
        <div className="para1">
            <p>Imagine that BNB is currently at $300 (BUSD),</p>
            <p>Suppose that your technical analysis tells you an uptrend</p>
            
        </div>

        <div >
            <h3 style={{marginLeft:"20px"}}><strong>Sell stop-limit </strong></h3>
        </div>
        <div className="para1">
            <p>Imagine that you bought BNB at $285 (BUSD) and it's now at $300.</p>
            
        </div>

        <div >
            <h3 style={{marginLeft:"405px"}}><strong>How to place a stop-limit order on Binance? </strong></h3>
        </div>
        <div className="para1">
            <p>Let's say you just bought five BTC at $31,820.50 (BUSD) because you believe the price will begin to rise soon.</p>
            <div className="Box2"></div>
            <p style={{marginTop:"60px"}}>In this situation, you may want to set a stop-limit sell order to alleviate your losses  </p>
            <p style={{marginTop:"50px"}}>If you believe that $31,820 is reliable support level,</p>
        
            <div className="Box3"></div>

            <p style={{marginTop:"50px"}}>When you click [Sell BTC], a confirmation window will appear. </p>

            <div className="Box4"></div>
            <p style={{marginTop:"50px"}}>Note that the stop-limit order will only execute if and when the stop price is reached.</p>
            <p>Sometimes you might be in a situation where the price drops too fast,</p>

            <h3 style={{marginLeft:"-0px", marginTop:"90px"}}><strong>Advantages of using a stop-limit order</strong></h3>
            <p style={{marginTop:"50px"}}>A stop-limit order lets you customize and plan out your trades.</p>
            
            <h3 style={{marginLeft:"-0px", marginTop:"90px"}}><strong>Disdvantages of using a stop-limit order</strong></h3>
            <p style={{marginTop:"50px"}}> Stop-limit orders share the same disdvantages as limit orders,</p>
            <p style={{marginTop:"50px"}}> Liquidity can also be a problem if there aren't enough takers to fill your order.</p>

            <h3 style={{marginLeft:"-0px", marginTop:"90px"}}><strong>Strategies for placing stop-limit orders</strong></h3>
        
                <p style={{marginTop:"50px"}}>Now we've studied stop-limit orders, what's the best way to use them?</p>
                <p style={{marginTop:"50px",marginLeft:""}}> 1.Study the volatility of the asset you're placing a stop-limit order on.</p>
                <p style={{marginTop:"50px"}}>2.Think about the liquidity of the asset you're trading. </p>
                <p style={{marginTop:"50px"}}>3.Use the technical analysisto determine price levels. </p>
                <p style={{marginTop:"50px"}}>If you are not sure what support and resistance levels are,</p>
                
                <div className="blog-close">
                    <h3 style={{marginLeft:"200px", marginTop:"90px",paddingTop:"100px"}}><strong>Closing Thoughts</strong></h3>
                    <p style={{marginTop:"50px",marginLeft:"200px"}}>A stop-limit order is a powerful tool that can provide you more trading capability than simple market orders.</p>
                </div>
                <h1 style={{marginLeft:"200px", marginTop:"90px",paddingTop:"100px"}}><strong>More Articles</strong></h1>
        </div>

    </div>
    )
}
export default Blog;