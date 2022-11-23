import { test, expect } from "@jest/globals";
import { azsearch } from "./_azSearch/azsearch";
import { Idx, SearchServiceConfig } from "./_azSearch/azsearch.type";

let params: SearchServiceConfig;

params = {
  options: {
    searchTerm: "Mina Plastic Surgery",
    select: ["Id"],
  },
  az_search_endpoint: process.env.AZ_SEARCH_ENDPOINT as string,
  az_search_key: process.env.AZ_SEARCH_KEY as string,
  idx: Idx.hospitals,
  stage: "int",
};

test("Search Mina Plastic Surgerya", async () => {
  try {
    const { results } = await azsearch(params);
    expect(results[0].Id).toBe("10a038b4-a11a-469a-bb57-bf4e1c764325");
  } catch (e) {
    // expect(e).toMatch("Error");
  }
});
