const baseURL = "http://localhost:8080"
const mockResult = [{id:1, partyName: "FDP", percentage: 0.2},{id:2, partyName: "SPD", percentage: 0.3}, {id:3, partyName: "Bündnis90", percentage: 0.5}, {id:4, partyName: "CDU&CSU", percentage: 0.1}]
const mockData = [{id: 1, question: "Yes or No?"}, {id: 2, question: "Yes or Yes?"}, {id: 3, question: "No or No?"}, {id: 1, question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}]

export async function getQuestions() {
    return { status: 200, data: mockData }
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(baseURL + "/questions", requestOptions);
    const data = await response.json();
    return { status: response.status, data: data };
}

export async function postResult(requestBody) {
    return { status: 200, data: mockResult }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(baseURL + "/result", requestOptions);
    const data = await response.json();
    return { status: response.status, data: data };
}