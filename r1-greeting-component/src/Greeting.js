function Greeting({ name = "friend" }) {
    return (
        <div>
            <h2>Hello {name}!</h2>
            <p>Welcome to React Onboarding, {name}. Let's build something awesome!</p>
        </div>
    );
};

export default Greeting;