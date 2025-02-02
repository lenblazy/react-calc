import './App.css'
import {Component} from "react";
import Button from "./components/Button.jsx";

class App extends Component {

    constructor(props) {
        super();

        this.state = {
            current: '',
            previous: []
        }
    }

    reset = () => {
    };

    addToCurrent = (symbol) => {
        this.setState({current: this.state.current + symbol});
    };

    render() {

        const buttons = [
            {symbol: 'C', cols: 3, action: this.reset},
            {symbol: '/', cols: 1, action: this.addToCurrent},
            {symbol: '7', cols: 1, action: this.addToCurrent},
            {symbol: '8', cols: 1, action: this.addToCurrent},
            {symbol: '9', cols: 1, action: this.addToCurrent},
            {symbol: 'X', cols: 1, action: this.addToCurrent},
            {symbol: '4', cols: 1, action: this.addToCurrent},
            {symbol: '5', cols: 1, action: this.addToCurrent},
            {symbol: '6', cols: 1, action: this.addToCurrent},
            {symbol: '-', cols: 1, action: this.addToCurrent},
            {symbol: '/', cols: 1, action: this.addToCurrent},
            {symbol: '1', cols: 1, action: this.addToCurrent},
            {symbol: '2', cols: 1, action: this.addToCurrent},
            {symbol: '3', cols: 1, action: this.addToCurrent},
            {symbol: '+', cols: 1, action: this.addToCurrent},
            {symbol: '0', cols: 2, action: this.addToCurrent},
            {symbol: '.', cols: 1, action: this.addToCurrent},
            {symbol: '=', cols: 1, action: this.addToCurrent},
        ];

        return (
            <>
                <div>
                    <input className={"result"} type={"text"} value={this.state.current}/>

                    {
                        buttons.map((button, idx) =>
                            (
                                <Button symbol={button.symbol} key={idx} cols={button.cols}
                                        action={(symbol) => button.action}/>
                            )
                        )
                    }


                </div>
            </>
        );
    }

}

export default App
