import React from "react";
import { NextComponentType } from "next/types";
import Header from "../../components/Header";
import Container from "@material-ui/core/Container";

// import css
import "../../assets/css/style.styl";

interface LayoutProps {
    children: Element
};

const layout: NextComponentType<LayoutProps> = (props) => (
    <div>
        <Header></Header>
        <main className="content">
            <Container>
                { props.children }
            </Container>
            <style jsx>{`
                body: {
                    margin: 0px;
                }
                .content {
                    padding: 30px;
                }
                `}</style>
        </main>
    </div>
);

export default layout;
