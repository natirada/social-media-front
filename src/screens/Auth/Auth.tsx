import React, { useCallback, useState } from "react";
import { Modal } from "../../common/Modal/Modal";
import Styles from "./Auth.style";
import Login from "./components/LogIn/Login";
import { Signup } from "./components/Signup/Signup";

const Auth = () => {
	const [isSignupModalVisable, setIsSignupModalVisable] = useState(false);
	const onClickCreateNewAccount = useCallback(() => {
		setIsSignupModalVisable(true);
	}, []);

	const onSubmitSignUp = (data: any) => {};
	return (
		<Styles.Container>
			<Styles.Body>
				<Styles.GridContianer>
					<Styles.GridItem>
						<Styles.Logo
							src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
							alt=""
						/>
						<p style={{ fontSize: 18 }}>
							Connect with friends and the world around you on Facebook.
						</p>
					</Styles.GridItem>
					<Styles.GridItem>
						<Login onClickCreateNewAccount={onClickCreateNewAccount} />
					</Styles.GridItem>
				</Styles.GridContianer>
			</Styles.Body>
			<Styles.Footer />

			<Modal isVisable={isSignupModalVisable}>
				<Signup
					onClocs={() => setIsSignupModalVisable(false)}
					onSubmit={onSubmitSignUp}
				/>
			</Modal>
		</Styles.Container>
	);
};

export default Auth;
