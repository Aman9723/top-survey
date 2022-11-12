import { Box,Button,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Navbar2/Navbar2'
import styles from "./PlanAndPricing.module.css"
import Footer from "../Footer/Footer"


function PlanAndPricing() {
  return (
    <>
       <Box>
        <Navbar2/>
          <h1>Choose a Plan that works for you</h1>
      
          <Box className={styles.MinNavBar1}>
               <Text className={styles.MinNavBar}>Team Plans</Text>
               <Text className={styles.MinNavBar}>Individual Plans</Text>
               <Text className={styles.MinNavBar}>Enterprise</Text>
          </Box>

           <Box className={styles.MinNavBar2}>
             <Box className={styles.insideMinNavbar2}  width={"30%"} gap={"20px"}> 
               <Text className={styles.headings}>  TEAM ADVANTAGE </Text> 
    
              <Box   margin={"auto"} width={"80%"}>
                <Text  display={"flex"} gap={"5px"}> <Text marginTop={"14px"} color={"#4a4a4a"} fontSize={"25px"} marginLeft={"25px"}> Rs 1,500 </Text> <Text marginTop={"24px"} color={'gray'} fontWeight={"bold"}>/user / month</Text> </Text>
                <Text>Starting at 3 users, billed annually</Text>
              </Box>
              <Button  background={"#007faa"} className={styles.Selectbtn}>SELECT</Button>
              <Box>
              <ul>
                <li>Survey sharing with fine control over who can view and edit.</li>
                <li>Gather comments all in one place.</li>
                <li>Let team members analyze, filter, and export results</li>
                <li>Notify others when you get new responses</li>
                <li>Shared asset library for on-brand surveys</li>
                <li>Add Contributor Seats</li>
                <li>Add or reassign accounts at any time</li>
                <li>Free integrations with popular collaboration apps</li>
                <li>Notify others when you get new responses</li>
              </ul>
              </Box>
              
              
             </Box>

            

             <Box className={styles.insideMinNavbar2}   width={"30%"}> 
               <Text className={styles.headings}>  TEAM PREMIER </Text> 
    
              <Box   margin={"auto"} width={"80%"}>
                <Text  display={"flex"} gap={"5px"}> <Text marginTop={"14px"} color={"#4a4a4a"} fontSize={"25px"} marginLeft={"25px"}> Rs 3,800 </Text> <Text marginTop={"24px"} color={'gray'} fontWeight={"bold"}>/user / month</Text> </Text>
                <Text>Starting at 3 users, billed annually</Text>
              </Box>
              <Button bg={"#671e75"} className={styles.Selectbtn}>SELECT</Button>
              <Box>
              <ul>
                <li>Survey sharing with fine control over who can view and edit.</li>
                <li>Gather comments all in one place.</li>
                <li>Let team members analyze, filter, and export results</li>
                <li>Notify others when you get new responses</li>
                <li>Shared asset library for on-brand surveys</li>
                <li>Add Contributor Seats</li>
                <li>Add or reassign accounts at any time</li>
                <li>Free integrations with popular collaboration apps</li>
                <li>Notify others when you get new responses</li>
              </ul>
              </Box>
              
              
             </Box>

             <Box className={styles.insideMinNavbar2}  width={"30%"}> 
               <Text className={styles.headings}>  ENTERPRISE </Text> 
    
              <Box   margin={"auto"} width={"80%"}>
                <Text  display={"flex"} gap={"5px"}> <Text marginTop={"14px"} color={"#4a4a4a"} fontSize={"25px"} marginLeft={"25px"}> Rs 3,800 </Text> <Text marginTop={"24px"} color={'gray'} fontWeight={"bold"}>/user / month</Text> </Text>
                <Text>Starting at 3 users, billed annually</Text>
              </Box>
              <Button bg={"#05467e"}  className={styles.Selectbtn}>SELECT</Button>
              <Box>
              <ul>
                <li>Survey sharing with fine control over who can view and edit.</li>
                <li>Gather comments all in one place.</li>
                <li>Let team members analyze, filter, and export results</li>
                <li>Notify others when you get new responses</li>
                <li>Shared asset library for on-brand surveys</li>
                <li>Add Contributor Seats</li>
                <li>Add or reassign accounts at any time</li>
                <li>Free integrations with popular collaboration apps</li>
                <li>Notify others when you get new responses</li>
              </ul>
              </Box>
              
              
             </Box>
           </Box>
           <Footer/>
       </Box>
    </>
  )
}

export default PlanAndPricing