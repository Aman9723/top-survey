import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../Redux/Survey/survey.actions";
import Footer from "./Footer/Footer";
import Navbar2 from "./Navbar2/Navbar2";

const AllSurverys = () => {
	const dispatch = useDispatch();
	const survey = useSelector((store) => store.survey.survey);
	useEffect(() => {
		dispatch(getSurvey());
	}, []);
	console.log(survey);
	return (
		<div>
			<Navbar2 />
			{survey?.map((ele) => {
				return (
					<Box borderWidth={1}>
						<Flex>
							<Heading as={"h3"} size={["sm", "md"]}>
								{ele.surveyTitle}
							</Heading>
						</Flex>
					</Box>
				);
			})}
			<Footer />
		</div>
	);
};

export default AllSurverys;
