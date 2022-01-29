import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import axios from "axios";
import { style } from "@mui/system";

// let poisSearch = require("../data/config/searchPoi");
// let poiSearch = poisSearch.searchPoi;

function SearchTemp() {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search || "");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    if (search && router.pathname !== "/searchResults") {
      axios
        .post(
          `https://apict-preprod.dag-system.com/appPoi/poi/list/`,
          poiSearch(search),
          {
            headers: {
              appId: "434364515444337a774f2b2b30495268414f7133446e6974",
              appPassword: "4768452f48743052",
              appName: "dashboard",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => res.data.poiList)
        .then((poiList) => setResults(poiList))
        .catch((err) => {
          console.error(err.response.data);
        });
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className="search-box mr-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (search.length > 1) {
            router.push(`/searchResults?search=${search}`);
          }
        }}
      >
        <button className="btn-search w-12 h-12">
          <i className="fas fa-search">
            <SearchIcon sx={{ fontSize: 36 }} />
          </i>
        </button>
        <input
          value={search}
          type="text"
          className="input-search"
          placeholder="Recherche . . ."
          onChange={(e) => {
            setSearch(e.target.value);
            setQuery(poiSearch(e.target.value));
          }}
        />
      </form>
      <div className="absolute z-50 bg-transparent max-h-30 w-[300px] overflow-scroll overflow-y-auto results">
        {search &&
          results
            .filter((result) =>
              result.informations.name
                .toLowerCase()
                .includes(result.informations.name.toLowerCase())
            )
            .map((result) => {
              return (
                <p
                  className="p-2 text-primary bg-five bg-opacity-90 results hover:font-bold hover:bg-opacity-100 hover:shadow-md hover:cursor-pointer"
                  onClick={() =>
                    router.push(`/poiDetails/${encodeURIComponent(result._id)}`)
                  }
                  key={result._id}
                >
                  {result.informations.name}
                </p>
              );
            })}
      </div>
    </div>
  );
}

export default SearchTemp;
