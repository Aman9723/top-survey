import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSurvey, getSurvey } from "../Redux/Survey/survey.actions";
import Footer from "./Footer/Footer";
import Navbar2 from "./Navbar2/Navbar2";

const MySurveys = () => {
	const dispatch = useDispatch();
	const survey = useSelector((store) => store.survey.survey);
	useEffect(() => {
		dispatch(getSurvey());
	}, []);
	const { token } = useSelector((store) => store.login);
	const array = token.split("_");
	return (
		<div>
			<Navbar2 />
			<Flex p={5} gap={3} flexDirection={"column"}>
				{survey?.map((ele, i) => {
					return ele.creator === array[1] ? (
						<Box borderWidth={1} p={3} key={i} borderColor="black">
							<Flex alignItems={"center"} justifyContent="center" gap={5}>
								<Heading as={"h3"} size={["sm", "md"]} w="33%" pl={5}>
									{ele.surveyTitle}
								</Heading>
								<Flex
									flexDirection={"column"}
									alignItems={"center"}
									borderLeftWidth={2}
									borderRightWidth={2}
									w="33%"
								>
									<Text fontSize={["md", "lg"]}>Number of Questions</Text>
									<Text fontSize={["md", "lg"]}>{ele.numberofQuestion}</Text>
								</Flex>

								<Flex justifyContent={"space-evenly"} w="33%">
									<Button variant={"outline"}>
										<Link href={`survey/${ele._id}`}>Attempt</Link>
									</Button>
									<Button
										variant={"outline"}
										onClick={() => {
											let id = ele._id;
											dispatch(deleteSurvey({ id }));
											dispatch(getSurvey());
										}}
									>
										<Link>Delete</Link>
									</Button>
								</Flex>
							</Flex>
						</Box>
					) : (
						<div key={i}></div>
					);
				})}
			</Flex>
			<Footer />
		</div>
	);
};

export default MySurveys;
