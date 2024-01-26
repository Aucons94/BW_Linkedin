import { useEffect, useState } from "react";
import { Card, CardText, CardTitle } from "react-bootstrap";

const Opportunity1 = () => {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    searchJobs();
  }, []);

  const searchJobs = async () => {
    try {
      let response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      console.log("Lavori:", data.data);
      setSearchResults(data.data);
    } catch (error) {
      console.error("Errore Lavori:", error);
    }
  };

  return (
    <Card className="mt-3">
      <CardTitle className="mt-3 mx-3">Opportunità all'estero</CardTitle>
      <CardText className="mb-3 mx-3">Perché hai espresso interesse per il lavoro all'estero</CardText>

      {searchResults
        // .filter((word) => word === "UK Only")
        .splice(0, 3)
        .map((result) => {
          return (
            <>
              <CardTitle className="opportunity mt-3 mx-3" key={"lavoro" + result.id}>
                {result.title}
              </CardTitle>
              <CardText className="jobs-location mx-3 mb-0">{result.company_name}</CardText>
              <CardText className="footer-small mx-3 mb-3">{result.candidate_required_location}</CardText>
            </>
          );
        })}
    </Card>
  );
};

export default Opportunity1;
