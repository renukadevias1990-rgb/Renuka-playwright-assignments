import{SuperTestData} from "./parentclasstestdata";   
import {LoginTestData} from "./childclasslogintestdata";

// Provide the required constructor arguments for SuperTestData
const supertestData = new SuperTestData("Credential String", "Home Page String");
const loginTestData = new LoginTestData("Credential String", "Home Page String");

supertestData.enterCredentialsAction();
supertestData.navigateToHomePageAction();
loginTestData.enterUsername();
loginTestData.enterPassword();    


