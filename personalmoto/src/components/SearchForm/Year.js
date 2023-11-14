import axios from "axios";

const options = {
  method: "GET",
  url: "https://carapi.app/api/years",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXJhcGkuYXBwIiwic3ViIjoiZGU3Y2Y1NTctMDM2OS00ZWViLTkyNDgtNTFjMzM4ZThhNDA0IiwiYXVkIjoiZGU3Y2Y1NTctMDM2OS00ZWViLTkyNDgtNTFjMzM4ZThhNDA0IiwiZXhwIjoxNzAwNTc1ODAwLCJpYXQiOjE2OTk5NzEwMDAsImp0aSI6IjUwOTg3ZGYzLWE0MDYtNDM4OC1iNjkwLTU2M2EyMTA0OGI0MyIsInVzZXIiOnsic3Vic2NyaWJlZCI6ZmFsc2UsInN1YnNjcmlwdGlvbiI6bnVsbCwicmF0ZV9saW1pdF90eXBlIjoiaGFyZCJ9fQ.BnBG2_PIHBxg-AHrucYKcV8z_D1cu7hBgUfnrIftqR0",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const Years = [
  {
    id: "1",
    year: "2023",
  },
  {
    id: "2",
    year: "2022",
  },
  {
    id: "3",
    year: "2021",
  },
  {
    id: "4",
    year: "2020",
  },
  {
    id: "5",
    year: "2019",
  },
  {
    id: "6",
    year: "2018",
  },
  {
    id: "7",
    year: "2017",
  },
  {
    id: "8",
    year: "2016",
  },
  {
    id: "9",
    year: "2015",
  },
  {
    id: "10",
    year: "2014",
  },
];
export default Years;
