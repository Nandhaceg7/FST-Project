import "./Search.css";
// import Workspace from '../Workspace/Workspace';
import Card from "../card/Card";
import workers from "../Workers.json";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const filteredWorkers = workers.filter((worker) =>
    Object.values(worker).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <div className="Search">
        <h1>
          <div className="hii">Hii !</div> Hello May I Help You
        </h1>

        <input
          type="text"
          className="SearchBar"
          placeholder="Search --->"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredWorkers.length > 0 ? (
        filteredWorkers.map((worker) => (
          <Card
            name={worker.name}
            Location={worker.location}
            category={worker.category}
          />
        ))
      ) : (
        <p>No workers found.</p>
      )}
    </>
  );
}
