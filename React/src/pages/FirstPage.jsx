import { Card } from "react-bootstrap";
import Categories from '../layouts/Categories';

function FirstPage() {
    return (
        <>
        <Categories/>
        <body>
            <section>
                <div className="box">
                    <Card bg="danger" text="white" className="text-center p-3 " >
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Welcome To Garage Application
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    <cite title="Source Title"> your cars are entrusted to us</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                </div>
            </section>
        </body>
</>
    );
}

export default FirstPage;