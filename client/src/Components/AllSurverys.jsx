import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../Redux/Survey/survey.actions";
import Footer from "../Pages/Footer";

import Navbar2 from "./Navbar2/Navbar2";

const AllSurverys = () => {
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
					return (
						<Box borderWidth={1} p={3} key={i} borderColor="black">
							<Flex alignItems={"center"} justifyContent="center" gap={5}>
								<Heading as={"h3"} size={["sm", "md"]} w="25%" pl={5}>
									{ele.surveyTitle}
								</Heading>
								<Flex
									flexDirection={"column"}
									alignItems={"center"}
									borderLeftWidth={2}
									borderRightWidth={2}
									w="25%"
								>
									<Text fontSize={["md", "lg"]}>Number of Questions</Text>
									<Text fontSize={["md", "lg"]}>{ele.numberofQuestion}</Text>
								</Flex>
								<Flex
									flexDirection={"column"}
									alignItems={"center"}
									borderRightWidth={2}
									w="25%"
								>
									<Text fontSize={["md", "lg"]}>Creator</Text>
									<Text fontSize={["md", "lg"]}>
										{ele.creator === array[1] ? "You" : ele.creator}
									</Text>
								</Flex>
								<Flex justifyContent={"center"} w="25%">
									<Button variant={"outline"}>
										<Link href={`survey/${ele._id}`}>Attempt</Link>
									</Button>
								</Flex>
							</Flex>
						</Box>
					);
				})}
			</Flex>
			<Footer />
		</div>
	);
};

export default AllSurverys;
