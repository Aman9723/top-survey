import { Box, Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSurvey } from "../Redux/Survey/survey.actions";
import CreateQuestion from "./CreateQuestion";
const CreateSurvey = () => {
	const dispatch = useDispatch();

	const [surveyTitle, setSurveyTitle] = useState("");
	const [numberofQuestion, setnumberofQuestion] = useState(1);
	const [questions, setQuestions] = useState([]);
	const handleQuestions = (e, i, data) => {
		e.preventDefault();
		const que = [...questions];
		que[i] = data;
		setQuestions(que);
	};

	useEffect(() => {
		let ques = new Array(+numberofQuestion).fill("");
		setQuestions(ques);
	}, [numberofQuestion]);

	const handleSubmit = async () => {
		const data = {
			surveyTitle: surveyTitle,
			numberofQuestion: numberofQuestion,
			questions: [...questions],
			creator: "Pratik",
		};
		dispatch(addSurvey({ ...data }));
	};
	return (
		<Box p={5}>
			<FormLabel>
				Survey Title
				<Input
					type={"text"}
					name={"surveyTitle"}
					value={surveyTitle}
					onChange={(e) => setSurveyTitle(e.target.value)}
				/>
			</FormLabel>
			<FormLabel>
				Number of Questions
				<Input
					type={"number"}
					name={"numberofQuestion"}
					value={numberofQuestion}
					onChange={(e) => setnumberofQuestion(e.target.value)}
				/>
			</FormLabel>
			<Flex gap={5} flexDirection="column" mb={5}>
				{questions?.map((ele, i) => {
					return (
						<CreateQuestion key={i} id={i + 1} setQuestions={handleQuestions} />
					);
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
					Add Survey
				</Button>
			</Flex>
		</Box>
	);
};

export default CreateSurvey;
