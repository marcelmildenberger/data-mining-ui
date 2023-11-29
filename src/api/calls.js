const baseURL = "http://3.79.95.9:8081"
const mockData = [
{id: 1, title: "Immigration", question: "Germany should implement specific reforms focused on skilled immigration. This involves transparent residency regulations, standardized definitions, and simpler administrative processes."}, 
{id: 2, title: "Infrastructure Support", question: "Financial support from the state for the federal states should be increased, including municipal education infrastructure, social housing, and road construction."}, 
{id: 3, title: "Rent Cap", question: "There should also be a rent cap for subsidized new housing construction."}, 
{id: 4, title: "Religious Advocacy", question: "The advocacy for freedom of religion and belief worldwide should be strengthened."},
{id: 5, title: "Asylum Policy", question: "Georgia, Algeria, Morocco, and Tunisia should be classified as safe countries of origin, and a cut-off date rule regarding the continuation of vocational training or existing permitted employment for asylum seekers and tolerated individuals from these countries should be implemented."}, 
{id: 6, title: "German Forces", question: "Armed German forces should be deployed to secure stabilization, prevent the resurgence of ISIS, and promote reconciliation in Iraq and Syria."}, 
{id: 7, title: "Organ Donation", question: "The readiness of documents on organ donation should be strengthened."}, 
{id: 8, title: "Extremism Surveillance", question: "There should be enhanced surveillance tools in the face of evolving extremism, allowing targeted scrutiny of individuals, improving collaboration with the Military Counterintelligence Service, and implementing surveillance in telecommunications at the source."},
{id: 9, title: "Piglet Castration", question: "The transition period for non-anesthetic piglet castration should be extended by two years. This involves submitting regulations, reporting progress on alternative methods and animal anesthesia."}]

export async function getQuestions() {
    return { status: 200, data: mockData }
}

export async function postResult(requestBody) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({type: requestBody.map((item) => item.answer)})
    };
    const response = await fetch(baseURL + "/predict", requestOptions);
    const data = await response.json();
    return { status: response.status, data: data };
}
