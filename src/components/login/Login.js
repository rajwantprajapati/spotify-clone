import { accessUrl } from "../../spotify";
import classes from "./Login.module.css";

const Login = () => {
    return (
        <div className={classes.login}>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
};

export default Login;