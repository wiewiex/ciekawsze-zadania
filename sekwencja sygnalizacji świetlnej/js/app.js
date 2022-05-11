import React, {Component} from "react";
import ReactDOM from "react-dom";

class TrafficLights extends Component {
    constructor(props) {
        super(props);
        this.style = {
                width: "100px",
                height: "100px",
                borderRadius: "50%"
        }
    }

    state = {
        lightNumber: 1
    }

    componentDidMount() {
        this.firstInterval = setTimeout(() => {
            console.log('pierwszy');
            this.setState(prevState => {
                return {
                    lightNumber: prevState.lightNumber + 1,
                }
            })
            setTimeout(() => {
                console.log('drugi');
                this.setState(prevState => {
                    return {
                        lightNumber: prevState.lightNumber + 1,
                    }
                })
                setTimeout(() => {
                    console.log('trzeci');
                    this.setState(prevState => {
                        return {
                            lightNumber: prevState.lightNumber + 1,
                        }
                    })
                }, this.props.redLight);
            }, this.props.yellowLight);
        }, this.props.greenLight);
    }

    componentWillUnmount() {
        clearInterval(first)
    }

    render() {
        console.log("render");
        return (
            <>
            <div style={{...this.style, backgroundColor: this.state.lightNumber <= 2 ? "red" : "black" }}> </div>
            <div style={{...this.style, backgroundColor: this.state.lightNumber === 2 || this.state.lightNumber === 4 ? "yellow" : "black"}}> </div>
            <div style={{...this.style, backgroundColor: this.state.lightNumber === 3 ? "green" : "black"}}> </div>
            </>
        )
    }
}

ReactDOM.render(
  <TrafficLights redLight = {4000} yellowLight = {2000} greenLight = {5000}/>,
  document.getElementById("app")
);
