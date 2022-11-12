import {
	Box,
	Button,
	Divider,
	Flex,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
	Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";

const CreateQuestion = ({ id, setQuestions }) => {
	const [points, setPoints] = useState(1);
	const [question, setQuestion] = useState("");
	const [numberofOption, setnumberofOption] = useState(2);
	const [options, setOptions] = useState([]);
	const [numberofAnswer, setnumberofAnswer] = useState(1);
	const [answer, setAnswer] = useState([]);
	const [optionType, setOptionType] = useState("");

	useEffect(() => {
		let ques = new Array(+numberofOption).fill("");
		setOptions(ques);
	}, [numberofOption]);

	useEffect(() => {
		let ans = new Array(+numberofAnswer).fill("");
		setAnswer(ans);
	}, [numberofAnswer]);

	const handleOptions = (e, i) => {
		const opt = [...options];
		opt[i] = e.target.value;
		setOptions(opt);
	};
	const handleAnswer = (e, i) => {
		const ans = [...answer];
		ans[i] = e.target.value;
		setAnswer(ans);
	};
	const handleSubmit = (e) => {
		const data = {
			question: question,
			optionType: optionType,
			numberofOption: numberofOption,
			numberofAnswer: numberofAnswer,
			options: options,
			answer: answer,
			points: points,
		};
		setQuestions(e, id - 1, data);
	};
	return (
		<Box p={[5, 10]} borderWidth={1} borderRadius={10}>
			<form onSubmit={handleSubmit} key={id}>
				<Flex gap={5} flexDirection={["column", "row"]} alignItems="center">
					<Flex alignItems="center" gap={5} w="full">
						<Heading as={"h4"} size={"sm"}>
							Q{id}
						</Heading>
						<Input
							type={"text"}
							placeholder="Enter your question"
							value={question}
							onChange={(e) => setQuestion(e.target.value)}
						/>
					</Flex>
					<Select
						placeholder="Select type"
						value={optionType}
						name={"optionType"}
						onChange={(e) => setOptionType(e.target.value)}
					>
						<option value="Checkbox">Checkbox</option>
						<option value="Radio">Radio</option>
						<option value="Single Textbox">Single Textbox</option>
					</Select>
				</Flex>
				<Divider colorScheme={"green"} pt={3} />
				{optionType === "Single Textbox" ? (
					<Box pt={3}>
						<FormLabel>
							Enter your answer
							{answer?.map((ans, i) => {
								return (
									<Input
										key={i}
										type={"text"}
										value={ans}
										onChange={(e) => {
											setAnswer([e.target.value]);
										}}
									/>
								);
							})}
						</FormLabel>
					</Box>
				) : optionType === "Checkbox" ? (
					<Box pt={3}>
						<FormLabel w="70%">
							Enter number of options
							<Input
								type={"number"}
								placeholder="Enter number of options"
								name={"numberofOption"}
								value={numberofOption}
								onChange={(e) => setnumberofOption(e.target.value)}
							/>
						</FormLabel>
						<Grid
							templateColumns={[
								"repeat(1, 100%)",
								"repeat(2, 50%)",
								"repeat(4, 25%)",
							]}
						>
							{options?.map((opt, i) => {
								return (
									<GridItem key={i}>
										<FormLabel>
											Option {i + 1}
											<Input
												type={"text"}
												value={opt}
												onChange={(e) => {
													handleOptions(e, i);
												}}
											/>
										</FormLabel>
									</GridItem>
								);
							})}
						</Grid>
						<Divider colorScheme={"green"} pt={2.5} />

						<FormLabel w="70%" pt={3}>
							Enter number of answers
							<Input
								type={"number"}
								placeholder="Enter number of options"
								name={"numberofAnswer"}
								value={numberofAnswer}
								onChange={(e) => setnumberofAnswer(e.target.value)}
							/>
						</FormLabel>
						<Grid
							templateColumns={[
								"repeat(1, 100%)",
								"repeat(2, 50%)",
								"repeat(4, 25%)",
							]}
						>
							{answer?.map((ans, i) => {
								return (
									<GridItem key={i}>
										<FormLabel>
											Answer {i + 1}
											<Input
												type={"text"}
												value={ans}
												onChange={(e) => {
													handleAnswer(e, i);
												}}
											/>
										</FormLabel>
									</GridItem>
								);
							})}
						</Grid>
					</Box>
				) : optionType === "Radio" ? (
					<Box pt={3}>
						<FormLabel w="70%">
							Enter number of options
							<Input
								type={"number"}
								placeholder="Enter number of options"
								name={"numberofOption"}
								value={numberofOption}
								onChange={(e) => setnumberofOption(e.target.value)}
							/>
						</FormLabel>
						<Grid
							templateColumns={[
								"repeat(1, 100%)",
								"repeat(2, 50%)",
								"repeat(4, 25%)",
							]}
						>
							{options?.map((opt, i) => {
								return (
									<GridItem key={i}>
										<FormLabel>
											Option {i + 1}
											<Input
												type={"text"}
												value={opt}
												key={i}
												onChange={(e) => {
													handleOptions(e, i);
												}}
											/>
										</FormLabel>
									</GridItem>
								);
							})}
						</Grid>
						<Divider colorScheme={"green"} pt={2.5} />

						<FormLabel pt={3}>
							Answer
							{answer?.map((ans, i) => {
								return (
									<Input
										key={i}
										type={"text"}
										value={ans}
										onChange={(e) => {
											setAnswer([e.target.value]);
										}}
									/>
								);
							})}
						</FormLabel>
					</Box>
				) : (
					<></>
				)}
				<Divider colorScheme={"green"} pt={2.5} />

				<FormLabel w="50%" pt={3}>
					Enter Points
					<Input
						type={"number"}
						value={points}
						onChange={(e) => setPoints(e.target.value)}
					/>
				</FormLabel>
				<Button type="submit" mt={3} mb={-3}>
					Add question
				</Button>
			</form>
		</Box>
	);
};

export default CreateQuestion;
