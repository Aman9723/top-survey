import React from "react";
import {
	Alert,
	AlertIcon,
	Box,
	Button,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Image,
	Input,
	Link,
	Text,
} from "@chakra-ui/react";
import FormFooter from "./FormFooter";
import LogoBox from "./LogoBox";
import { useDispatch, useSelector } from "react-redux";
import { login, loginEmail, loginPassword } from "../Redux/Login/login.actions";
import { IoKeyOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";

const Login = () => {
	const { email, password, loading, error, isEmailValid, token, errorMessage } =
		useSelector((store) => store.login);

	const dispatch = useDispatch();

	// on change, handle email and password
	const handleChange = ({ target }) => {
		if (target.name === "email") dispatch(loginEmail(target.value));
		else dispatch(loginPassword(target.value));
	};

	// on click login the user if applicable
	const handleLogin = () => {
		dispatch(login({ email, password }));
	};

	if (token) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<>
			{error ? (
				<Alert status="error">
					<AlertIcon />
					{errorMessage}
				</Alert>
			) : null}
			<Box bg="#f7f8fa">
				<Flex w={{ base: "100%", sm: "440px" }} margin={"auto"}>
					<Image src="/topSurveyLogo.png" boxSize={"130px"} />
				</Flex>
				<Flex
					direction={"column"}
					w={{ base: "100%", sm: "440px" }}
					boxSizing={"border-box"}
					margin={"auto"}
					bg="white"
				>
					<FormControl
						boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
						p={{ base: "20px", sm: "36px" }}
						textAlign={"left"}
						display="flex"
						flexDir={"column"}
						gap="15px"
						borderBottom={"1.5px solid lightgray"}
					>
						<Text textAlign={"right"} fontSize={"15px"}>
							Don't have an account?{" "}
							<Link href="/signup/email" color={"#007faa"}>
								Sign up
							</Link>
						</Text>
						<Text fontSize={"34px"} color={"#333e48"}>
							Log in
						</Text>
						<Box>
							<FormLabel fontSize={"13px"}>Email address</FormLabel>
							<Input
								isInvalid={!isEmailValid && email !== ""}
								_hover={{ borderColor: "black" }}
								type="email"
								size={"lg"}
								value={email}
								onChange={handleChange}
								fontSize={"15px"}
								focusBorderColor="#00bf6f"
								errorBorderColor="#f05b24"
								borderRadius={"2px"}
								color={!isEmailValid ? "#f05b24" : null}
								borderColor="lightgray"
								name="email"
							/>
							{!isEmailValid && email !== "" ? (
								<FormHelperText color={"#f05b24"} fontSize={"13px"}>
									Enter a valid email address
								</FormHelperText>
							) : null}
						</Box>
						<Box>
							<FormLabel fontSize={"13px"}>Password</FormLabel>
							<Input
								isDisabled={!isEmailValid}
								_hover={{ borderColor: "black" }}
								type="password"
								size={"lg"}
								value={password}
								onChange={handleChange}
								fontSize={"15px"}
								focusBorderColor="#00bf6f"
								borderRadius={"2px"}
								borderColor="lightgray"
								name="password"
							/>
							<FormHelperText fontSize={"15px"} color="#005977">
								<Link href="/forgot/sendOtp">Forgot password?</Link>
							</FormHelperText>
						</Box>
						<Button
							isLoading={loading}
							bg="#00bf6f"
							isDisabled={!isEmailValid || password === ""}
							size="lg"
							_hover={{ bg: "00bf6f" }}
							borderRadius={"2px"}
							color="white"
							fontSize={"15px"}
							onClick={handleLogin}
						>
							Log in
						</Button>
					</FormControl>
					<Flex
						boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
						p={{ base: "20px", sm: "30px 36px" }}
						textAlign={"left"}
						display="flex"
						flexDir={"column"}
						gap="15px"
					>
						<Text fontSize={"15px"}>Or log in with</Text>
						<Button
							size="lg"
							bg={"white"}
							borderRadius={"2px"}
							color="black"
							fontSize={"15px"}
							_hover={{ bg: "#f7f8fa" }}
							border="1px solid lightgray"
						>
							<IoKeyOutline />
							&nbsp; SSO
						</Button>
						<Flex justifyContent={"space-between"}>
							<LogoBox src="/microsoft.png" text="Microsoft" />
							<LogoBox src="/facebook.png" text="Facebook" />
							<LogoBox src="/linkedIn.png" text="LinkedIn" />
							<LogoBox src="/google.png" text="Google" />
							<LogoBox src="/apple.png" text="Apple" />
						</Flex>
					</Flex>
				</Flex>
			</Box>
			<FormFooter />
		</>
	);
};

export default Login;
