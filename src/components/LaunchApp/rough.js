<Accordion style={{ paddingBottom: "10px" }} defaultActiveKey={['0']} alwaysOpen id="1">
    <Accordion.Item className="tree" eventKey="0" style={{ borderLeft: '1px solid gray' }}>
        {/* <Accordion.Header>1 JHINGA ≈ 1 Rs + Gas Fees</Accordion.Header> */}
        <Accordion.Header className="tree-item" onClick={handleAccordion}><img style={{ margin: "5px" }} src={daiImg} />{accordion === true ? "1 JHINGA ≈ 1 Rs + Gas Fees" : "Use Payment Method"}</Accordion.Header>
        <Accordion.Body>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="tree-item"><img style={{ margin: "5px" }} src={daiImg} />See Calculation</Accordion.Header>
                <Accordion.Body>
                    <p className="tree-item" style={{ Color: "grey" }}><img style={{ margin: "5px" }} src={daiImg} />0.3% Blockchain Fee</p>
                    <p className="tree-item" style={{ Color: "grey" }}><img style={{ margin: "5px" }} src={daiImg} />0.2% Convenience Fee</p>
                </Accordion.Body>
            </Accordion.Item>
            <p className="tree-item"><img style={{ margin: "5px" }} src={daiImg} />1.05 Rs <p style={{ Color: "grey" }}>Total Fees</p></p>
            <p className="tree-item"><img style={{ margin: "5px" }} src={daiImg} />1 JHINGA ≈ 1 Rs + Gas Fees <p style={{ Color: "grey" }}>Rate</p></p>

        </Accordion.Body>
    </Accordion.Item>

</Accordion>