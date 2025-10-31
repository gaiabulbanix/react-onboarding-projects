import Greeting from './Greeting';

function GreetingHub() {
    return (
        <div>
            <h1>Greeting Hub</h1>
            <Greeting name="Gorby" />
            <Greeting />
        </div>
    );
};

export default GreetingHub