import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSurveybyId } from "../Redux/Survey/survey.actions";
import DisplayQuestion from "./DisplayQuestion";

const DisplaySurvey = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const survey = useSelector((store) => store.survey.survey);

	useEffect(() => {
		dispatch(getSurveybyId({ id }));
	}, []);
	console.log(survey);
	const handleSubmit = () => {};
	return (
		<Box p={5}>
			<Flex gap={3} alignItems="center" justifyContent={"space-between"} pb={5}>
				<Heading size={["md", "lg"]} color="#21c35e">
					{survey.surveyTitle}
				</Heading>
			</Flex>
			<Flex gap={5} flexDirection="column" mb={5}>
				{survey.questions?.map((ele, i) => {
					return <DisplayQuestion key={i} id={i + 1} data={ele} />;
				})}
			</Flex>
			<Flex justifyContent={"center"}>
				<Button
					onClick={() => {
						handleSubmit();
					}}
					variant={"solid"}
					colorScheme="whatsapp"
					w="full"
				>
					Submit Response
				</Button>
			</Flex>
		</Box>
	);
};

export default DisplaySurvey;
