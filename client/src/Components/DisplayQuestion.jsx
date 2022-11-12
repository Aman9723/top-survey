import {
	Box,
	Checkbox,
	Flex,
	FormLabel,
	Heading,
	Input,
	Radio,
	RadioGroup,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const DisplayQuestion = ({ id, data }) => {
	// const [responseAnswer, setResponseAnswer] = useState([]);
	// let ans = new Array(+data.numberofAnswer).fill("");
	// setResponseAnswer(ans);

	// const handleResponseAnswer = (e, i) => {
	// 	const ans = [...responseAnswer];
	// 	ans[i] = e.target.value;
	// 	setResponseAnswer(ans);
	// };
	return (
		<Box
			p={[5, 10]}
			borderWidth={1}
			borderRadius={10}
			bgColor={"#F7F7F7"}
			borderColor={"black"}
		>
			<Flex alignItems="center" gap={5} w="full" mb={3}>
				<Heading as={"h4"} size={["sm", "md"]}>
					Q{id}. {data.question}
				</Heading>
			</Flex>
			{data.optionType === "Single Textbox" ? (
				<Box>
					<FormLabel>
						<Text fontSize={["md", "lg"]} mb={2}>
							Enter your answer
						</Text>
						<Input type={"text"} borderColor={"black"} />
					</FormLabel>
				</Box>
			) : data.optionType === "Radio" ? (
				<RadioGroup>
					<Flex wrap={"wrap"}>
						{data.options.map((ele, i) => {
							return (
								<Radio
									value={ele}
									key={i}
									w={["50%", "33%", "25%"]}
									colorScheme={"whatsapp"}
								>
									<Text fontSize={["md", "lg"]}>{ele}</Text>
								</Radio>
							);
						})}
					</Flex>
				</RadioGroup>
			) : data.optionType === "Checkbox" ? (
				<Box>
					<Flex wrap={"wrap"}>
						{data.options.map((ele, i) => {
							return (
								<Checkbox
									value={ele}
									key={i}
									w={["50%", "33%", "25%"]}
									colorScheme={"whatsapp"}
								>
									<Text fontSize={["md", "lg"]}>{ele}</Text>
								</Checkbox>
							);
						})}
					</Flex>
				</Box>
			) : (
				<></>
			)}
		</Box>
	);
};

export default DisplayQuestion;
